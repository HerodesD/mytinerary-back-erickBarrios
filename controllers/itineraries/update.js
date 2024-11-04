import Itinerary from '../../models/Itinerary.js'

const update = async (req, res, next) => {

    try {

        let itineraries = req.body
        let upd = await Itinerary.updateOne(
            { _id: itineraries._id },
            { itinerary: itineraries.name }

        )
        if (upd) {
            return res.status(200).json({
                response: upd

            })
        }


    } catch (error) {
        next(error)

    }


}



export { update }