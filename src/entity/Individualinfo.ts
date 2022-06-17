import { Column, Entity, JoinColumn, ObjectID, ObjectIdColumn, OneToOne, PrimaryColumn, RelationId } from "typeorm";
import { Employee } from "./Employee";
@Entity()
export class Individualinfo {

    @ObjectIdColumn()
    id: ObjectID;

    @OneToOne(() => Employee)
    @JoinColumn({ name: "id" })
    employee: Employee;
    @RelationId((Individualinfo: Individualinfo) => Individualinfo.employee)
    userId: ObjectID;


    @Column()
    gender: string;

    @Column()
    bloodgroup: string;
    
    @Column()
    dob: string;

    @Column()
    address: string;

   


}
