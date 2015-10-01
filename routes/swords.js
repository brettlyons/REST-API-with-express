// swords for routing
var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/swords');
var Swords = db.get('swords');

router.get('/', function(req, res) {
  Swords.find({}, function(err, swords) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(swords);
  });
});

router.post('/', function(req, res) {
  Swords.insert(req.body, function(err, sword) {
    if (err) {
      res.send(err);
    }
    res.status(201).json(sword);
  });
});

router.get('/:id', function(req, res) {
  Swords.find({_id: req.params.id}, function(err, sword) {
    if (err) {
      res.send(err);
    }
    console.log(req.params.id);
    res.status(201).json(sword);
  });
});

router.put('/:id', function(req, res) {
  Swords.update({_id: req.params.id}, req.body, function(err, sword) {
    if (err) {
      throw err;
    }
    res.json(req.body);
  });
});

router.delete('/:id', function(req, res) {
  Swords.remove({_id: req.params.id}, function(err) {
    if (err) {
      res.send(err);
    }
    res.status(200).end();
  });
});

module.exports = router;
