import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmenteDTO {
  provider: string;
  date: Date;
}

/**
 * É responsavel de como o dado é trabalhado na aplicação.
 */

class AppointmentRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );
    return findAppointment || null;
  }

  public create({ provider, date }: CreateAppointmenteDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentRepository;
