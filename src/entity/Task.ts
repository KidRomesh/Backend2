import { Entity,  ObjectIdColumn, ObjectID, Column} from "typeorm";

@Entity()
export class Task  {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    from: string;

    @Column()
    assignto: string;

    @Column()
    task : string;

    @Column()
    status :string;

    @Column()
    comments : string; 
    
    @Column()
    due : string;

}