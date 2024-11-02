import City from "../../models/City.js"

let allCities = async (req, res, next) => {
    try {
        let { name } = req.query
        console.log(name);
        let query = {}
        if (name) {
            query.name = { $regex: '^' + name, $options: 'i' }
        }

        let cities = await City.find(query)
        return res.status(200).json({
            response: cities
        })
    } catch (error) {
        next(error)
    }
}


let cityById = async (req, res, next) => {

    try {
        let cityQuery = req.params.id
        let all = await City.findById(cityQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export { allCities, cityById }