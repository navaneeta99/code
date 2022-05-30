//input is two different jsons to be compared with eachother

let json1 = {
    "name": "Tom Cruise",
    "age": 56,
    "placeOfBirth": "Syracuse, NY",
    "birthdate": "July 3, 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg",
    "wife": null,
    "weight": 67.5,
    "hasChildren": true,
    "hasGreyHair": false,
    "children": [
        "Suri",
        "Isabella Jane",
        "Connor"
    ]
};
let json2 = {
    "name": "Tom Cruise",
    "age": 58,
    "placeOfBirth": "Syracuse, NY",
    "birthdate": "July 4, 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg",
    "wife": null,
    "weight": 67.5,
    "hasChildren": true,
    "hasGreyHair": false,
    "children": [
        "Suri",
        "Isabella Jane",
        "Connor"
    ]
}

if (json1.name != json2.name) {
    console.log("name is not the same")
}

if (json1.age != json2.age) {
    console.log("%c age is not the same","color: red");
}/*else{
    console.log("%c age is not the same","color: red")
}*/

if (json1.placeOfBirth != json2.placeOfBirth) {
    console.log("Place of birth not is the same")
}/*else{
    console.log("Place of birth is not the same")
}*/

if (json1.wife != json2.wife) {
    console.log("wife")
}

if (json1.weight != json2.weight) {
    console.log("Weight is not the same")
}

if (json1.wife != json2.wife) {
    console.log("wife")
}

if (json1.wife != json2.wife) {
    console.log("wife")
}