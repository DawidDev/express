const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// render ('nazwa szablonu', { obiekt z dodatkowymi parametrami przekazywanymi do szablonu })
