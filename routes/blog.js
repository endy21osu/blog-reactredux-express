var express = require('express');
var router = express.Router();

/* 
 * GET blogposts. 
 */
router.get('/posts', function(req, res, next) {
	var db = req.db;
	var collection = db.get('blog');
	collection.find({},{},function(e,docs) {
		res.json(docs);
	});
});

/*
 * POST to addblogpost
 */
router.post('/addpost', function(req, res, next) {
	var db = req.db;
	var collection = db.get('blog');
	console.log(req.body);
	collection.insert(req.body, function(err, result) {
		res.send(
			(err === null) ? {msg: ''} : {msg: err}
		);
	});
});

/*
 * DELETE to deletepost	
 */
 router.delete('/deletepost/:id', function(req,res,next) {
 	var db = req.db;
 	var collection = db.get('blog');
 	var postToDelete = req.params.id;
 	collection.remove({'_id' : postToDelete}, function(err) {
 		res.send((err === null) ? {msg:''} : {msg:'error: ' + err});
 	});
 });

module.exports = router;
