import { openDb } from './connection.js';

const db = await openDb();

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS subscription (
        id INTEGER PRIMARY KEY, 
        callback_url TEXT
        );`);

    db.run(`CREATE TABLE IF NOT EXISTS event (
        id INTEGER PRIMARY KEY,
        event_type TEXT NOT NULL UNIQUE
    );`);

    db.run(`CREATE TABLE IF NOT EXISTS subscription_event (
        id INTEGER PRIMARY KEY,
        subscription_id INTEGER,
        event_id INTEGER,
        FOREIGN KEY (subscription_id) REFERENCES subscription(id),
        FOREIGN KEY (event_id) REFERENCES event(id)
    );`)
  
    const stmt = db.prepare("INSERT INTO event (event_type) VALUES (?)");
    stmt.run("test event");
    stmt.run("test event 2");
    stmt.finalize();

    db.serialize(() => {
        db.all("SELECT * FROM event", (err, rows) => {
            if (err) {
                console.error(err.message);
                return;
            }
    
            // Process the retrieved rows
            rows.forEach(row => {
                console.log(row);
            });
        });
    });

    db.each("SELECT id, event_type FROM event", (err, row) => {
        
        if (err) {
          console.error(err.message);
        } else {
            console.log(row)
        }
      });
  

  });
  db.close();