import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product';
import checkoutRoutes from './routes/checkout';
const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/products',productRoutes);
app.use('/api/checkout',checkoutRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});