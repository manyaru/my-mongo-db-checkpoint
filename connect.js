const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://alvinmureithi1:hN80ROQ7V9zXfg51@cluster0.hmayedv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const dbName = 'contact';

(async function() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.createCollection("contactlist");

    console.log("Collection created!");
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }
})();
