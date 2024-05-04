import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import menuRoutes from './routes/menuRoute.js'
import connectDb from './connection/database.js';

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173'
}
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

connectDb();

app.use('/api/menu' , menuRoutes);

app.listen(3000 , () => {
    console.log('server running');
})