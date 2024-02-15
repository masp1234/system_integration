import dotenv from 'dotenv'
dotenv.config({ path: "./.env-dev"})

/* Samme som 
import 'dotenv/config'
*/

console.log(process.env.MYSQL_USER)