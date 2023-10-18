import { randomUUID } from 'node:crypto';



class Appointment {
    id: string;

    provider: string;

    date: Date;
                                    // params: tipo dos dados, variável que quero omitir
    constructor ({provider, date}: Omit<Appointment, 'id'> ) {
        this.id = randomUUID();
        this.provider = provider;
        this.date = date;

    }
    
}

export default Appointment