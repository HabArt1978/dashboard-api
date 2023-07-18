import express from "express"

const port = 8000
const app = express()

app.get("/hello", (request, response) => {
  response.send("Привет Express!")
})

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`)
})
