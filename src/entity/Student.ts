import { Entity, ObjectIdColumn, ObjectID, Column, JoinColumn, OneToOne, RelationId } from "typeorm"
import { Department } from "./Dept";
import { Role } from "./Role";


@Entity()
export class Student {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    userName: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @Column()
    dept : string;

    @Column()
    rollno : number;

    @OneToOne(() => Department)
    @JoinColumn({ name: "id" })
    Dept: Department
    @RelationId((Student: Student) => Student.Dept)
    dept_id: ObjectID;

    @OneToOne(() => Role)
    @JoinColumn({ name: "id" })
    Role: Role
    @RelationId((Student: Student) => Student.Role)
    role_id: ObjectID;

    

    
}
