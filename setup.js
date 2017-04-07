var Nightmare = require('nightmare');		
var nightmare = Nightmare({ show: false, waitTimeout: 300000 });

var token = process.argv[2];

var jenkinsurl = process.argv[3];

nightmare
  .goto(jenkinsurl)
  .wait("#security-token")
  .type("#security-token",token)
  .click(".btn-primary")
  .wait(5000)
  .click(".install-recommended")
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
  .end(() => "some value")
  .then((value) => console.log(value));