import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import menuRoutes from './routes/menuRoute.js'

const app = express();

const corsOptions = {
    origin: ['http://localhost:5173' , 'https://bars-ngrills-deepnet.vercel.app']
}
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.use('/api/menu' , menuRoutes);

app.listen(3000 , () => {
    console.log('server running');
})