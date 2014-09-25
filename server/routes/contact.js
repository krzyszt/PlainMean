
/*
 * GET contacts listing.
 */

var mongoose = require('mongoose');
var ContactModel = mongoose.model('Contacts');

exports.populate = function(req, res) {
   populateFakeData(createFakeContacts(100));
   ContactModel.find({}, function(err, list) {
      res.json(list);
   });
};


function populateFakeData(data) {

   for (i = 0; i < data.length; i++) {

      var contact = new ContactModel(data[i]);

      contact.save(function(err, doc) {

         if (err || !doc) {
            console.log('error with populate');
         }
      });
   }

}
;


function createFakeContacts(count) {
   var data = [];
   var firstNames = ['Ed', 'Tommy', 'Aaron', 'Abe', 'Jamie', 'Adam', 'Dave', 'David', 'Jay', 'Nicolas', 'Nige'],
      lastNames = ['Spencer', 'Maintz', 'Conran', 'Elias', 'Avins', 'Mishcon', 'Kaneda', 'Davis', 'Robinson', 'Ferrero', 'White'];

   for (i = 0; i < (count); i++) {

      var firstName = Math.floor(Math.random() * firstNames.length);
      var lastName = Math.floor(Math.random() * lastNames.length);

      data.push({
         firstName: firstNames[firstName],
         lastName: lastNames[lastName],
         email: firstNames[firstName] + '.' + lastNames[lastName] + '@plain-mean.com'
      });
   }

   return data;
}
;

//JSON API for list of contacts
exports.list = function(req, res) {
   ContactModel.find({}, function(err, list) {
      res.json(list);
   });
};

//JSON API for getting a single contact
exports.item = function(req, res) {
   var id = req.params.id;
   ContactModel.findById(id, function(error, item) {
      if (item) {
         res.json(item);
      } else {
         res.json({error: true});
      }
   });
};

// JSON API for creating a new contact
exports.create = function(req, res) {
   var reqBody = req.body,
      contactObj = {
         firstName: reqBody.firstName,
         lastName: reqBody.lastName,
         email: reqBody.email
      };
   var contact = new ContactModel(contactObj);
   contact.save(function(err, doc) {
      if (err || !doc) {
//          throw 'Error';
         console.log('error');
      } else {
         res.json(doc);
      }
   });
};