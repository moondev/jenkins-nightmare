var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: true, waitTimeout: 300000 });

var token = process.argv[2];

var jenkinsurl = process.argv[3];

nightmare
  .goto('http://localhost:4444')
  .wait("#security-token")
  .type("#security-token",token)
  .click(".btn-primary")
  .wait(5000)
  .click(".install-recommended")
//   .wait("input[name='username']")
//   .type("input[name='username']", 'jenkins')
//   .type("input[name='password1']", 'jenkins')
//   .type("input[name='password2']", 'jenkins')
//   .type("input[name='fullname']", 'jenkins')
//   .type("input[name='email']", 'jenkins')
//   .click(".btn-primary")
//   .wait("5000")
  .wait("button.skip-first-user")
  .click("button.skip-first-user")
  .wait(2000)
  .click(".btn-primary")
  .wait("a.task-link[href='/manage']")
  .click("a.task-link[href='/manage']")
  .wait("a[href='pluginManager']")
  .click("a[href='pluginManager']")
  .wait("a[href='./available']")
  .click("a[href='./available']")
  .wait("input[name='plugin.blueocean.default']")
  .click("input[name='plugin.blueocean.default']")
  .click("#yui-gen1 button")
  .wait(10000)
  .then(function () {
    console.log('finished');
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