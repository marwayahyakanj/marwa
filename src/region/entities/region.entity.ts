
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class region {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

  

}