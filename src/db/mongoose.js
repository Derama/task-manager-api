const mongoose = require('mongoose')    

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.set('useFindAndModify', false);
