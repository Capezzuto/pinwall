var models = require('../models/appModel')
var Notes  = require('../models/note')
var Categories  = require('../models/category')
var helper = require('../helperFN/helpers.js')
console.log("line 4: appController")

module.exports = {
  'notes': {
    get: function(req, res){
          console.log('Controller  get notes');
//          models.notes.get(function(data){
//            res.json(data);
//        });
         helper.fetchNotes(req, res);
    },

    post: function(req, res){
     var newNote = {title: req.body.title,
                    img: req.body.img,
                    content: req.body.content
                   }
     var category = req.body.category;

    Notes.noteCreate(req, res, newNote, category)

    },
    put: function(req, res){

    },
    delete: function(req, res){

    }
  },
  'notes/:id': {
    get: function(req, res){
      // req.body.id
      // console.log('Controller  get notes');
      // models.notes.get(function(data){
      //   res.json(data);
      // });
    },
    post: function(req, res){
      // req.body.id
      // console.log('Controller  get notes');
      // models.notes.get(function(data){
      //   res.json(data);
      // });
    },
    put: function(req, res){

    console.log("PUTS req.body", req.body)
    console.log("PUTS req.params", req.params)
    var id = req.params.id;
        Notes.noteUpdate(req, res ,id)

    }
      ,
    delete: function(req, res){
      console.log("line 45 : appController")
//      models.notes.delete(function(data){
//        console.log(data, "req.body", req.body)
//        res.send(data);
//      }, req.body);
//    }
    console.log("req.body", req.body)
    console.log("req.params", req.params)

    helper.deleteNote(req ,res)
    }

  },
  'categories/:catiId/notes': {
    get: function(req, res){
      // req.body.id
      // console.log('Controller  get notes');
      // models.notes.get(function(data){
      //   res.json(data);
      // });
    },
    post:function(req, res){},
    put:function(req, res){},
    delete:function(req, res){}
   },
  'categories': {
    get:function(req, res){},
    put:function(req, res){},
    delete:function(req, res){},
    post: function(req, res){
     var newCat = {title: req.body.title,
                    description: req.body.description,
                   }

    Categories.categoryCreate(req, res, newCat)

    }

  }

}




















