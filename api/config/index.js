const path = require('path')

module.exports = {
  port: process.env.PORT || 8080,
  db: {
    database: process.env.SQL_DATABASE || 'guardrail',
    user: process.env.SQL_USER || 'guardrail',
    password: process.env.SQL_PASSWORD || 'password',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.SQL_HOST || 'mysql1',
      storage: path.resolve(__dirname, '../../guardrail.sql'),
      operatorsAliases: false,
      logging: false
    }
  },

  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  },
  development:{
    database: process.env.SQL_DATABASE || 'guardrail',
    username: process.env.SQL_USER || 'guardrail',
    password: process.env.SQL_PASSWORD || 'password',
    dialect: process.env.DIALECT || 'mysql',
    host: process.env.SQL_HOST || 'mysql1',
  },
  production:{
    database: process.env.SQL_DATABASE || 'guardrail',
    username: process.env.SQL_USER || 'guardrail',
    password: process.env.SQL_PASSWORD || 'password',
    dialect: process.env.DIALECT || 'mysql',
    host: process.env.SQL_HOST || 'mysql1',
  },
}
