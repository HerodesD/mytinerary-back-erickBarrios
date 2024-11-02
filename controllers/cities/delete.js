import City from "../../models/City.js"

let deleteOne = async (req, res, next) => {
    try {
        let deleteCity = await City.deleteOne({ //eliminara el primero que encuentre
            name: req.body.name
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
        let deleteCities = await City.deleteMany({ //eliminara varios
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
        let deleteCity = await City.findOneAndDelete({ //elimina uno y muestra que fue lo que se elimino
            name: req.body.name

        })
        return res.status(200).json({
            response: deleteCity
        })
    } catch (error) {
        next(error)
    }


}
let deleteById = async (req, res, next) => {
    try {
        let deleteById = await City.findByIdAndDelete({
            _id: req.params._id

        })
        return res.status(200).json({
            response: deleteById
        })
    } catch (error) {
        next(error)
    }


}


export { deleteOne, deleteMany, deleteFindOne, deleteById }