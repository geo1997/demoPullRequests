const Event= require('../models/event');

//add event
exports.addEvent=(req,res) =>{

    const eventName = req.body.eventName;
    const  venue = req.body.venue;
    const time = req.body.time;
    const date = req.body.date;
    const status = req.body.status;

    const newEvent = new Event({
        eventName,
        venue,
        time,
        date,
        status
    });

    newEvent.save()
        .then(event =>{
            res.status(200).json({message:"Event added successfully",event})
        })
        .catch(err =>{
            res.status(400).send("Error Please Try Again");
        })
}

//retrieve events
exports.getEvents= (req,res) =>{
    Event.find().exec((error,content) =>{
        if(error){
            return res.status(400).json({
                error:"Unable to retrieve events"
            })
        }
        res.json(content)
    })
}

//get event by id
exports.findEventById= (req,res) =>{
    Event.findById(req.params.id)
        .then(employee =>{
            res.json(employee)
        })
        .catch(err => res.status(400).json({
            error:err +" Or no such event"
        }))
}

//delete event
exports.deleteEvent= (req,res) =>{
    Event.findByIdAndDelete(req.params.id)
        .then(() =>{
            res.json('Event Deleted')
        })
        .catch(err => res.status(400).json({
            error:err +" Or no such Event"
        }))

}

//update event
exports.updateEvent= (req,res) =>{
    Event.findById(req.params.id)
        .then(event =>{
            event.eventName = req.body.eventName;
            event.venue = req.body.venue;
            event.time = req.body.time;
            event.date= Date.parse(req.body.date);
            event.status = req.body.status;


            event.save()
                .then(() => res.json("Event Updated"))
                .catch(err => res.status(400).json('Error '+err))
        })
        .catch(err => res.status(400).json('Error '+err))
}