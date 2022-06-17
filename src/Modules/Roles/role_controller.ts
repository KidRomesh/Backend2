import { Request, Response, NextFunction } from "express";
import { Role } from "../../entity/Role";
import { AppDataSource } from "../../data-source";



const getRole = async (req: Request, res: Response, next: NextFunction) => {


    const roleRepository = AppDataSource.getMongoRepository(Role);
    const role: any = await roleRepository.find();

    if (role == null) {
        res.status(200).send({
            status: 404,
            message: "Either repository is empty or repository doesnot exists"
        })
    }

    else {
        res.status(200).send({
            message: "Loaded roles",
            data: role
        })
    }
}

const getRoleid = async (req: Request, res: Response, next: NextFunction) => {
    const roleRepository = AppDataSource.getMongoRepository(Role);
    var id: any = req.params.id;
    const role: any = await roleRepository.findOne(id);
    if (role == null) {
        res.status(404).send({
            status: 404,
            message: "role not find"
        })
    }
    else {
        res.status(200).send({
            id:role.id,
            Designation: role.Designation,
            isActive: role.isActive,
            isEligible: role.isEligible
        })
    }


}



const createRole = async (req: Request, res: Response, next: NextFunction) => {
    if (
        req.body.Designation == null || req.body.Designation == "" || req.body.Designation == undefined ||
        req.body.isActive == null || req.body.isActive == undefined ||
        req.body.isEligible == null || req.body.isEligible == undefined
    ) {
        res.status(400).send({
            status: "400",
            message: "Data Entered is wrong",
            data: req.body
        });
    }

    else {
        const roleRepository = AppDataSource.getMongoRepository(Role);
        var designation: string = req.body.Designation;
        const role: any = await roleRepository.findOne({ where: { Designation: designation } });
        if (role == null) {
            const role = await roleRepository.insert({
                Designation: req.body.Designation,
                isActive: req.body.isActive,
                isEligible: req.body.isEligible
            });

            res.status(200).send({
                status: 200,
                message: "Role created successfully",
                data: role
            })




        }
        else {
            res.status(400).send({
                status: 400,
                message: "name already exists",
                data: role
            });
        }

    }

};
const updateRole = async (req: any, res: any, next: any) => {
    const roleRepository = AppDataSource.getMongoRepository(Role);
    var id: any = req.body.id;
    const role: any = await roleRepository.findOne(id);
    if (role == null) {
        res.status(200).send({
            status: 404,
            message: "Role not found"
        })
    }
    else {
        role.Designation = req.body.Designation;
        role.isActive = req.body.isActive;
        role.isEligible = req.body.isEligible
        roleRepository.save(role);

        res.status(200).send({
            status: "200",
            message: "Role updated successfully",
            data: role

        });
    }

    // const user = await deptRepository.update ({id:id}, {deptHead: req.body.deptHead, deptName: req.body.deptName, isActive: req.body.isActive})

}

const deleteRole = async (req: any, res: any, next: any) => {
    const roleRepository = AppDataSource.getMongoRepository(Role);
    var id: any = req.params.id;
    const role: any = await roleRepository.findOne(id)
    await roleRepository.remove(role)
    

}
export default { createRole, updateRole, deleteRole, getRole, getRoleid };