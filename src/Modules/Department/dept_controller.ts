import { Request, Response, NextFunction } from "express";
import { Department } from "../../entity/Dept";
import { AppDataSource } from "../../data-source";



const getDepts = async ( req: Request, res: Response, next:NextFunction)=>{

    
    const deptRepository = AppDataSource.getMongoRepository(Department);
    const dept : any = await deptRepository.find();

    if(dept==null){
        res.status(400).send({
            status:404,
            message:"Either repository is empty or not found"
        })
    }

   else{
    res.status(200).send({
        message:"Loaded Depts",
        data:dept
    })
   }
}

const getDeptid = async ( req: Request, res: Response, next:NextFunction)=>{
    const deptRepository = AppDataSource.getMongoRepository(Department);
    var id:any=req.params.id;
    const dept : any = await deptRepository.findOne(id);
    if(dept==null){
        res.status(404).send({
            status:404,
            message:"dept not find"
        })
    }
    else{
        res.status(200).send({
            id:dept.id,
            deptName: dept.deptName,
            isActive : dept.isActive
        })
    }

    
}



const createDept = async (req: Request, res: Response, next: NextFunction)  => {
    if (
        req.body.deptName == null || req.body.deptName == "" || req.body.deptName == undefined ||
        req.body.isActive == null || req.body.isActive == undefined
    ) {
        res.status(400).send({
            status: "400",
            message: "Data Entered is wrong",
            data: req.body
        });
    }

    else {
        const deptRepository = AppDataSource.getMongoRepository(Department);
        var deptName: string = req.body.deptName;
        const deptname: any = await deptRepository.findOne({ where: { deptName: deptName } });
        if (deptname == null) {
            const dept = await deptRepository.insert({
                deptName: req.body.deptName,isActive: req.body.isActive
            })

            res.status(200).send(
                dept
            )

        


        }
        else {
            res.status(200).send({
                status: "400",
                message: "name already exists",
                data: req.body
            });
        }

    }

};
const updateDept = async (req: any, res: any, next: any) => {
    const deptRepository = AppDataSource.getMongoRepository(Department);
    var id: any = req.body.id;
    const dept : any = await deptRepository.findOne(id);
    if(dept==null){
        res.status(404).send({
            status:404,
            message:"Department not found"
        })
    }
   else{
    dept.deptName = req.body.deptName;
    dept.isActive= req.body.isActive;
    deptRepository.save(dept);

    res.status(200).send({
        status: "200",
        message: "check db to see reflected updates",
        data: dept

    });
   }

// const user = await deptRepository.update ({id:id}, {deptHead: req.body.deptHead, deptName: req.body.deptName, isActive: req.body.isActive})

}

const deleteDept = async (req:any,res:any,next:any)=>{
    const deptRepository = AppDataSource.getMongoRepository(Department);
    var id : any = req.params.id ;
    const dept: any = await deptRepository.findOne(id);
    await deptRepository.remove(dept);

    res.status(200).send({
        status: "200",
        message: "Successfully Deleted",
        
    })

}
export default { createDept, updateDept, deleteDept, getDepts, getDeptid };