(function(){
  'use strict';

  var Mailer = function(config){
    var assertNotMissing = function(attributes){
        if(!attributes || Object.getOwnPropertyNames(attributes).length === 0){
          throw new Error('Please, provide configuration');
        }

        //Should add validator component here
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
