(function(){
  'use strict';

  var Mailer = function(config){
    var assertNotMissing = function(attributes){
        if(!attributes || Object.getOwnPropertyNames(attributes).length === 0){
          throw new Error('Please, provide configuration');
        }
        /*if (!attributes || (typeof(attributes.xAxis) === 'undefined' ) ||
            ( typeof(attributes.yAxis) === 'undefined') ) {
            throw 'Missing Required Coordinate(s)!';
        }*/
    };

    assertNotMissing(config);
    var service = config.service;

    return {
        getServiceName: function ()  {
          return service;
        }
    };

    /*var nodemailer = require('nodemailer');
    console.log(nodemailer);
    this.sender = config.sender;
    this.transporter = nodemailer.createTransport({
      service: config.service,
      auth: {
        user: config.user,
        pass: config.password
      }
    });*/



  };

  Mailer.prototype.getServiceName = function(){
    return this.service;
  };

  /*Mailer.prototype.send = function(email){
    this.transporter.sendMail({
          to: email.body,
          from: this.sender,
          subject: email.subject,
          text: email.text
      }, function(error) {
           if(error){
             return {message: 'Unable to send matching email : ' + error};

           }
           return {message: 'Matching email has been sent!'};

       });

  };*/

  exports.Mailer = Mailer;

})();
