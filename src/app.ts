// Модуль сборки приложения

import express, { Express } from "express"

import { Server } from "node:http"
import { LoggerService } from "./logger/logger.service"
import { UsersController } from "./users/users.controller"

export class App {
  app: Express
  server: Server
  port: number
  logger: LoggerService
  userController: UsersController

  constructor(loger: LoggerService, userController: UsersController) {
    this.app = express()
    this.port = 8000
    this.logger = loger
    this.userController = userController
  }

  useRoutes() {
    this.app.use("/users", this.userController.router)
  }
  // метод инициализации приложения
  public async init() {
    this.useRoutes()
    this.server = this.app.listen(this.port)
    this.logger.log(`Сервер запущен на http://localhost:${this.port}`)
  }
}
