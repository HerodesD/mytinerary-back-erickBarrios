import Itinerary from '../../models/Itinerary.js'
import City from "../../models/City.js"




let allItineraries = async (req, res, next) => {
    try {
        let { name } = req.query
        console.log(name);
        let query = {}
        if (name) {
            query.name = { $regex: '^' + name, $options: 'i' }
        }

        let itineraries = await Itinerary.find(query)
        return res.status(200).json({
            response: itineraries
        })
    } catch (error) {
        next(error)
    }
}


let itineraryById = async (req, res, next) => {

    try {
        let itineraryQuery = req.params.id
        let all = await Itinerary.findById(itineraryQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}


const cityItineraries = async (req, res, next) => {
    try {
        const cityId = req.params.id;
        const cityWithItineraries = await City.findById(cityId).populate('itinerary', 'photo name price duration likes hashtags comments').exec();

        if (!cityWithItineraries) {
            return res.status(404).json({
                message: 'City not found'
            });
        }
        if (cityWithItineraries.itinerary.length === 0) {
            return res.status(404).json({
                message: 'No itineraries yet for this city'
            });
        }
        return res.status(200).json({
            response: cityWithItineraries.itinerary
        });
    } catch (error) {
        next(error)
    }
};



export { allItineraries, itineraryById, cityItineraries }