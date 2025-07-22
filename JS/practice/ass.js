// const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];
// capitalCity = [];

// for (city of cities){
//     let lower = city.toLowerCase();
//     let firstLetter = lower.slice(0,1);
//     let capital = lower.replace(firstLetter,firstLetter.toUpperCase());
//     capitalCity.push(capital);
// } console.log(capitalCity);



const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
    const cap = station.slice(0,3);
    const index = station.indexOf(';');
    const nameStation = station.slice(index+1);
    console.log(cap+`:`+` `+nameStation);
}
