const axios = require("axios");

//se declara el controller que trae la informacion de la url. 
   
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
      const { id } = req.params;

  axios.get(`${URL}${id}`).then((response) => {
      const { id, name, species, image, gender, status } = response.data;

      res.status(200).json({
        id,
        name,
        species,
        image,
        gender,
        status
      });
    })
    .catch((error) => {
    res.status(500).json({ error: error.message });

});

}

module.exports =  getCharById;