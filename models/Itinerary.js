import { Schema, model } from "mongoose";

let collection = 'itineraries'

let schema = new Schema({

    photo: { type: String, require: true },
    name: { type: String, require: true },
    price: { type: Number, require: true },
    duration: { type: String, require: true },
    likes: { type: Number, require: true },
    hashtags: { type: String, require: true },
    comments: { type: String, require: true },



}, {
    timestamps: true
})

let Itinerary = model(collection, schema)
export default Itinerary



