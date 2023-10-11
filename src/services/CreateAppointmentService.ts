import Appointment from "../models/Appointment";
import { startOfHour } from 'date-fns'
import AppointmentsRepository from "../repositories/AppointmentsRepository";

interface Request {
     provider: string,
     date: Date;   
}


class CreateAppointmentService {

    private appointmentsRepository: AppointmentsRepository
                                        //dependency inversion
    constructor (appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }
    
    public execute({provider, date }: Request): Appointment {
    const appointmentDate = startOfHour(date)
    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(appointmentDate)

        if(findAppointmentInSameDate) {
            throw Error ("Horário indisponível")
           // return response.status(400).json({message: "Horário indisponível"})
        }

        const appointment = this.appointmentsRepository.create({provider, date: appointmentDate})

        return appointment
    }
}

export default CreateAppointmentService