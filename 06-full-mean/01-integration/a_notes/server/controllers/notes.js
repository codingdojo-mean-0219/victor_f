const mongoose = require("mongoose"),
        Note = mongoose.model("Note");

class Notes {
    getNotes(req, res){
        Note.find({}).sort({"createdAt": -1}).exec( function(err,notes){
            if(err) {
                res.json({"status": "not ok", "errors": err})
            } else {
                res.json({"status": "ok", "notes": notes});
            }
        });
    }
    createNote(req, res){

                let note = new Note(req.body);
                note.save(function(err) {
                    if(err) {
                        res.json({"status": "not ok", "errors": err});
                    } else {
                        res.json({"status": "ok"});
                    }
                });
    }


    deleteNote(req, res){
        Note.findByIdAndDelete(req.params.id, function(err) {
            if(err) {
                res.json({"status": "not ok", "errors": err});
            } else {
                res.json({"status": "ok"});
            }
        });
    }
}
module.exports = new Notes();
