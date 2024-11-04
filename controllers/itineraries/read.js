import Itinerary from '../../models/Itinerary.js'



let allItineraries = async (req, res, next) => {
    try {
        let { name } = req.query
        console.log(name);
        let query = {}
        if (name) {
            query.name = { $regex: '^' + name, $options: 'i' }
        }

        let itineraries = await Itinerary.find(query).populate('itinerary', 'photo name price duration likes hashtags comments').exec();
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
        let all = await Itinerary.findById(itineraryQuery).populate('itinerary', 'photo name price duration likes hashtags comments').exec();
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { allItineraries, itineraryById }