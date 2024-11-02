import Itinerary from '../../models/Itinerary.js'

let createNewItinerary = async (req, res, next) => {
    try {

        let itineray = req.body
        let create = await Itinerary.create(itineray)
        return res.status(201).json({
            response: create
        })
    } catch (error) {
        next(error)
    }

}


export { createNewItinerary }