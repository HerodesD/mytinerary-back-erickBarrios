import Itinerary from '../../models/Itinerary.js'

const update = async (req, res, next) => {

    try {

        let itinerary = req.body
        await Itinerary.updateOne(
            { _id: itinerary._id },
            { name: itinerary.name }

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