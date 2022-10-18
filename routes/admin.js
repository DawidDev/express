const express = require('express');
const router = express.Router();

// Importujemy modele
const News = require('../models/news')

router.all('*', (req, res, next) => { // aby przechwycić wszystkie zapytania do admin 
  if(!req.session.admin){
    res.redirect('login')

    return;
  } 

  next() // aby wykonały się pozostałe requesty dajemy next
})

/* GET home page. */
router.get('/', (req, res) => {

  const newsData = new News({
    title: 'Tytuł testowy',
    description: 'Opis'
  })

  newsData.save((err) => {
    console.log(err)
  })

  res.render('admin', { title: 'Admin' });
});

module.exports = router;

// render ('nazwa szablonu', { obiekt z dodatkowymi parametrami przekazywanymi do szablonu })
