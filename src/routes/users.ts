import express, {Request,Response} from 'express';

const userRouter = express.Router();

import * as UserCommands from "../commands/application/users";

import * as QueryCommands from "../queries/users/GetUserCommand";

import { Users } from "../entity/users";

const userCommandFactory = new UserCommands.UserCommandFactory();

const userUpdateCommandFactory = new UserCommands.UserPutCommandFactory();

const userDeleteCommandFactory = new UserCommands.UserDeleteCommandFactory();

//const userQueryCommandFactory = new QueryCommands.GETCommand();





userRouter.get('/',(req:Request,res:Response)=>{
    res.send('hello from users')
});

userRouter.post('/create',(req:Request,res:Response)=>{

    
   console.log(req.body) 
    const user:Users = req.body
    const commandName = 'POSTCommand'

    const commandConfig = {
        commandName,
        args: user
    }

    const command = userCommandFactory.makeCommand(commandConfig)
    const results = command.execute()
    const statusCode = results.status ? 200 : 500

    res.status(statusCode).json('User added successfully')
})


userRouter.put('/update/:id',(req:Request,res:Response)=>{

    
    
     const user:Users = {...req.body,...req.params}

     const commandName = 'PUTCommand'
 
     const commandConfig = {
         commandName,
         args: user
     }
 
     const command = userUpdateCommandFactory.makeCommand(commandConfig)
     const results = command.execute()
     const statusCode = results.status ? 200 : 500
 
     res.status(statusCode).json('User updated successfully')
 })

 userRouter.delete('/delete/:id',(req:Request,res:Response)=>{

    
    
    const user:string = req.params.id

    const commandName = 'DELETECommand'

    const commandConfig = {
        commandName,
        args: user
    }

    const command = userDeleteCommandFactory.makeCommand(commandConfig)
    const results = command.execute()
    const statusCode = results.status ? 200 : 500

    res.status(statusCode).json('User deleted successfully')
})


userRouter.get('/getUsers/:id',async (req:Request,res:Response)=>{

    const results = await QueryCommands.GETCommand(req.params.id)

    if(!results) {
        res.status(500).json('User detail not found') 
    }

    res.status(200).json(results)
})

export default userRouter