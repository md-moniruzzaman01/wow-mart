export default async function handler(req, res) {

    const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@cluster0.azomj.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  
    await client.connect();
    const Collection = client.db("wowmart").collection("products");
    
    const query = {}
  
    const cursor = await Collection.find(query).toArray()
    res.send(cursor)
    client.close()
  
  }