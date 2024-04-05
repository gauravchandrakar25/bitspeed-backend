//Importing project dependancies that we installed earlier
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors' 
import helmet from 'helmet'
const {db_connection} = require('./dbConnection/dbconnection')

//App Varaibles 
dotenv.config()

//intializing the express app 
const app = express(); 

//connecting db
db_connection()

//using the dependancies
app.use(helmet()); 
app.use(cors()); 
app.use(express.json())

const PORT = process.env.PORT || 3000

//Listing to the app and running it on PORT 5000
app.listen(PORT, async () => {
   console.log(`listning on port ${PORT}`)
})