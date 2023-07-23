// Модуль сборки приложения

import express, { Express } from "express"
import userRouter from "./users/users"
import { Server } from "node:http"
import { LoggerService } from "./logger/logger.service"

export class App {
  app: Express
  server: Server
  port: number
  logger: LoggerService

  constructor(loger: LoggerService) {
    this.app = express()
    this.port = 8000
    this.logger = loger
  }

  useRoutes() {
    this.app.use("/users", userRouter)
  }
  // метод инициализации приложения
  public async init() {
    this.useRoutes()
    this.server = this.app.listen(this.port)
    this.logger.log(`Сервер запущен на http://localhost:${this.port}`)
  }
}
