import "dotenv/config.js"
import '../../config/dataBase.js'
import City from "../City.js"

let cities = [
    {
        name: "Tokyo",
        photo: "https://images.pexels.com/photos/2816904/pexels-photo-2816904.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "Japan",
        foundation: 1457,
        population: 13929286,
        language: "Japanese",
        climate: "Temperate",
        timeZone: "JST",
        currency: "JPY",
        zipCode: "100-0001"
    },
    {
        name: "Paris",
        photo: "https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "France",
        foundation: -300,
        population: 2140526,
        language: "French",
        climate: "Oceanic",
        timeZone: "CET",
        currency: "EUR",
        zipCode: "75001"
    },
    {
        name: "New York",
        photo: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "USA",
        foundation: 1624,
        population: 8419600,
        language: "English",
        climate: "Humid Subtropical",
        timeZone: "EST",
        currency: "USD",
        zipCode: "10001"
    },
    {
        name: "Sydney",
        photo: "https://images.pexels.com/photos/1619854/pexels-photo-1619854.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "Australia",
        foundation: 1788,
        population: 5312163,
        language: "English",
        climate: "Temperate",
        timeZone: "AEST",
        currency: "AUD",
        zipCode: "2000"
    },
    {
        name: "Cape Town",
        photo: "https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "South Africa",
        foundation: 1652,
        population: 433688,
        language: "Afrikaans, English, Xhosa",
        climate: "Mediterranean",
        timeZone: "SAST",
        currency: "ZAR",
        zipCode: "8001"
    },
    {
        name: "São Paulo",
        photo: "https://images.pexels.com/photos/97906/pexels-photo-97906.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "Brazil",
        foundation: 1554,
        population: 12325232,
        language: "Portuguese",
        climate: "Subtropical",
        timeZone: "BRT",
        currency: "BRL",
        zipCode: "01000-000"
    },
    {
        name: "Toronto",
        photo: "https://images.pexels.com/photos/2773226/pexels-photo-2773226.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "Canada",
        foundation: 1793,
        population: 2731571,
        language: "English, French",
        climate: "Continental",
        timeZone: "EST",
        currency: "CAD",
        zipCode: "M5H"
    },
    {
        name: "London",
        photo: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "UK",
        foundation: 43,
        population: 8982000,
        language: "English",
        climate: "Oceanic",
        timeZone: "GMT",
        currency: "GBP",
        zipCode: "EC1A"
    },
    {
        name: "Berlin",
        photo: "https://images.pexels.com/photos/109630/pexels-photo-109630.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "Germany",
        foundation: 1237,
        population: 3769495,
        language: "German",
        climate: "Oceanic",
        timeZone: "CET",
        currency: "EUR",
        zipCode: "10115"
    },
    {
        name: "New Delhi",
        photo: "https://images.pexels.com/photos/14388684/pexels-photo-14388684.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "India",
        foundation: 1911,
        population: 21800000,
        language: "Hindi, English",
        climate: "Humid Subtropical",
        timeZone: "IST",
        currency: "INR",
        zipCode: "110001"
    },
    {
        name: "Moscow",
        photo: "https://images.pexels.com/photos/92412/pexels-photo-92412.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "Russia",
        foundation: 1147,
        population: 12506468,
        language: "Russian",
        climate: "Continental",
        timeZone: "MSK",
        currency: "RUB",
        zipCode: "101000"
    },
    {
        name: "Buenos Aires",
        photo: "https://images.pexels.com/photos/22690629/pexels-photo-22690629/free-photo-of-ciudad-coches-carretera-puesta-de-sol.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "Argentina",
        foundation: 1536,
        population: 3054300,
        language: "Spanish",
        climate: "Humid Subtropical",
        timeZone: "ART",
        currency: "ARS",
        zipCode: "C1000"
    },
    {
        name: "Shanghai",
        photo: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "China",
        foundation: 1291,
        population: 24256800,
        language: "Mandarin",
        climate: "Humid Subtropical",
        timeZone: "CST",
        currency: "CNY",
        zipCode: "200000"
    },
    {
        name: "Dubai",
        photo: "https://images.pexels.com/photos/1467300/pexels-photo-1467300.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "UAE",
        foundation: 1833,
        population: 3331420,
        language: "Arabic",
        climate: "Desert",
        timeZone: "GST",
        currency: "AED",
        zipCode: "00000"
    },
    {
        name: "Mexico City",
        photo: "https://images.pexels.com/photos/3551805/pexels-photo-3551805.jpeg?auto=compress&cs=tinysrgb&w=600",
        country: "Mexico",
        foundation: 1325,
        population: 9209944,
        language: "Spanish",
        climate: "Subtropical Highland",
        timeZone: "CST",
        currency: "MXN",
        zipCode: "01000"
    }
];

City.insertMany(cities)
