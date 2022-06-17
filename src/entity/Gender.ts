import { Entity,  ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Gender  {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    gender: string;

  

 

}