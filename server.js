const http = require('http')
const fs = require('fs')

const image = fs.readFileSync(__dirname + '/pics/redbrick.png')

http.createServer(function (req, res) {
  if (req.url === '/redbrick.png') {
    res.setHeader('Content-type', 'image/png')
    res.end(image)
  } else {
    res.setHeader('Content-type', 'text/html')
    const main = fs.readFileSync(__dirname + '/index.html')
    res.end(main)
  }
}).listen(5000, function () {
  console.log('Listening on port 5000...')
})
