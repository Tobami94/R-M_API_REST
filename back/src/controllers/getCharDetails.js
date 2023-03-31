const axios = require('axios');

//generamos el controller que nos trae los detalles

const URL = "https://rickandmortyapi.com/api/character/";


const getCharDetails = (req, res) => {
  const { id } = req.params;

axios.get(`${URL}/${id}`)
.then((response) => {

  const { id, name, species, image, gender, status, origin } = response.data;

  res.status(200).json({
    id,
    name,
    species,
    image,
    gender,
    status,
    origin
  });
})
.catch((error) => {
res.status(500).json({ error: error.message });

});

};




module.exports = getCharDetails