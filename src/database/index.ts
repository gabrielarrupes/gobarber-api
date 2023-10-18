import { DataSource, createConnection } from 'typeorm';
//import { createConnection } from 'typeorm';
//createConnection()


const LocalOrmconfig = require('../ormconfig.json')

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "gostack_gobarber",
    migrations: [
        "./src/database/migrations/*.ts",
         
    ],

})

dataSource.initialize()
.then(() => {
  console.log("Data Source has been initialized!");
})
.catch((err) => {
  console.error("Error during Data Source initialization", err);
});

export default dataSource

