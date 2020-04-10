// Use Node-style imports for dependencies.
const axios = require("axios");
const result = require("./result.js");

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = "http://localhost:3000/pets/";

// Option functions.
const listPets = () => {
    // Fill out as part of Wave 1.
    axios
        .get(BASE_URL)
        .then((response) => {
            setResult(response.data);
        })

    .catch((error) => {
        setError(`${error.message} in list pets`);
    });
};

const showDetails = (selectedPetId) => {
    if (!selectedPetId) {
        setError("You tried to show details for a pet without selecting it!"); {}
    } else {
        axios
            .get(BASE_URL + `${selectedPetId}`)
            .then((response) => {
                setResult(response.data);
            })

        .catch((error) => {
            setError(
                `The following error ${error.message} occured in showing ${selectedPetId} details`
            );
        });
    }

    // Fill out as part of Wave 2.
};

const removePet = (selectedPetId) => {
    // Fill out as part of Wave 3.
    // had a syntax error in this wave I could fig out reference Kate M code to clear
    if (!selectedPetId) {
        setError("You tried to remove a pet without selecting it!");
    } else {
        //make get call using selected id
        axios
            .delete(BASE_URL + `${selectedPetId}`)
            .then((response) => {
                setResult(`Pet ID: ${selectedPetId} was removed.`);
            })
            .catch((error) => {
                setError(
                    `Pet ID: ${selectedPetId} was failed and being removed and caused the following error ${error.message}`
                );
            });
    }
};

const addPet = (petInfo) => {
    axios
        .post(BASE_URL, petInfo)
        .then((response) => {
            setResult(response.data);
        })
        .catch((error) => {
            setError(`${error.message}. Could not add ${petInfo.name}!`);
        });
};

// Use Node-style exports to export functions for tests and main.
module.exports = {
    listPets,
    showDetails,
    removePet,
    addPet,
};