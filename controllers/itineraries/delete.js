import Itinerary from '../../models/Itinerary.js'

let deleteOne = async (req, res, next) => {
    try {
        let deleteItinerary = await Itinerary.deleteOne({ //eliminara el primero que encuentre
            name: req.body.name
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
        let deleteItineraries = await Itinerary.deleteMany({ //eliminara varios
            name: req.body.name

        })
        return res.status(200).json({
            response: deleteItineraries
        })
    } catch (error) {
        next(error)
    }


}


export { deleteOne, deleteMany }