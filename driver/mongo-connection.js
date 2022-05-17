import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.set('runValidators', true);

const dbConnection = async() =>{
  return await mongoose.connect(process.env.DBCONNECTIONSTRING).then(() => {
    console.log('Connected to Mongo DB');
  })
  .catch((e) => {
    console.error('Got an error trying to connect with Mongo DB: ', e);
  });
}
export default dbConnection;