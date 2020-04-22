import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
/**
 * É a representação de como um dado é composto dentro da aplicação.
 *
 * Quando usa typeorm não precisa do contructor.
 * Alterar no tsconfig.json: "strictPropertyInitialization": true => false
 */
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  provider: string;

  @Column('timestamp with time zone')
  date: Date;

  // constructor({ provider, date }: Omit<Appointment, 'id'>) {
  //   this.id = uuid();
  //   this.provider = provider;
  //   this.date = date;
  // }
}

export default Appointment;
