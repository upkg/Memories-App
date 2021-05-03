import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import postRoutes from './routes/posts.js'

// initialize app  
const app = express();
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(cors());


// port 
const PORT = process.env.PORT || 5000;



// db connections 
const CONNECTION_URL = 'mongodb+srv://memory-user:HlwQQqYsi0wg2tnU@cluster0.6bar6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// mongoose.connect(CONNECTION_URL, { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// })
//     .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
//     .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
   .catch((error) => console.log(error.message));

const db = mongoose.connection;



// /routes  
app.use('/posts', postRoutes)

// listener 
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
