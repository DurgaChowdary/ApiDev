const express = require('express');
const router = express.Router();

let pets = [
    { id: 1, PetType:"Dog", Petname: 'Cyrus', Age:'6', Breed: 'Lab', DateOfBirth:""  },
    { id: 2, PetType:"Dog", Petname: 'Xoro', Age:'3', Breed: 'Pug', DateOfBirth:"" },
    { id: 3, PetType:"Dog", Petname: 'Lufy', Age:'2', Breed: 'Huskey', DateOfBirth:"" } 
];

// GET all Pets
router.get('/', (req, res) => {
  res.json(pets);
});

// GET Pets by Pet ID
router.get('/:id', (req, res) => {
    const pet = pets.find(u => u.id === parseInt(req.params.id));
    if (!pet) return res.status(418).send('Pet not found');
    res.json(pet);
});

// Create Pet profile
router.post('/', (req, res) => {
    const pet = {
        id: pets.length + 1,
        petType: req.body.petType,
        petname: req.body.name,
        age: req.body.age, // Shouldn't need this if we are already collecting the DOB field. Can be calculated.
        breed: req.body.breed,
        dateOfBirth: req.body.dateOfBirth
    };
    pets.push(pet);
    res.status(201).json(pet);
});

// Update Pet Profile
router.put('/:id', (req, res) => {
    const pet = pets.find(u => u.id === parseInt(req.params.id));
    if (!pet) return res.status(404).send({'error': 'Pet not found'});
    pet.name = req.body.name;
    res.json(pet);
});

// Delete Pet Profile
router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
});


module.exports = router;