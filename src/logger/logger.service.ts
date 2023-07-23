import { Logger, ILogObj } from "tslog"

export class LoggerService {
  public logger: Logger<ILogObj>

  constructor() {
    this.logger = new Logger({
      hideLogPositionForProduction: true,
    })
  }

  log(...args: unknown[]) {
    this.logger.info(...args)
  }

  error(...args: unknown[]) {
    this.logger.error(...args)
  }
  // журнал предупреждений с объектом json
  warn(...args: unknown[]) {
    this.logger.warn(...args)
  }
}
