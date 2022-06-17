import { Request, Response, NextFunction } from "express";
import bcryptjs, { hash } from 'bcryptjs';
import { AppDataSource } from "../../data-source";
import { ObjectId } from 'mongodb';
import { Employee } from "../../entity/Employee";
import { CourierClient } from "@trycourier/courier";
import { Individualinfo } from "../../entity/Individualinfo";
import config from "../../config/config";




const getEmployees = async (req: Request, res: Response, next: NextFunction) => {

    const empRepository = AppDataSource.getMongoRepository(Employee);
    const employees = await empRepository.find();

    if (employees == null) {
        res.status(200).send({
            status: 404,
            message: 'Either repository is empty or not found'
        });
    }
    else {
        res.status(200).send({
            status: 200,
            message: 'Employees fetched',
            data: employees
        });

    }


};


const getEmployeeid = async (req: Request, res: Response, next: NextFunction) => {
    const empRepository = AppDataSource.getMongoRepository(Employee);
    const indRepo = AppDataSource.getMongoRepository(Individualinfo);

    var id = req.params.id;


    const Emp: any = await empRepository.findOne(id);

    console.log(id);

    const ind: any = await indRepo.findOne({ where: { userId: id } });

    console.log(ind);


    if (Emp == null) {
        return res.status(200).send({
            status: 404,
            message: 'Employee not found'

        })
    }
    else {

        return res.status(200).send({
            id: Emp.id,
            firstName: Emp.firstName,
            lastName: Emp.lastName,
            phone: Emp.phone,
            email: Emp.email,
            userName: Emp.userName,
            role: Emp.role,
            dept: Emp.dept,





        })
    }


}


async function sendEmail(userName, password, mail) {

    const courier = CourierClient({ authorizationToken: "pk_prod_CSYZXXYJ3CMS40QDY1R05X0743QQ" });

    await courier.send({
        message: {
            to: {
                data: {
                    name: userName,
                    password: password,

                },
                email: mail,

            },
            content: {
                title: "Welcome to the Portal",
                body: "Your username is {{name}} and your password is {{password}}",
            },
            routing: {
                method: "single",
                channels: ["email"],
            },
        },
    });

}

const createEmp = async (req: Request, res: Response, next: NextFunction) => {

    if (
        req.body.firstName == null || req.body.firstName == "" || req.body.firstName == undefined ||
        req.body.lastName == null || req.body.lastName == "" || req.body.lastName == undefined ||
        req.body.phone == null || req.body.phone == "" || req.body.phone == undefined ||
        req.body.email == null || req.body.email == "" || req.body.email == undefined ||
        req.body.userName == null || req.body.userName == "" || req.body.userName == undefined ||
        req.body.dept == null || req.body.dept == "" || req.body.dept == undefined ||
        req.body.role == null || req.body.role == "" || req.body.role == undefined ||
        req.body.gender == null || req.body.gender == "" || req.body.gender == undefined ||
        req.body.dob == null || req.body.dob == "" || req.body.dob == undefined ||
        req.body.address == null || req.body.address == "" || req.body.address == undefined ||
        req.body.bloodgroup == null || req.body.bloodgroup == "" || req.body.bloodgroup == undefined) {

        res.status(200).send({
            status: "400",
            message: "Data Entered is wrong",


        });
    }

    else {
        const empRepository = AppDataSource.getMongoRepository(Employee);
        var firstname: string = req.body.firstName;
        const Emp: any = await empRepository.findOne({ where: { firstName: firstname } });
        if (Emp != null) {

            res.status(400).send({
                status: 400,
                message: 'Already exists :(',
                data: Emp
            });
        }
        else {
            const empRepository = AppDataSource.getMongoRepository(Employee);
            var firstname: string = req.body.firstName;
            var dept: string = req.body.dept;
            var role: string = req.body.role;
            var userName: string = req.body.userName;
            var email: string = req.body.email;
            var password: string = (await bcryptjs.hash(config.key, 10)).toString();
            const Emp: any = await empRepository.findOne({ where: { firstName: firstname } });
            if (Emp == null) {

                const emp = await empRepository.insert({
                    firstName: firstname,
                    lastName: req.body.lastName,
                    role: role,
                    dept: dept,
                    phone: req.body.phone,
                    email: email,
                    userName: userName,
                    password: password,


                })
                sendEmail(userName, config.key, email);

                res.status(200).send({
                    status: 200,
                    message: 'success',
                    data: emp
                });

                const individualRepository = AppDataSource.getMongoRepository(Individualinfo);
                const individualinfo: any = await individualRepository.insert({
                    address: req.body.address,
                    bloodgroup: req.body.bloodgroup,
                    dob: req.body.dob,
                    gender: req.body.gender,
                    userId: new ObjectId(emp.raw['insertedId'])


                })

                res.status(200).send({
                    status: 200,
                    message: 'successfully inserted',
                    data: individualinfo
                });
            }

            else {
                res.status(200).send({
                    status: 400,
                    message: 'data error',

                })
            }
        }

    }

};

const updateEmployee = async (req: Request, res: Response, next: NextFunction) => {

    var id = req.body.id;
    console.log(id);
    const empRepo: any = AppDataSource.getMongoRepository(Employee);
    // const indRepo : any = AppDataSource.getMongoRepository(Individualinfo);
    // const ind = await indRepo.findOne({where:{userId:id}});
    const emp = await empRepo.findOne(id);

    if (emp == null) {

        res.status(200).send({
            status: 404,
            message: "couldn't update check the details"
        })



    }
    else {
        emp.userName = req.body.userName;
        emp.firstName = req.body.firstName;
        emp.lastName = req.body.lastName;
        emp.email = req.body.email,
            emp.phone = req.body.phone,
            emp.role = req.body.role,
            emp.dept = req.body.dept

        empRepo.save(emp);


        res.status(200).send({
            status: 200,
            message: 'successfully updated',
            data: emp

        })
    }

};



const deleteEmployee = async (req: Request, res: Response, next: NextFunction) => {
    var id = req.params.id;
    const empRepo = AppDataSource.getMongoRepository(Employee);
    const emp = await empRepo.findOne(id);
    if (emp != null) {
        await empRepo.remove(emp);

        res.status(200).send({
            message: "Successfully deleted"
        })

    }
    else {
        res.status(200).send({
            status: 404,
            message: "No employee found"
        });
    }

};

export default { createEmp, getEmployees, getEmployeeid, updateEmployee, deleteEmployee }


