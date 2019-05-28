// familiarizing with the air_alliances schema
db.air_alliances.findOne()
// {
//   "_id" : ObjectId("5980bef9a39d0ba3c650ae9b"),
//   "name" : "Star Alliance",
//   "airlines" : [
//           "Air Canada",
//           "Adria Airways",
//           "Avianca",
//           "Scandinavian Airlines",
//           "All Nippon Airways",
//           "Brussels Airlines",
//           "Shenzhen Airlines",
//           "Air China",
//           "Air New Zealand",
//           "Asiana Airlines",
//           "Brussels Airlines",
//           "Copa Airlines",
//           "Croatia Airlines",
//           "EgyptAir",
//           "TAP Portugal",
//           "United Airlines",
//           "Turkish Airlines",
//           "Swiss International Air Lines",
//           "Lufthansa",
//           "EVA Air",
//           "South African Airways",
//           "Singapore Airlines"
//   ]
// }

// familiarizing with the air_airlines schema
db.air_airlines.findOne()
// {
//   "_id" : ObjectId("56e9b497732b6122f879030f"),
//   "airline" : 144,
//   "name" : "Air Afrique Vacancies",
//   "alias" : "",
//   "iata" : "AFV",
//   "icao" : "AFRIQUE VACANCE",
//   "active" : "N",
//   "country" : "Ivory Coast",
//   "base" : "RTB"
// }

// performing a lookup, joining air_alliances with air_airlines and replacing
// the current airlines information with the new values
db.air_alliances.aggregate([{
  "$lookup": {
    "from": "air_airlines",
    "localField": "airlines",
    "foreignField": "name",
    "as": "airlines"
  }
}]).pretty()
