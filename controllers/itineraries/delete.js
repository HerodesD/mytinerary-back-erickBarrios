import Itinerary from '../../models/Itinerary.js'

let deleteOne = async (req, res, next) => {
    try {
        let deleteItinerary = await Itinerary.deleteOne({

            _id: req.body._id
        })
        return res.status(200).json({
            response: deleteItinerary
        })
    } catch (error) {
        next(error)
    }


}

let deleteMany = async (req, res, next) => {
    try {
        let deleteItineraries = await Itinerary.deleteMany({
            name: req.body.name

        })
        return res.status(200).json({
            response: deleteItineraries
        })
    } catch (error) {
        next(error)
    }


}

let deleteFindOne = async (req, res, next) => {
    try {
        let deleteCity = await Itinerary.findOneAndDelete({
            name: req.body.name

        })
        return res.status(200).json({
            response: deleteCity
        })
    } catch (error) {
        next(error)
    }


}

export { deleteOne, deleteMany, deleteFindOne }