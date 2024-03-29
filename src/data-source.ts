import "reflect-metadata"
import { DataSource } from "typeorm"
import { Bg } from "./entity/Bg"
import { Department } from "./entity/Dept"
import { Employee } from "./entity/Employee"
import { Gender } from "./entity/Gender"
import { Individualinfo } from "./entity/Individualinfo"
import { Role } from "./entity/Role"
import { Student } from "./entity/Student"
import { Task } from "./entity/Task"

const uri = process.env.MONGODB_URI;

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: uri,
    useNewUrlParser:true,
    synchronize: false,
    logging: true,
    useUnifiedTopology: true,
    entities: [Employee, Student, Department, Individualinfo, Bg, Role, Gender, Task],
    migrations: [],
    subscribers: [],
})
