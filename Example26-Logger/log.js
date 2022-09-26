//https://www.section.io/engineering-education/logging-with-winston/

var winston = require('winston');

//Winston log configuration: Atleast one transport to create a log.
const logConfiguration = {
  'transports': [
      new winston.transports.Console(), //This config will let messages print on console.
      new winston.transports.File({filename: 'logs/example.log' }) //This config will create logs directory if not already created and write logs to example.log file.
   ],
};

//Creating a logger by passing the Winston configuration.
const logger = winston.createLogger(logConfiguration);

module.exports = logger;