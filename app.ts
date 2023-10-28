import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import todoRoute from './routes/todos'


app.use(express.static('static'))
app.use(express.json())
app.use(bodyParser.json())
app.use('/',todoRoute)

export default app