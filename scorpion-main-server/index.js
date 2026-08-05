const express = require('express');
const app = express();
const port = 3000;

// Username: antorazmir7_db_user
// Password: mHEyc88DXM5k21ev

// MongoDB Database
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://antorazmir7_db_user:mHEyc88DXM5k21ev@scorpion.zlxghwo.mongodb.net/?appName=Scorpion";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function server() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
server().catch(console.dir);



// app.get("/products", (req, res) =>{
//     res.send(products);
// })



app.get('/', (req, res) => {
  res.send("Welcome to Scorpion. This is our main server");
});

app.listen(port, () => {
  console.log(`Server is running on ${port} PORT`);
});