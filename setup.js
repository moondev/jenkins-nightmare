var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true, waitTimeout: 300000 });

var token = process.argv[2];

nightmare
  .goto('http://localhost:4444')
  .wait("#security-token")
  .type("#security-token",token)
  .click(".btn-primary")
  .wait(5000)
  .click(".install-recommended")
  .wait("#username")
  .type("#username", 'jenkins')
  .type("input[name='password1']", 'jenkins')
  .type("input[name='password2']", 'jenkins')
  .type("input[name='fullname']", 'jenkins')
  .type("input[name='email']", 'jenkins')
  .click(".btn-primary")

  .wait("#sdfsdfsdf")
  
  
  .evaluate(function () {
    return document.querySelector('#zero_click_wrapper .c-info__title a').href;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });

// nightmare
//     .goto('http://localhost:4444')
//     .wait("#security-token")
//     .type("#security-token",token)
//     .click(".btn-primary")
//     .wait("#sdfwdfd")
//     .end();