import { AppDataSource } from "./data-source"
import "reflect-metadata";
import express, { Express } from "express";
import morgan from "morgan"
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";

import student from "./Modules/Students/student_routes"
import dept from "./Modules/Department/dept_routes";
import role from "./Modules/Roles/role_routes";
import employee from "./Modules/Employees/employee_routes";
import auth from "./Modules/Auth/auth"
import task from "./Modules/Task/task_routes"


AppDataSource.initialize().then(async () => {
    const app: Express = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan("dev"));
    app.use(express.json());

    app.use(function (req: any, res: any, next: any) {

        var send = res.send;
        var sent = false;
        res.send = function (data: any) {
            if (sent) return;
            send.bind(res)(data);
            sent = true;
        };
        next();

    });

    app.use(cors());

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/dept", dept);
    app.use("/role", role);
    app.use("/employee", employee)
    app.use("/student", student);
    app.use("/auth", auth);
    app.use("/task", task);

    const httpServer = http.createServer(app);
    const PORT: any = process.env.PORT ?? 6060;
    httpServer.listen(PORT, () =>
        console.log(`The server is running in port ${PORT}`)
    );



}).catch(error => console.log(error))
