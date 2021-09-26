import express from 'express';
import Sportist from '../models/sportist'
export class SportistController {

    getAllSportists = (req: express.Request, res: express.Response) => {
        Sportist.find({}, (err, sportists) => {
            if (err) console.log(err);
            else res.json(sportists);
        })
    }

    getSportists = (req: express.Request, res: express.Response) => {
        let name = req.body.name;
        let country = req.body.country;
        let sport = req.body.sport;
        Sportist.find({ 'name': name, 'country': country, 'sport': sport }, (err, sportists) => {
            if (err) console.log(err);
            else res.json(sportists);
        })
    }

    getSportistsByNameAndCountry = (req: express.Request, res: express.Response) => {
        let name = req.body.name;
        let country = req.body.country;
        Sportist.find({ 'name': name, 'nationality': country }, (err, sportists) => {
            if (err) console.log(err);
            else res.json(sportists);
        })
    }

    getSportistsByNameAndSport = (req: express.Request, res: express.Response) => {
        let name = req.body.name;
        let sport = req.body.sport;
        Sportist.find({ 'name': name, 'sport': sport }, (err, sportists) => {
            if (err) console.log(err);
            else res.json(sportists);
        })
    }

    getSportistsByCountryAndSport = (req: express.Request, res: express.Response) => {
        let country = req.body.country;
        let sport = req.body.sport;
        Sportist.find({ 'nationality': country, 'sport': sport }, (err, sportists) => {
            if (err) console.log(err);
            else res.json(sportists);
        })
    }

    getSportistsByName = (req: express.Request, res: express.Response) => {
        let name = req.body.name;
        Sportist.find({ 'name': name }, (err, sportists) => {
            if (err) console.log(err);
            else res.json(sportists);
        })
    }

    getSportistsByCountry = (req: express.Request, res: express.Response) => {
        let country = req.body.country;
        console.log(country);
        Sportist.find({ 'nationality': country }, (err, sportists) => {
            console.log(sportists);
            if (err) console.log(err);
            else res.json(sportists);
        })
    }

    getSportistsBySport = (req: express.Request, res: express.Response) => {
        let sport = req.body.sport;
        Sportist.find({ 'sport': sport }, (err, sportists) => {
            if (err) console.log(err);
            else res.json(sportists);
        })
    }

}
