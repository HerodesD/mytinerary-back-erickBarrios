import City from "../../models/City.js"


const update = async (req, res, next) => {

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



export { update }