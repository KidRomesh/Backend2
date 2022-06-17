import { Entity,  ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Bg  {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    bg: string;

  

 

}