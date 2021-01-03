const express = require('express');
const router = express.Router();

/*
 event routes ,to
 add event: POST
 update event : PUT
 delete event :DELETE
 get event : GET
 */
const {addEvent,getEvents,findEventById,deleteEvent,updateEvent} = require('../controllers/event');
router.delete("/delete/event/:id",deleteEvent)
router.post("/event/add",addEvent);
router.get("/events",getEvents);
router.get("/event/:id",findEventById);
router.delete("/delete/event/:id",deleteEvent)
router.put("/update/event/:id",updateEvent)

module.exports = router;