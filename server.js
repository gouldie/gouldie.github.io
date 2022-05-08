var https = require('https')
// var http = require('http')
var fs = require('fs')
const { parse } = require('url')

const next = require('next')
const port = parseInt(process.env.PORT, 10) || 8443
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: __dirname })
const handle = app.getRequestHandler()

var options = {
  key: fs.readFileSync('ssl.key'),
  cert: fs.readFileSync('ssl.crt')
  // ca: [fs.readFileSync('root.crt')]
}

app.prepare().then(() => {
  https
    .createServer(options, async (req, res) => {
      // handle ....
      try {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)

        await handle(req, res, parsedUrl)
      } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('internal server error')
      }
    })
    .listen(port, err => {
      if (err) throw err
      console.log(`> Ready on localhost:${port}`)
    })
})
