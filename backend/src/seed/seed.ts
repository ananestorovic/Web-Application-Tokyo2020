import mongoose from 'mongoose';
import Sport from '../models/sport';
import sportsExample from './sports_seed';
import sportistsExample from './sportists_seed';
import Sportist from '../models/sportist';
import Country from '../models/country';
import countriesExample from './countries_seed';
import Discipline from '../models/discipline';
import disciplinesExample from './disciplines_seed';
import usersExample from './users_seed';
import User from '../models/user';
import medalsExample from './medal_seed';
import Medal from '../models/medal';
import venuesExample from './venues_seed';
import Venue from '../models/venue';
import delegateExamples from './delegates_seed';
import Delegate from '../models/delegate';

export async function dropDataBase(connection: mongoose.Connection) {
    await connection.db.dropDatabase();
}



async function seedSports() {
    for (let index = 0; index < sportsExample.length; index++) {
        const element = sportsExample[index];
        await new Sport(element).save();
    }
}

async function seedSportists() {
    for (let index = 0; index < sportistsExample.length; index++) {
        const element = sportistsExample[index];
        await new Sportist(element).save();
    }
}


async function seedCountries() {
    for (let index = 0; index < countriesExample.length; index++) {
        const element = countriesExample[index];
        await new Country(element).save();
    }
}

async function seedDiscipline() {
    for (let index = 0; index < disciplinesExample.length; index++) {
        const element = disciplinesExample[index];
        await new Discipline(element).save();
    }
}

async function seedUsers() {

    try {
        for (let index = 0; index < usersExample.length; index++) {
            const element = usersExample[index];
            await new User(element).save();
        }
    } catch (error) {
        console.log(error);

    }
}


async function seedMedals() {
    for (let index = 0; index < medalsExample.length; index++) {
        const element = medalsExample[index];
        await new Medal(element).save();
    }
}

async function seedVenues() {
    for (let index = 0; index < venuesExample.length; index++) {
        const element = venuesExample[index];
        await new Venue(element).save();
    }
}

async function seedDelegates() {
    for (let index = 0; index < delegateExamples.length; index++) {
        const element = delegateExamples[index];
        await new Delegate(element).save();
    }
}


export async function seedDataBase(connection: mongoose.Connection) {

    await seedSports();
    await seedDiscipline();
    await seedSportists();
    await seedCountries();
    await seedUsers();
    await seedMedals();
    await seedVenues();

}


