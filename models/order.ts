import mongoose , {Schema, Document} from "mongoose";
import { use } from "react";

interface ICartIem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface IOrder extends Document {
    userID : string,
    items: ICartIem[],
    createdAt: Date,
    total: number,
}

const cartItemSchema = new Schema({
    id: {type: Number, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    quantity: {type: Number, required: true},
})

const orderSchema = new Schema({
    userID: {type: String, required: true},
    items: {type: [cartItemSchema], required: true},
    createdAt: {type: Date, required: true, default: Date.now},
    total: {type: Number, required: true},
})

export default mongoose.model<IOrder>('Order', orderSchema);