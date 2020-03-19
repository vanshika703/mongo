var mongo = require('mongodb')

var MongoClient = mongo.MongoClient
var url = "mongodb+srv://vanshika703:vanshika@cluster0-ndrdb.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(url, (err,db)=>{
    if(err) throw(err)
    console.log("db connected")

    var dbo = db.db("forms")
    dbo.createCollection("form1", (err,res)=>{
        if (err) throw err
        console.log("Collection created")
        db.close()
        })

})

MongoClient.connect(url, (err,db)=>{
    if(err) throw err
    var dbo = db.db("forms")
    var myobj = 
    {
        name : "Vanshika",
        age : 20
    }
    dbo.collection("form1").insertOne(myobj, (err,res)=>{
        if(err) throw err
        console.log("1 doc inserted")
        db.close()
    })
})