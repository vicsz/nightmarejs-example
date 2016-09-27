var Nightmare = require('nightmare');

describe('test yahoo search', function() {

  it('should return search results', function(done) {

    var nightmare = Nightmare({show: true})

    nightmare
      .goto('http://yahoo.com')
      .type('form[action*="/search"] [name=p]', 'github nightmare')
      .click('form[action*="/search"] [type=submit]')
      .wait('#main')
      .evaluate(function () {
        return document.querySelector('#main .searchCenterMiddle li a').href
      })
      .end()
      .then(function (result) {
        console.log(result)
        done()
      })
  })
})
  