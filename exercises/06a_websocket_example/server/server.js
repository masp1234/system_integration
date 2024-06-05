import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 8080 });

server.on('connection', (ws) => {
  console.log('New client connected');

  // Send a welcome message to the client that just connected
  ws.send('Welcome to the WebSocket server!');

  // Handle incoming messages from the client
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);

    // Broadcast the received message to all connected clients.
    broadcast(message);
  });

  // Handle connection close
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

function broadcast(message) {
  server.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(`Broadcast: ${message}`);
    }
  });
}

console.log('WebSocket server is running on ws://localhost:8080');
