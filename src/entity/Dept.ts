import { Entity,  ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Department  {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    deptName: string;

    @Column()
    isActive: Boolean;

 

}