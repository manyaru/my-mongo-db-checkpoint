const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://alvinmureithi1:hN80ROQ7V9zXfg51@cluster0.hmayedv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const dbName = 'contact';

(async function() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection('contactlist');

    const result = await collection.updateOne(
      { lastName: "Kefi", firstName: "Seif" },
      { $set: { firstName: "Anis" } }
    );
    console.log(`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`);
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }
})();
