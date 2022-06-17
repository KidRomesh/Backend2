import { Entity,  ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Role {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    Designation: string;

    @Column()
    isActive: Boolean;

    @Column()
    isEligible : Boolean

 

}