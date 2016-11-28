'use strict';

var spawnSync = require('child_process').spawnSync;

module.exports = function shellCommand(command, options) {
    var childProcess = spawnSync('sh', ['-c', command], options);
    return childProcess;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3NoZWxsQ29tbWFuZC5qcyJdLCJuYW1lcyI6WyJzcGF3blN5bmMiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInNoZWxsQ29tbWFuZCIsImNvbW1hbmQiLCJvcHRpb25zIiwiY2hpbGRQcm9jZXNzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFlBQVlDLFFBQVEsZUFBUixFQUF5QkQsU0FBekM7O0FBRUFFLE9BQU9DLE9BQVAsR0FBaUIsU0FBU0MsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0JDLE9BQS9CLEVBQXdDO0FBQ3JELFFBQUlDLGVBQWVQLFVBQVUsSUFBVixFQUFnQixDQUFDLElBQUQsRUFBT0ssT0FBUCxDQUFoQixFQUFpQ0MsT0FBakMsQ0FBbkI7QUFDQSxXQUFPQyxZQUFQO0FBQ0gsQ0FIRCIsImZpbGUiOiJzaGVsbENvbW1hbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3Bhd25TeW5jID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLnNwYXduU3luYztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGVsbENvbW1hbmQoY29tbWFuZCwgb3B0aW9ucykge1xuICAgIHZhciBjaGlsZFByb2Nlc3MgPSBzcGF3blN5bmMoJ3NoJywgWyctYycsIGNvbW1hbmRdLCBvcHRpb25zKTsgICBcbiAgICByZXR1cm4gY2hpbGRQcm9jZXNzO1xufSAiXX0=