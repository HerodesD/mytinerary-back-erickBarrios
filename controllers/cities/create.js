import City from '../../models/City.js'

let createNewCity = async (req, res, next) => {
    try {

        let city = req.body
        let create = await City.create(city)
        return res.status(201).json({
            response: create
        })
    } catch (error) {
        next(error)
    }

}


export default createNewCity 