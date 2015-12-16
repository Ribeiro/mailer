(function(){
  'use strict';

  var Mailer = function(config){

    var CONSTANTS = Object.freeze({
        'property': 'Property ',
        'isMissing': ' is missing!',
        'mandatoryProperties': ['service', 'password', 'user'],
        'separator': ';',
        'provideConfigurationError': 'Please, provide configuration!',
        'zero': 0
    });

    var assertValidInstanceOf = function(config){
      if(!config || Object.getOwnPropertyNames(config).length === CONSTANTS.zero){
        throw new Error(CONSTANTS.provideConfigurationError);
      }
    };

    var assertValid = function(config){
        assertValidInstanceOf(config);
        var errors = [];
        var mandatoryPropertiesSize = CONSTANTS.mandatoryProperties.length;
        var counter = CONSTANTS.zero;

        while(counter < mandatoryPropertiesSize){
          if (!config.hasOwnProperty(CONSTANTS.mandatoryProperties[counter])) {
             errors.push(CONSTANTS.property + CONSTANTS.mandatoryProperties[counter] + CONSTANTS.isMissing);
          }
          counter++;
        }

        if(errors.length > CONSTANTS.zero){
          throw new Error(errors.join(CONSTANTS.separator));
        }

    };

    assertValid(config);
    var service = config.service;

    return {
        getServiceName: function ()  {
          return service;
        }
    };

  };

  exports.Mailer = Mailer;

})();
