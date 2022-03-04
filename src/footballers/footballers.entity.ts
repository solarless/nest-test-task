import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Footballer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'smallint' })
  number: number;
}
