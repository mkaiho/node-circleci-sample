import http from 'http';

import app from './app';

 // Store port number in application.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// Normalize a port into a number, string, or false.
function normalizePort(val: string, defaultPort: number = 3000): number {
  const port: number = parseInt(val, 10);
  if (isNaN(port) && port <= 0) {
    return defaultPort;
  }

  return port;
}

// Event listener for HTTP server "error" event.
function onError(error: NodeJS.ErrnoException) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening" event.
function onListening() {
  const addr = server.address();
  let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr!.port}`;

  console.log(`Listing on ${bind}`);
}
