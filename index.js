import http from "http"

const host = "127.0.0.1"
const port = 8000

const server = http.createServer((request, response) => {
  switch (request.method) {
    case "GET":
      switch (request.url) {
        case "/hello":
          response.statusCode = 200
          response.setHeader("Content-Type", "text/plain")
          response.end("Привет!")
          break
      }

      break
  }
})

server.listen(port, host, () => {
  console.log(`Сервер запущен на ${host}:${port}`)
})
