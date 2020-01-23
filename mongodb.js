// CRUD Create Read Update Delete 

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if(error){
        console.log('Unable to connect to database, error has occured!')
    }

    const db = client.db(databaseName)

    db.collection('users').deleteOne({
        _id: new ObjectID('5de2b85ffd719706f4f35437')
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})