import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
  // log that the connection was established successfully.
  console.log('Connected to the server');

  // Send a message to the server when connection is established
  ws.send('Hello Server!');
});

// handler for messages received from the server.
ws.on('message', (message) => {
  console.log(`Received from server: ${message}`);
});

// handler for when the connection is closed.
ws.on('close', () => {
  console.log('Disconnected from the server');
});
