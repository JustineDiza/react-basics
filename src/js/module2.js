var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Lyndell",
  "last_name": "Spatari",
  "email": "lspatari0@nsw.gov.au",
  "gender": "Female"
}, {
  "id": 2,
  "first_name": "Cherey",
  "last_name": "Spearett",
  "email": "cspearett1@census.gov",
  "gender": "Female"
}, {
  "id": 3,
  "first_name": "Helge",
  "last_name": "Linney",
  "email": "hlinney2@nsw.gov.au",
  "gender": "Female"
}, {
  "id": 4,
  "first_name": "Ulrikaumeko",
  "last_name": "Capey",
  "email": "ucapey3@go.com",
  "gender": "Female"
}, {
  "id": 5,
  "first_name": "Hy",
  "last_name": "Clapston",
  "email": "hclapston4@is.gd",
  "gender": "Male"
}, {
  "id": 6,
  "first_name": "Allina",
  "last_name": "McIlwrick",
  "email": "amcilwrick5@cafepress.com",
  "gender": "Female"
}, {
  "id": 7,
  "first_name": "Daren",
  "last_name": "Roobottom",
  "email": "droobottom6@bizjournals.com",
  "gender": "Male"
}, {
  "id": 8,
  "first_name": "Ashlen",
  "last_name": "Carmo",
  "email": "acarmo7@elpais.com",
  "gender": "Female"
}, {
  "id": 9,
  "first_name": "Rheba",
  "last_name": "Sobey",
  "email": "rsobey8@nasa.gov",
  "gender": "Female"
}, {
  "id": 10,
  "first_name": "Coreen",
  "last_name": "Sevitt",
  "email": "csevitt9@tamu.edu",
  "gender": "Female"
}];

var femaleCount = _.filter(people, {gender:"Female"}).length;
alert(femaleCount + ' number of females!');
