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
    let statusCode:any

    try {
        console.log(req.body) 
        const user:Users = req.body
        const commandName = 'POSTCommand'
    
        const commandConfig = {
            commandName,
            args: user
        }
    
        const command = userCommandFactory.makeCommand(commandConfig)
        const results = command.execute()
        statusCode = results.status ? 200 : 500
    
        res.status(statusCode).json({message: 'User added successfully', data: {}});
    }
    catch (e:any) {
        res.status(statusCode).json({error: e.message, data:{}});
    }

    

})


userRouter.put('/update/:id',(req:Request,res:Response)=>{
    let statusCode:any

    try {

        const user:Users = {...req.body,...req.params}

        const commandName = 'PUTCommand'
    
        const commandConfig = {
            commandName,
            args: user
        }
    
        const command = userUpdateCommandFactory.makeCommand(commandConfig)
        const results = command.execute()
        statusCode = results.status ? 200 : 500
    
        res.status(statusCode).json({message: 'User updated successfully', data: {}});
    }
    catch (e:any) {
        res.status(statusCode).json({error: e.message, data:{}});
    }
    

 })

 userRouter.delete('/delete/:id',(req:Request,res:Response)=>{

    let statusCode:any

    try {

        const user:string = req.params.id

        const commandName = 'DELETECommand'
    
        const commandConfig = {
            commandName,
            args: user
        }
    
        const command = userDeleteCommandFactory.makeCommand(commandConfig)
        const results = command.execute()
        statusCode = results.status ? 200 : 500
    
        res.status(statusCode).json({message: 'User deleted successfully', data: {}});
    }
    catch (e:any) {
        res.status(statusCode).json({error: e.message, data:{}});
    }

    
    

})


userRouter.get('/getUsers/:id',async (req:Request,res:Response)=>{

    try {
        const results = await QueryCommands.GETCommand(req.params.id)
        res.status(200).json({message: 'Success', data: results});
    }
    catch (e:any) {
        res.status(500).json({error: e.message, data:{}});
    }
})

export default userRouter