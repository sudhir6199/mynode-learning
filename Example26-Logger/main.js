//https://www.section.io/engineering-education/logging-with-winston/

var logger = require('./log');


logger.log({
    // Message to be logged
        message: 'Hello, Winston!',
    
    // Level of the message logging
        level: 'info'
    });

//(OR)
logger.info("INFO: test")
logger.error("ERROR: test")
logger.warn("WARN: test")
logger.debug("DEBUG: test")
//logger.log("LOGGER: test")
