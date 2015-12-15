(function(){
  'use strict';

  var Mailer = function(config){
    var assertNotMissing = function(attributes){
      var mandatoryProperties = ['service', 'password', 'user'];
        var errors = [];
        if(!attributes || Object.getOwnPropertyNames(attributes).length === 0){
          throw new Error('Please, provide configuration!');
        }

debugger
        var mandatoryPropertiesSize = mandatoryProperties.length;
        var counter = 0;

        while(counter < mandatoryPropertiesSize){
          if (!attributes.hasOwnProperty(mandatoryProperties[counter])) {
             errors.push('Property ' + mandatoryProperties[counter] +' is missing!');
          }

          counter++;
        }

        if(errors.length > 0){
          throw new Error(errors.join(';'));
        }

    };

    assertNotMissing(config);
    var service = config.service;

    return {
        getServiceName: function ()  {
          return service;
        }
    };

  };

  Mailer.prototype.getServiceName = function(){
    return this.service;
  };

  exports.Mailer = Mailer;

})();
