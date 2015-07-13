var frisby = require('frisby');

frisby.create('Ensure we are dealing with a teapot')
  .get('http://httpbin.org/status/418')
    .expectStatus(418)
    .expectHeaderContains('X-More-Info', 'http://tools.ietf.org/html/rfc2324')
.toss()


frisby.create('Ensure test has foo and bar')

  .get('http://httpbin.org/get?foo=bar&bar=baz')
    .expectStatus(200)
    .expectJSON({
      args: {
        foo: 'bar',
        bar: 'baz'
      }
    })
.toss()


frisby.create('Ensure this is *actually* a real teapot, not some imposter coffee pot')
  .get('http://httpbin.org/status/418')
    .expectStatus(418)
    .expectBodyContains('teapot')
.toss()

frisby.create('Very useful for HTML, text, or raw output')
  .get('http://asciime.heroku.com/generate_ascii?s=Frisby.js')
    .inspectBody()
.toss()

frisby.create('Post JSON string as body')
    .post('http://httpbin.org/post', {
        arr: [1, 2, 3, 4],
        foo: "bar",
        bar: "baz",
        answer: 42
    }, {json: true})
    .expectHeaderContains('Content-Type', 'json')
.toss()