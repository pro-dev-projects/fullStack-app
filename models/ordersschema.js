import mongoose from "mongoose";

const Schema = mongoose.Schema ;

// order docuemnt structure
const orderSchema = new Schema({
    //records ids are not a normal string they are Object ids belonging to records collection
    records: [ { type:Schema.Types.ObjectId, ref:"records" ,required:true} ],
    totalPrice: { type:Number, required:true},
    //userId is not a normal string it is Object id belonging to users collection
    userId: { type:Schema.Types.ObjectId, ref:"users", required:true}
})

const OrdersCollection = mongoose.model("orders", orderSchema)

export default OrdersCollection;

// embedded document
// refrenced document