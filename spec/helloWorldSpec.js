var request = require("request");
var base_url = "http://localhost:9090/"
var server = require("../app.js");

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello BD Programmers GBG!", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Hello BD Programmers GBG!");
        done();
        server.close();
      });
    });
  });
});