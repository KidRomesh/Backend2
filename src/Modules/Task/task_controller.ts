import { CourierClient } from "@trycourier/courier";
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";
import { Student } from "../../entity/Student";
import { Task } from "../../entity/Task";

const createTask = async (req: Request, res: Response, next: NextFunction)=>{


    var from = req.body.from;
    var assignto  = req.body.assignto;
    var task = req.body.task;
    var status = req.body.status;
    var comments = req.body.comments;
    var due = req.body.date;

    if(from ==null||from ==""||from == undefined||
    assignto == null || assignto == ""||assignto== undefined||
    task == null || task == ""||task== undefined||
    status == null || status == ""||status == undefined){
        res.status(400).send({
            messsage: 'invalid data passed',
           
        })
        
    }else{
        var tsk = req.body.task 
        var due = req.body.due
        const taskRepo = AppDataSource.getMongoRepository(Task);
        const task = await taskRepo.findOne({where:{task: tsk}});
        if (task == null){
            const taskCreate = await taskRepo.insert({
                from : from,
                assignto : assignto,
                status: status,
                task : tsk,
                comments : req.body.comments,
                due : due
               })
            res.status(200).send({
                message:'success',
                task: taskCreate
        
            })

            const studentRepo = AppDataSource.getMongoRepository(Student);
            const student = await studentRepo.findOne({where:{firstName: assignto}});

            var mail = student.email;



            sendTask(tsk, mail, from, due)
        }else{
            res.send({
                message: 'task failed'
            })

        }
    }

};

async function sendTask( tsk , mail, sender, due){

    const courier = CourierClient({ authorizationToken: "pk_prod_CSYZXXYJ3CMS40QDY1R05X0743QQ" });

    await courier.send({
        message: {
            to: {
                data: {
                    task: tsk,
                    sender :sender,
                    date : due

                },
                email: mail,

            },
            content: {
                title: "Task Assigned",
                body: "You have been assigned to do the following task.{{task}} by {{sender}} Kindly update the status and complete the task in {{date}}",
            },
            routing: {
                method: "single",
                channels: ["email"],
            },
        },
    });

};

const getTask =async (req:Request, res : Response, next : NextFunction) => {

    const tskRepo = AppDataSource.getMongoRepository(Task)
    const task = await tskRepo.find()

    if (task == null){
        res.send({
            message: 'no task at this moment'
        })
    }else{
        res.status(200).send({
            message :'task fetched',
            data : task
        })
    }
    
}

const getTaskper = async(req: Request, res: Response, next : NextFunction)=>{
    var name = req.params.assignto;
    const tskRepo = AppDataSource.getMongoRepository(Task);
    const tasks =  await tskRepo.findOne({where:{assignto: name}});

    if (tasks == null){
        res.send({
            message: 'no tasks available at this time'
        })

    }else{
        res.send({
            status:200,
            message: 'tasks fetched',
            data : tasks
        })
    }
}

const getcount = async(req:Request, res: Response, next: NextFunction)=>{
    var name = req.params.name;

    var status = 'In Progress'
    const tskRepo = AppDataSource.getMongoRepository(Task);
  
    const pending  = await tskRepo.findAndCount({where:{status: status, assignto: name}});



    if (pending != null){
        res.send({
            pending : pending

        })
    }else{
        res.send({
            pending : 0,
        })
    }
}


export default { createTask, getTask, getTaskper, getcount  }
