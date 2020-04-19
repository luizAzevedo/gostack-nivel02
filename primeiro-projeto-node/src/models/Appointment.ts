import { uuid } from 'uuidv4';

/**
 * É a representação de como um dado é composto dentro da aplicação.
 */
class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor({ provider, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
