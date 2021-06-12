import {JL} from 'jsnlog';

var logger = JL("onerrorLogger");

function init (){


  let appender = JL.createAjaxAppender("ajax");
  appender.setOptions({
    "url": 'https://60c4b521ec8ef800175e05c1.mockapi.io/api/v1/mohammad/',
    "bufferSize": 20,
    "storeInBufferLevel": JL.getDebugLevel(),
    "level": JL.getFatalLevel(),
    "sendWithBufferLevel": JL.getFatalLevel()
  });
  logger.setOptions({ "appenders": [appender] });


 

  if (window && !window.onerror) {
    window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
      logger.fatalException({
        "msg": "Uncaught Exception",
        "errorMsg": errorMsg, 
        "url": url,
        "line number": lineNumber,
        "column": column
      }, errorObj);

      return false;
    }
  }
  if (typeof window !== 'undefined' && !window.onunhandledrejection) {
    window.onunhandledrejection = function (event) {
      logger.fatalException({
        "msg": "unhandledrejection",
        "errorMsg": event.reason ? event.reason.message : null
      }, event.reason);

      return false;
    };
  }

 


  (function () {
   
    var _log = console.log;
    var _error = console.error;
    var _warning = console.warning;

    console.error = function (errMessage) {
      logger.fatalException(errMessage);
      _error.apply(console, arguments);
    };

    console.log = function (logMessage) {
      // Do something with the log message
   
      alert(logMessage)
      _log.apply(console, arguments);
    };

    console.warning = function (warnMessage) {
      // do something with the warn message
      _warning.apply(console, arguments);
    };
 
  })();

}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  init
}
