import express, {Request,Response,Application} from 'express';

import userRouter from './routes/users';

import bodyParser from 'body-parser';

import morgan from 'morgan';

import { createConnection } from 'typeorm';


const app:Application = express();

app.use(morgan('tiny'));

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT || 8000;

app.get("/",(req:Request,res:Response):void=>{
  res.send("Hello!")
});

app.use('/users',userRouter)

createConnection().then(connection => {


  const PORT = process.env.PORT || 8000;

  app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
  });

}).catch(error => console.log(error));

export default app;

