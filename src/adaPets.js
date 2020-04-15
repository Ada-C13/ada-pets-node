// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

// Option functions.
const listPets = () => {
  axios.get('http://localhost:3000/pets')
    .then((response) => {
      setResult(response.data);
    })
    .catch((error) => {
      setError('made up error message for wave one list pets');
  });
};

const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!"); 
  } else {
    let url = `http://localhost:3000/pets/${selectedPetId}`
    axios.get(url)  
      .then((response) => {
        setResult(response.data )
      })
      .catch((error) => {
        setError(`${error}`)
    })
  };
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
  } else {
    let url = `http://localhost:3000/pets/${selectedPetId}`
    axios.delete(url)  
      .then(response => {
        setResult('Here is a successful response');
      })
      .catch((error) => {
        setError(`Your wave 3 selected animal was not removed. Here is the error:${error}`);
      });
  };
};

const addPet = (petInfo) => {
  axios.post('http://localhost:3000/pets',petInfo)
    .then(response => {
    setResult(response.data);
    }).catch(error => {
    setError(`Adding a pet in wave 4 falied. Here is your error:${error}`);
  });   
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
