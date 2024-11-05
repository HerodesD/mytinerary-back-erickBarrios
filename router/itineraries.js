import { response, Router } from "express";
import { allItineraries, itineraryById, cityItineraries } from "../controllers/itineraries/read.js";
import { createNewItinerary } from "../controllers/itineraries/create.js";
import { update } from "../controllers/itineraries/update.js";
import { deleteOne, deleteMany, deleteFindOne } from "../controllers/itineraries/delete.js"


const router = Router()

router.get('/all', allItineraries)
router.get('/id/:id', itineraryById)
router.get('/cities/:id', cityItineraries)
router.post('/create', createNewItinerary)
router.put('/update', update)
router.delete('/deleteOne', deleteOne)
router.delete('/deleteMany', deleteMany)
router.delete('/deleteFindOne', deleteFindOne)






export default router