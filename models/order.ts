import mongoose, { Schema, Document, Model } from 'mongoose';

interface IOrder extends Document {
  userID: string;
  items: {
    id: string;
    title: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  totalAmount: number;
  paymentMethod: string;
}

const orderSchema: Schema = new Schema({
  userID: { type: String, required: true },
  items: [
    {
      id: { type: String, required: true },
      title: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
}, { timestamps: true });

const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>('Order', orderSchema);

export default Order;
