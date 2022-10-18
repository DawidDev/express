const express = require('express');
const router = express.Router();

const login = 'admin'
const password = '123'

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});


router.get('/login', (req, res) => {
  res.render('login', { title: 'Zaloguj' });
});

router.post('/login', (req, res) => {
  
  console.log(req.body);

  const body = req.body;

  if(body.login === login && body.password === password){

    req.session.admin = 1; 

    res.redirect('/admin')
  } else {
    res.redirect('/login')
  }

  
});


module.exports = router;

// get prezentuje formularz

// post przejmuje dane, weryfikuje o

// render ('nazwa szablonu', { obiekt z dodatkowymi parametrami przekazywanymi do szablonu })
