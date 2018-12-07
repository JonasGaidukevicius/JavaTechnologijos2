//Reacto itraukimas i mano tinklalapi.
//Rasosi HTML dokumento BODY dalies gale
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    //Ir paskui savo JavaScript failiuka itraukiu
    <script type="text/babel" src="app.js"></script>


//paprastas budas nupiesti komponenta---------------------------------------------------------
//1. Apsirasau komponenta
const component = <h1>Hello, world</h1>;
//2. Nupiesiu ji su react pagalba. root cia yra div elemento id, ir butent i ta div elementa viska sudes.
//Jis jau turi buti apsirasytas html faile.
ReactDOM.render(
    component,
    document.getElementById('root')
);

//budas aprasant klasemis----------------------------------------------------------------
//1. Susikuria klase
class HelloComponent extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}
//2.tada nupisiu ji su reactu
ReactDOM.render(
    <HelloComponent name="Jane" />,
    document.getElementById('root')
);

//o dar galima ir su objektais padaryti-*--------------------------------------------------------
//1. Susikuriu klase
class AvatarComponent extends React.Component {
    render() {
        return <img className="Avatar"
            src={this.props.user.avatarUrl}
            alt={this.props.user.name}
        />;
    }
}

//2. Nupiesiu paduodamas objekta
ReactDOM.render(
    <AvatarComponent user={{
        avatarUrl: "ava.jpg",
        name: "Avatar"
    }} />,
    document.getElementById('root2')
);

//2b--------arba sukuriu objekta ir paduodu ji kaip parametra
var user1 = {
    avatarUrl: "ava.jpg",
    name: "Avatar"
};

ReactDOM.render(
    <AvatarComponent user={user1} />,
    document.getElementById('root')
);



//dar galima apsirasyti komponenta su JSX:---------------------------------------------------------
<MyButton color="blue" shadowSize={2}>Click me</MyButton>

//sukompiliavus tai atrodys taip:
React.createElement(
    MyButton,
    { color: 'blue', shadowSize: 2 },
    'Click me'
)

//Taip apsiraso, kad nurodytas komponentas laukia tam tikru atributu ir galima nurodyti, kad jie yra privalimi ir tipizuoti-------------------------------
//Cia ProductCardComponent yra komponentas (taip vadinasi klase)
//propTypes - nusakau, kad laukiu tokiu props'u:
ProductCardComponent.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};
//tik pries tai reikia pacia klase apsirasyti

//Stiliu rasymas - galima rasyti tiesiai i zyme.-----------------------------------------------------
//1. Apsirasau stiliu kintamuosius
var styles = {
    container: { background: 'red' },
    greetingText: { color: 'green' }
};
//2. Apsirasau komponenta ir nurodau, kokius stilius turi naudoti elementai
class ComponentWithStyles extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <p style={styles.greetingText}>Tekstas yra toks</p>
            </div>
        );
    }
};
//3. Nuspiesiu komponenta
ReactDOM.render(
    <ComponentWithStyles />,
    document.getElementById('root')
);

//******************************************************************************************************************* */
//------- Komponentu kurimas kaip klasiu ir importas eksportas------------------------------------------------

//1. Sukuriu klase
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Komponentas extends Component {
    render() {
        return (
            <div>
                {/* Component view */}
            </div>
        );
    }
};
export default Komponentas; //nezinau ar tinkamoje vietoje parasiau sia eilute
//is paskaitos konspekto nera aisku

Komponentas.defaultProps = { /* Properties JSON */ };
Komponentas.propTypes = { /* Properties JSON */ };

//2.Tada importuoju ja kitame JS faile, kad panaudoti ja
import Komponentas from './direktorija/failas';

//-------------------------Pabaiga------------------------------------------

//-----------------Dar galiu sukurti komponenta ir taip--- BET PRAKTIKOJE NENAUDOJAMA------------------------
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Komponentas extends Component {
    render() {
        return (React.createElement('div', null, 'React app', 'Hello, I am human'));
                                    //turi buti maziausiai 3 argumentai
                                    //1 argumentas yra kokio tipo tai yra elementas
                                    //2 argumentas yra JS objektas (konfiguracija norimo renderinti elemento). Gali buti null
                                    //toliau rasomi pagrindinio elemento vaikiniai elementai (tekstas) - ju gali buti labai daug
                                    //3 ir 4 argumentai yra elemento tekstas
                                    //taciau kaip vaikini elementa galima paduoti ir tikra kita elementa. Tada reikia parasyti funkcija React.createElement('h1', null, 'Hederio zinute')

                                    //Jeigu noriu, galiu paduoti JS objekta, kad padaryti tam tikrus nustatymus
                                    React.createElement('div', {className: 'App'}, 'React app', 'Hello, I am human');
                                    //dabar tam renderinamam elementui bus suteikta klase vardu App

    }
};
export default Komponentas;


//**************************************************************************************************************/
//REKOMENDUOJAMAS NAUDOTI BUDAS---------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Kiekviena komponenta reikia deti i atskira faila, kuris yra atskiroje direktorijoje, o visi jie yra direktorijoje SRC
//Direktorijos ir JS failo pavadinimas yra is DIDZIOSIOS raides

//Komponentas aprasomas kaip konstanta, kuri yra lygi funkcijai
const person = () => {return <p>I'm a Person</p>};
// skliausteliuose rasomi argumentai, o tarp islankstytu skliausteliu - funkcijos kodas
//Aisku, pries parasant funkcija, reiia importuoti React biblioteka.
import React from 'react';
//Nereikia rasyti import React, { Component } from 'react'; nes dabar mes komponenta kuriame ne kaip klase, o kaip funkcija. Todel importuoti Component nereikia
//O paskui riekia padaryti funkcijos eksporta:
export default person;

//Kitame JS faile, kur atlieku veiksmus, turiu si komponenta importuotis:
import Person from './Person/Person';
//Turiu rasyti is didziosios raides, nes tai bus mano sukurto komponento (elemento) pavadinimas, o is mazosios raides elementai yra rasomi HTML'e

//Kad prideti funkcijos parametrus, tai tarp skliaustu irasau props ir toje vietoje, kur kvieciu si komponenta, turiu nurodyti, kokius parametrus perduodu
//Pavyzdys komponento su gaunamais parametrais
import React from 'react';
const persona = (props) => {
    return <p>I'm a person and my name is {props.name} and my age is {props.age}</p>
};
export default persona;

//O ten, is kur kviesiu, parasau
import Persona from '.Persona/Persona';
//ir render funkcijoje
<Persona name="Jonas" age="47"></Persona>;

//O jeigu parasau:
<Persona name="Jonas" age="47">Mano tekstas</Persona>;
//Tada "Mano tekstas" irgi yra priimamas ir yra pasiekiamas per props.children
return <p>I'm a person and my name is {props.name} and my age is {props.age}. {props.children}</p>