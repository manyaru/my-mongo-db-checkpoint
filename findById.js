const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb+srv://alvinmureithi1:hN80ROQ7V9zXfg51@cluster0.hmayedv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const dbName = 'contact';

(async function() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection('contactlist');

    const id = '66a6a796c1c1695ed577af8a';  // Replace with actual ID
    const document = await collection.findOne({ _id: ObjectId(id) });
    console.log(document);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
})();
