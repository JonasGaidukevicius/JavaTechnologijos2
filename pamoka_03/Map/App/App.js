var people = [{
    name: 'Antanas Atanaitis',
    drives: 'Car',
    team: 'Studentai'
}, {
    name: 'Petras Petraitis',
    drives: 'Truck',
    team: 'Moksleiviai'
}, {
    name: 'Vilkas Vilkaitis',
    drives: 'Formula 1',
    team: 'Studentai'
}, {
    name: 'Vilija Vilimaitė',
    drives: 'Car',
    team: 'Moksleiviai'
}];
//-------------------MAP funkcija------------------------------
//su MAP funkcija as galiu is objektu masyvo (ar listo) istraukti mano norimo lauko reiksmes ir sudeti jas i kita masyva

//cia variantas su ARROW funkcija -------------------------------33333333333333333333333333333
//1. 
var automobiles3 = people.map(pupil => pupil.drives);
//2.
console.log(automobiles3);

//1. Naujam kintamajam priskiriu reiksme, kuri lygi funkcijai.
//Ta funkcija apsirasdau cia pat vietoje, bet su '=>'. Cia reiskia, koks priimto parametro pavadinimas, o paskui, ka su juo padaryti, siuo atveju isrinti objekto 'drives' lauka ir ji grazinti

//BENDRA UZRASYMO FORMA---------------!!!!!!!!!!!
var kintamasis = originalusMasyvas.map(dabartineReiksme, indeksas, originalusMasyvas => dabartineReiksme * 2);


//cia vadinamas variantas su bevarde funkcija ---------------------------222222222222222222222222222222222
//1.
var automobiles2 = people.map(function (pupil) {
    return pupil.drives;
});
//2.
console.log(automobiles2);

//1. Naujam kintamajam priskiriu reiksme, kuri lygi funkcijai.
//paimu masyva, tada su juo kvieciu metoda MAP, kuriam paduodu becarde funkcija, kuria cia pat vietoje ir aprasau
//2. Atspausdinu
//--------------------------------------------------------------------------

//kitoks budas, bet lyg ir blogesnis ------------------------------------ 11111111111111111111111111111111111111
//1.
function getDrives(pupil) {
    return pupil.team;
}
//2.
var automobiles1 = people.map(getDrives);
//3.
console.log(automobiles1);

//1. Apsirasau funkcija, i kuria bus paduodamas objektu masyvas
//ir grazina ji nauja masyva, bet isrenka tik drivers lauka is pateikto objektu masyvo
//2. naujam kintamajam priskiriu reiksme, kuri lygi paduodamas masyvas FUNKCIJA MAP ir tada kviesiu funkcija.
//3. Atsispaudinu

//--------------------------------------------------------------------------




//--------------------------------------------------------------------------