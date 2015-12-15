var assert = require("assert");
var Mailer = require("../assets/scripts/main.js").Mailer;
var expect = require("chai").expect;


describe("Mailer", function(){

  describe("Constructor Success", function(){
    it("Should successfully instantiate Mailer", function(){
        var config = {service: 'hotmail', user: 'email@email.com', password:'password'};
        var mailer = new Mailer(config);
        assert.equal('hotmail', mailer.getServiceName());
    });

  });

  describe("Constructor Failure", function(){
    it("Should fail instantiating Mailer due to null config", function(){
        var config = null;
        expect(function() { new Mailer(config); }).to.throw(Error).and.have.property('message','Please, provide configuration!');

    });

    it("Should fail instantiating Mailer due to undefined config", function(){
        var config;
        expect(function() { new Mailer(config); }).to.throw(Error).and.have.property('message','Please, provide configuration!');
    });

    it("Should fail instantiating Mailer due to empty config", function(){
        var config = {};
        expect(function() { new Mailer(config); }).to.throw(Error).and.have.property('message','Please, provide configuration!');
    });

    it("Should fail instantiating Mailer due to missing mandatory properties", function(){
        var config = {service: 'hotmail'};
        expect(function() { new Mailer(config); }).to.throw(Error).and.have.property('message','Property password is missing!;Property user is missing!');
    });

  });

});
