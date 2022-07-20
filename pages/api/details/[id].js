export default async function handler(req, res) {

  const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASS}@cluster0.azomj.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  await client.connect();
  const Collection = client.db("wowmart").collection("products");
  const { id } = req.query
  const query = { _id: ObjectId(id) }
console.log(id);
  const datas = []


  const cursor = await Collection.findOne(query);
  const product = [...datas, cursor]
  res.send(cursor)
  client.close()

}