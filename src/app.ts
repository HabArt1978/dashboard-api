// Модуль сборки приложения

import express, { Express } from "express"

import { Server } from "node:http"
import { UsersController } from "./users/users.controller"
import { ExeptionFilter } from "./errors/exeption.filter"
import { ILogger } from "./logger/logger.interface"

export class App {
  app: Express
  server: Server
  port: number
  logger: ILogger
  userController: UsersController
  exeptionFilter: ExeptionFilter

  constructor(
    loger: ILogger,
    userController: UsersController,
    exeptionFilter: ExeptionFilter,
  ) {
    this.app = express()
    this.port = 8000
    this.logger = loger
    this.userController = userController
    this.exeptionFilter = exeptionFilter
  }

  useRoutes() {
    this.app.use("/users", this.userController.router)
  }
  //  метод отлавливает ошибки с определённым statusCode и отдаёт statusCode ошибки потребителю.
  useExeptionFilters() {
    this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))
  }

  // метод инициализации приложения
  public async init() {
    this.useRoutes()
    this.useExeptionFilters()
    this.server = this.app.listen(this.port)
    this.logger.log(`Сервер запущен на http://localhost:${this.port}`)
  }
}
