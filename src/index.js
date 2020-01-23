const express = require('express')
require('./db/mongoose')
const app = express()
const port = process.env.PORT 
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')



// app.use((req, res, next) => { 
//     res.status(503).send('Service is under maintanance, we will be back soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => { 
//     // const task = await Task.findById('5e05ba857341550648df0440')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5e0601be77ab9b097ad68763')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()


// const jwt = require('jsonwebtoken')

// const myFunction = async () => { 
//     const token = jwt.sign({ _id: 'abc123'}, 'thisismynewcourse')
//     console.log(token)
//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()