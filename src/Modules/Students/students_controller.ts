import { Request, Response, NextFunction } from "express";
import bcryptjs, { hash } from 'bcryptjs';
import { ObjectId } from "mongodb";
import { AppDataSource } from "../../data-source";
import { Student } from "../../entity/Student";
import { Individualinfo } from "../../entity/Individualinfo";
import config from "../../config/config";
import { CourierClient } from "@trycourier/courier";




const getStudents = async (req: Request, res: Response, next: NextFunction) => {

    const studentRepo = AppDataSource.getMongoRepository(Student);
    const students = await studentRepo.find();

    if (students == null) {
        res.status(400).send({
            status: 404,
            message: 'Either repository is empty or not found'
        });
    }
    else {
        res.status(200).send({
            status: 200,
            message: 'students fetched',
            data: students
        });

    }


};



const getStudentid = async (req: Request, res: Response, next: NextFunction) => {
    const studentRepo = AppDataSource.getMongoRepository(Student);
    var id = req.params.id;
    const student: any = await studentRepo.findOne(id);

    if (student == null) {
        return res.status(404).send({
            status: 404,
            message: 'Student not found'

        })
    }
    else {
        return res.status(200).send({
            id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            phone: student.phone,
            email: student.email,
            userName: student.userName,
            rollno: student.rollno,
            dept: student.dept,
        })
    }


}

const getStudentdept = async (req: Request, res: Response, next: NextFunction) => {
    const studentRepo = AppDataSource.getMongoRepository(Student);
    var dept = req.params.dept;
    const student: any = await studentRepo.find({where:{dept:dept}});

    console.log(student);

    if (student == null) {
        return res.status(404).send({
            status: 404,
            message: 'Student not found'

        })
    }
    else {
        res.send({
            data:student
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

};

async function updateMail(userName, mail) {

    const courier = CourierClient({ authorizationToken: "pk_prod_CSYZXXYJ3CMS40QDY1R05X0743QQ" });

    await courier.send({
        message: {
            to: {
                data: {
                    name: userName,

                },
                email: mail,

            },
            content: {
                title: "Welcome to the Portal",
                body: "Your profile @ {{name}} has been updated successfully by concern faculty, if you didn't initiate the update kindly contact your HOD to reversal.!",
            },
            routing: {
                method: "single",
                channels: ["email"],
            },
        },
    });

}



const createStudent = async (req: Request, res: Response, next: NextFunction) => {

    if (
        req.body.firstName == null || req.body.firstName == "" || req.body.firstName == undefined ||
        req.body.lastName == null || req.body.lastName == "" || req.body.lastName == undefined ||
        req.body.phone == null || req.body.phone == "" || req.body.phone == undefined ||
        req.body.email == null || req.body.email == "" || req.body.email == undefined ||
        req.body.userName == null || req.body.userName == "" || req.body.userName == undefined ||
        req.body.dept == null || req.body.dept == "" || req.body.dept == undefined ||
        req.body.rollno == null || req.body.rollno == "" || req.body.rollno == undefined ||
        req.body.gender == null || req.body.gender == "" || req.body.gender == undefined ||
        req.body.dob == null || req.body.dob == "" || req.body.dob == undefined ||
        req.body.address == null || req.body.address == "" || req.body.address == undefined ||
        req.body.bloodgroup == null || req.body.bloodgroup == "" || req.body.bloodgroup == undefined) {

        res.status(400).send({
            status: "400",
            message: "Data Entered is wrong",
            data: req.body

        });
    }

    else {
        const studentRepo = AppDataSource.getMongoRepository(Student);
        var firstname: string = req.body.firstName;
        const student: any = await studentRepo.findOne({ where: { firstName: firstname } });
        if (student != null) {

            res.status(400).send({
                status: 400,
                message: 'Already exists :(',
                data: student
            });
        }
        else {
            const studentRepo = AppDataSource.getMongoRepository(Student);
            var firstname: string = req.body.firstName;
            var username: string = req.body.userName;
            var mail: string = req.body.email;
            var role: string = "STUDENT";
            var password: string = (await bcryptjs.hash(config.key, 10)).toString();
            const student: any = await studentRepo.findOne({ where: { firstName: firstname } });
            if (student == null) {

                const student = await studentRepo.insert({
                    firstName: firstname,
                    lastName: req.body.lastName,
                    role: role,
                    rollno: req.body.rollno,
                    dept: req.body.dept,
                    phone: req.body.phone,
                    email: mail,
                    userName: username,
                    password: password,


                })
                res.status(200).send({
                    status: 200,
                    message: 'success',
                    data: student
                });

                const individualRepository = AppDataSource.getMongoRepository(Individualinfo);
                var gender = req.body.gender;
                const individualinfo: any = await individualRepository.insert({
                    address: req.body.address,
                    bloodgroup: req.body.bloodgroup,
                    gender: gender,
                    dob: req.body.dob,
                    userId: new ObjectId(student.raw['insertedId'])


                })

                res.status(200).send({
                    status: 200,
                    message: 'successfully inserted',
                    data: individualinfo
                });

                sendEmail(username, config.key, mail);
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

const updateStudent = async (req: Request, res: Response, next: NextFunction) => {

    var id = req.body.id;
    const StudentRepo: any = AppDataSource.getMongoRepository(Student);
    const student = await StudentRepo.findOne(id);
    if (student != null) {

        student.userName = req.body.userName;
        student.firstName = req.body.firstName;
        student.lastName = req.body.lastName;
        student.dept = req.body.dept;
        student.rollno = req.body.rollno;
        student.phone = req.body.phone;
        student.email = req.body.email;

        StudentRepo.save(student);

        updateMail(student.userName, student.email);




        res.status(200).send({
            status: 200,
            message: 'successfully updated',

        })
    }
    else {
        res.status(200).send({
            status: 404,
            message: "couldn't update check the details"
        })
    }

};



const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
    var id = req.params.id;
    const StudentRepo = AppDataSource.getMongoRepository(Student);
    const student = await StudentRepo.findOne(id);
    if (student != null) {
        await StudentRepo.remove(student);

        res.send({
            message: 'success'
        })
    }
    else {
        res.status(200).send({
            status: 404,
            message: "No Student found"
        });
    }

};




export default { createStudent, getStudents, getStudentid, getStudentdept, updateStudent, deleteStudent }


