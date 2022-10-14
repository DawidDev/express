var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // Wspiera w parsowaniu cookies
var logger = require('morgan'); // służy do rzucenia logów w trybie developerskim

var indexRouter = require('./routes/index'); // import strony startowej
var newsRouter = require('./routes/news'); 
var quizRouter = require('./routes/quiz'); 
var adminRouter = require('./routes/admin'); 


var app = express();

// Ustawienie nasłuchiwania
const myPort = process.env.port || 3000;

app.listen(myPort, '127.0.0.1', () => {
    //console.log("Nasłuchujemy na porcie: " + myPort)
});

// view engine setup
app.set('views', path.join(__dirname, 'views')); // katalog z widokami szablonami, template w pug'u
app.set('view engine', 'pug');

app.use(function(req, res, next){
  
  res.locals.path = req.path // Przekazujemy path do locals, globalnych danych w szablonach 

  console.log(req.path) // przechowuje się tutaj aktualnie wybrany adres url

  next() // Aby wywołać funkcję przy wywołaniu routingu tak robimy. Następnie dajemy Next() aby przekierowało do wybranego routingu
})

// Wywoływanie rozszerzeń które będziemy urzywać w Express'ie
app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/news', newsRouter);
app.use('/quiz', quizRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler, przechwytywanie błędów routingów któe nie istnieją
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler - przechwytywanie błędów serwera (500..), logiczne, kodu, literówki itp
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
