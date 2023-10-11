import Appointment from "../models/Appointment";
import { isEqual} from 'date-fns'
    

interface createAppointmentDTO {
    provider: string;
    date: Date;
}

class AppointmentsRepository {
    private appointments: Appointment[];

    constructor () {
        this.appointments =[]
    }

    public all(): Appointment[] {
        return this.appointments
    }
                                            // | === or
    public findByDate(date: Date): Appointment | null {                                  //date params               
        const findAppointment = this.appointments.find (appointment => isEqual(date, appointment.date));
        return findAppointment ?? null // se findAppointment for undefined retorna null
    }

    public create({provider, date}: createAppointmentDTO): Appointment {
        const appointment = new Appointment(provider, date);
        this.appointments.push (appointment)
        return appointment
    }
    
}

export default AppointmentsRepository