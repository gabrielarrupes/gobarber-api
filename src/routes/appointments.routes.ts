import { Router } from 'express';
import { parseISO } from 'date-fns'
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
    const appointments = appointmentsRepository.all()

    return response.json(appointments)
})


appointmentsRouter.post('/', (request, response) => {
   try {
    const { provider, date} = request.body
    const parsedDate = parseISO(date) // não faz parte da regra de negócio pois só transforma em date
    const createAppointment = new CreateAppointmentService(appointmentsRepository)
    const appointment = createAppointment.execute({provider, date: parsedDate})
   
    return response.json(appointment)
    
   } catch (error) {
    response.status(400).json({error: "ERRO 400"})
   }
})

export default appointmentsRouter