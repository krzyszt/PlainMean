
/*
 * GET users listing.
 */
var mongoose = require('mongoose');
var UserModel = mongoose.model('Users');

exports.populate = function(req,res){
   populateFakeData(createFakeUsers(10)); 
   UserModel.find({},function(err,list){
      res.json(list);
  })
};


function populateFakeData(data){

  for( i=0; i < data.length ; i++) {

    var user = new UserModel(data[i]);
    
    user.save(function(err,doc){

        if(err || !doc){
            console.log('error');
        } 
    });
  }

};


function createFakeUsers(count) {
	var data = [];
	var firstNames   = ['Ed', 'Tommy', 'Aaron', 'Abe', 'Jamie', 'Adam', 'Dave', 'David', 'Jay', 'Nicolas', 'Nige'],
        lastNames    = ['Spencer', 'Maintz', 'Conran', 'Elias', 'Avins', 'Mishcon', 'Kaneda', 'Davis', 'Robinson', 'Ferrero', 'White'];

   	 for(i=0; i< (count); i++){

   	 	var firstName = Math.floor(Math.random()*firstNames.length);
   	 	var lastName = Math.floor(Math.random()*lastNames.length);

   	 	data.push({
   	 		firstName: firstNames[firstName],
   	 		lastName: lastNames[lastName],
   	 		email: firstNames[firstName] + '.' + lastNames[lastName] + '@plain-mean.com'
   	 	});
   	 }

   	 return data;
};																																																			

//JSON API for list of users
exports.list = function(req, res){
  UserModel.find({},function(err,list){
      res.json(list);
  });
};

//JSON API for getting a single user
 exports.item = function(req,res){
     var id = req.params.id;
     UserModel.findById(id, function(error, item){
        if(item){
            res.json(item);
        } else {
            res.json({error: true});
        } 
     });
 };

// JSON API for creating a new user
exports.create = function(req,res){
   var reqBody = req.body,
       userObj = {
          firstName: reqBody.firstName, 
          lastName: reqBody.lastName,
          email: reqBody.email
       };
   var user = new UserModel(userObj);
   user.save(function(err,doc){
      if(err || !doc){
            console.log('error');
      } else {
          res.json(doc);
      }
    });
};