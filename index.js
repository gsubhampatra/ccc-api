// index.js
import express from 'express';
import cors from 'cors';
import rssRoutes from './routes/rssRoutes.js';

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to CCC API');
});
app.use('/api',rssRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
