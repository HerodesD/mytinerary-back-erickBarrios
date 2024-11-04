import City from "../../models/City.js"

let deleteOne = async (req, res, next) => {
    try {
        let deleteCity = await City.deleteOne({
            _id: req.body._id
        })
        return res.status(200).json({
            response: deleteCity
        })
    } catch (error) {
        next(error)
    }


}

let deleteMany = async (req, res, next) => {
    try {
        let deleteCities = await City.deleteMany({
            name: req.body.name

        })
        return res.status(200).json({
            response: deleteCities
        })
    } catch (error) {
        next(error)
    }


}

let deleteFindOne = async (req, res, next) => {
    try {
        let deleteCity = await City.findOneAndDelete({
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