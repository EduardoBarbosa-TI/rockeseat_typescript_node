import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from './routes'

class App {
  public express: express.Application

  constructor () {
    this.express = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private async database (): Promise<void> {
    const username = 'edugh'
    const password = '06e08G12'
    try {
      const connectionString = `mongodb+srv://${username}:${password}@edudb.uqsau8h.mongodb.net/?retryWrites=true&w=majority`
      await mongoose.connect(connectionString)
      console.log('Conexão com o banco de dados estabelecida com sucesso.')
    } catch (error) {
      console.error('Erro ao conectar-se ao banco de dados:', error)
    }
  }

  private routes (): void {
    this.express.use(routes)
  }
}
export default new App().express
