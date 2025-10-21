import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './controllers/User.js'

const app = express();
dotenv.config({ silent: true });

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send("hello frm server");
})

app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
})
