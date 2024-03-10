import db from '../database/connection.js';

function createSubscription(subscription) {
    const stmt = db.prepare("INSERT INTO subscription (callback_url) VALUES (?)");
    stmt.run(subscription.callback_url);
    
    const existingEventTypes = db.all("SELECT * FROM event");

    subscription.events.foreach(eventTypeToSubscribeTo => {
        const foundEvent = existingEventTypes.find((existingEventType) => eventTypeToSubscribeTo === existingEventType)
        if (foundEvent) {
            const stmt = db.prepare("INSERT INTO subscription_event (subscription_id, event_id) VALUES (?, ?)");
            stmt.run(foundEvent.id, );
        }   
    })
    stmt.finalize();
}

export {
    createSubscription
}