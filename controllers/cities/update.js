import City from "../../models/City.js"



const updateCities = async (req, res, next) => {
    try {
        let itineraries = req.body;


        let upd = await City.updateOne(
            { _id: itineraries._id },
            { $push: { itinerary: { $each: itineraries.itinerary } } },

        );

        if (upd.matchedCount > 0) {
            return res.status(200).json({
                message: 'Itinerary updated successfully',
                response: upd
            });
        }
    } catch (error) {
        next(error)
    }
};


const updateOne = async (req, res, next) => {

    try {
        let city = req.body
        let upd = await City.updateOne(
            { _id: city._id },
            {
                name: city.name,

            },
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



export { updateCities, updateOne }