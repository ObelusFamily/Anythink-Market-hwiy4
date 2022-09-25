var router = require('express').Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

// return a list of title
router.get('/', function(req, res, next) {
  Item.find().distinct('titleList').then(function(title){
    return res.json({tags: title});
  }).catch(next);
});

module.exports = router;
