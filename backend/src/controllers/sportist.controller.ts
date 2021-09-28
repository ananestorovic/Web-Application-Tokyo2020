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

    async getSportistsBySearch(req: express.Request, res: express.Response) {
        try {
            let obj: any = req.body;
            console.log(obj);

            let arrrayFound = []
            if (obj.searchByName) {
                arrrayFound.push({ 'name': obj.name });
            }
            if (obj.searchByCountry) {
                arrrayFound.push({ 'nationality': obj.country });
            }
            if (obj.searchBySport) {
                arrrayFound.push({ 'sport': obj.sport });
            }
            if (obj.searchByDiscipline) {
                arrrayFound.push({ 'discipline': obj.dicsipline });
            }
            if (obj.searchByGender) {
                arrrayFound.push({ 'sex': obj.gender });
            }
            if (obj.searchOnlyWithMedals) {
                arrrayFound.push({ 'medalCount': { $gt: 0 } });
            }
            let foundCondObj = {}
            if (arrrayFound.length != 0) foundCondObj = { $and: arrrayFound }

            console.log(foundCondObj);
            let foundSportist = await Sportist.find(foundCondObj).exec();
            console.log(foundSportist);
            res.status(200).json(foundSportist);

        } catch (err) {
            console.log(err);
            res.status(400).json({ 'message': err });
        }
    }


    getSportistByName = (req: express.Request, res: express.Response) => {
        let name = req.body.name;
        Sportist.findOne({ 'name': name }, (err, sportists) => {
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

    updateMedalCount = (req: express.Request, res: express.Response) => {
        let name = req.body.name;
        console.log(req.body.name);
        Sportist.collection.updateOne({ 'name': name }, { $inc: { 'medalCount': 1 } });
        res.json({ 'message': 'medal count increment' });
    }

}
