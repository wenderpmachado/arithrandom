import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Expression {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  equation: string;

  @Column("uuid")
  eventId?: string;

  @Column("double")
  result?: number;
}
