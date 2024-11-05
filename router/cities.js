import { Router } from "express";
import { allCities, cityById } from "../controllers/cities/read.js";
import createNewCity from "../controllers/cities/create.js";
import { deleteOne, deleteFindOne, deleteMany } from "../controllers/cities/delete.js";
import { updateCities, updateOne } from "../controllers/cities/update.js";

const router = Router()

router.get('/all', allCities)
router.get('/id/:id', cityById)
router.post('/create', createNewCity)
router.put('/update', updateOne)
router.put('/update', updateCities)
router.delete('/deleteOne', deleteOne)
router.delete('/deleteMany', deleteMany)
router.delete('/deleteFindOne', deleteFindOne)




export default router