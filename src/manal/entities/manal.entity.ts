import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Manal {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

  

}

