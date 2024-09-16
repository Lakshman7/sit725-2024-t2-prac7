// Connect to the server using Socket.io
const socket = io();

// Listen for 'stat' event from the server and log the result
socket.on('stat', (msg) => {
  console.log('Random sports stat from server: ' + msg);
});
