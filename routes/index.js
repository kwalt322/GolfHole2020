const express = require('express');
const mongoose = require('mongoose');

const { body, validationResult } = require('express-validator/check');

const router = express.Router();
const Registration = mongoose.model('Registration');
const GolfHole = mongoose.model('GolfHole');

router.post('/', 
    [
        body('name')
        .isLength({ min: 1 })
        .withMessage('Please enter a name'),
        body('claimed')
    ], (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const registration = new Registration(req.body);
            registration.save()
                .then(() => { res.send('Thank you for your registration!'); })
                .catch(() => { res.send('Sorry! Something went wrong.'); });
        } else {
            console.log(req.body);
            res.render("pages/index");
        }
});

router.get('/registrations', (req, res) => {
    Registration.find()
    .then((registrations) => {
        console.log(registrations);
        res.render('pages/index', { title: 'Listing registrations', registrations });
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});

module.exports = router;

