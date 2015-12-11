var assert = require("assert");
var Mailer = require("../assets/scripts/main.js").Mailer;
var expect = require("chai").expect;


describe("Mailer", function(){

  describe("constructor success", function(){
    it("Should successfully instantiate Mailer", function(){
        var config = {service: 'hotmail'};
        var mailer = new Mailer(config);
        //var mailer = new Mailer(config);

        /*expect(function() {
                new Mailer(config);
            }).to.throw(Error);
            */

            assert.equal('hotmail', mailer.getServiceName());

      //assert.throws( mailer, Error );
      //assert.throws(mailer, Error, /Please, provide configuration/);
      //assert.throws(new Mailer(config), /Email is required/);
      //assert.fail(mailer, Error, undefined, '###');

    });

  });

  describe("constructor failure", function(){
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
