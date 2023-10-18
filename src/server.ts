import express from 'express';
import routes from './routes';
import './database'

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333');
});


// yarn add typeorm@0.2.27

// "aws-sdk": "^2.822.0",
//     "bcryptjs": "^2.4.3",
//     "celebrate": "^13.0.4",
//     "class-transformer": "^0.3.1",
//     "cors": "^2.8.5",
//     "date-fns": "^2.16.1",
//     "dotenv": "^8.2.0",
//     "express": "^4.17.1",
//     "express-async-errors": "^3.1.1",
//     "handlebars": "^4.7.6",
//     "ioredis": "^4.19.4",
//     "jsonwebtoken": "^8.5.1",
//     "mime": "^2.4.7",
//     "mongodb": "^3.6.3",
//     "multer": "^1.4.2",
//     "nodemailer": "^6.4.17",
//     "pg": "^8.3.3",
//     "rate-limiter-flexible": "^2.1.16",
//     "redis": "^3.0.2",
//     "reflect-metadata": "^0.1.13",
//     "tsyringe": "^4.4.0",
//     "typeorm": "^0.2.27",