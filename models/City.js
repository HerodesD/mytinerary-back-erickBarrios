import { Schema, model } from "mongoose";



let collection = 'cities'

let schema = new Schema({

    name: { type: String, require: true },
    photo: { type: String, require: true },
    country: { type: String, require: true },
    foundation: { type: Number, require: true },
    population: { type: Number, require: true },
    language: { type: String, require: true },
    climate: { type: String, require: true },
    timeZone: { type: String, require: true },
    currency: { type: String, require: true },
    zipCode: { type: String, require: true }



}, {
    timestamps: true
})

let City = model(collection, schema)
export default City