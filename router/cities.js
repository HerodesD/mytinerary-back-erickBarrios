import { response, Router } from "express";
import { allCities, cityById } from "../controllers/cities/read.js";
import createNewCity from "../controllers/cities/create.js";
import { deleteOne, deleteFindOne, deleteMany } from "../controllers/cities/delete.js";
import { update } from "../controllers/cities/update.js";

const router = Router()

router.get('/all', allCities)
router.get('/id/:id', cityById)
router.post('/create', createNewCity)
router.put('/update', update)
router.delete('/deleteOne', deleteOne)
router.delete('/deleteMany', deleteMany)
router.delete('/deleteFindOne', deleteFindOne)




export default router