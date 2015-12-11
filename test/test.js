var assert = require("assert");
var Mailer = require("../assets/scripts/main.js").Mailer;
var expect = require("chai").expect;


describe("Mailer", function(){

  describe("Constructor Success", function(){
    it("Should successfully instantiate Mailer", function(){
        var config = {service: 'hotmail'};
        var mailer = new Mailer(config);
        assert.equal('hotmail', mailer.getServiceName());
    });


  });

  describe("Constructor Failure", function(){
    it("Should fail instantiating Mailer due to null config", function(){
        var config = null;
        expect(function() { new Mailer(config); }).to.throw(Error);
    });

    it("Should fail instantiating Mailer due to undefined config", function(){
        var config;
        expect(function() { new Mailer(config); }).to.throw(Error);
    });

    it("Should fail instantiating Mailer due to empty config", function(){
        var config = {};
        expect(function() { new Mailer(config); }).to.throw(Error);
    });


  });

  /*describe("#listArticles", function(){
    it("should list articles", function(){
      var author = new Author("Jim");
      author.writeArticle("a great article");
      assert.equal("Jim has written: a great article", author.listArticles());
    });
  });*/

});
