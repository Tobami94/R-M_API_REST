const { Router }  =  require('express');

//controllers
const getCharById = require('../controllers/getCharById.js'); 
const getCharDetails = require('../controllers/getCharDetails.js');
let favs = require('../utils/favs')

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetails);

///////////////////


router.post("/rickandmorty/fav", (req, res) => {
    favs.push(req.body);
    res.status(200).json({status: "ok"});
});

router.get("/rickandmorty/fav", (req, res) => {
    res.status(200).json(favs);
});

router.delete("/rickandmorty/fav/:id", (req, res) => {
    const { id } = req.params;
    favs = favs.filter((char) => char.id != id);
    res.status(200).json({ status: "ok"});
});



module.exports = router;