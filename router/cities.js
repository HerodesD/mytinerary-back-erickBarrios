import { response, Router } from "express";
import { allCities, cityById } from "../controllers/cities/read.js";
import createNewCity from "../controllers/cities/create.js";

const router = Router()

router.get('/all', allCities)
router.get('/id/:id', cityById)
router.post('/create', createNewCity)




export default router