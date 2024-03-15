
import mongoose from 'mongoose';


export const Connection = async(username, password) =>{
    const URL =`mongodb+srv://${username}:${password}@cluster0.od2cgsl.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0`;
    try{
      await  mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
      console.log('DataBase Connected Succesfully');
    }
    catch(error){
      console.log('Error while connection with database',error.message);
    }
}
 export default Connection;