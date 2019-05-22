//class that is modeling data

class Teammate {
    constructor(name, catchphrase) {
        this.name = name;
        this.catchphrase = catchphrase;
    }

    speak() {
        return this.catchphrase;
    }
}

const erin = new Teammate('Erin', 'I lost my coat!');
const leighAnn = new Teammate('Leigh-Ann', 'it is yoUR CIVIC DUTY');
const alex = new Teammate('Alex', 'I made a rap!');
const noah = new Teammate('Noah', 'fr-free...freeSHAvacadoos');
console.log(noah.name, ': ', noah.speak());
console.log(alex.name, ': ', alex.speak());
console.log(leighAnn.name, ': ', leighAnn.speak());
console.log(erin.name, ': ', erin.speak());

//this don't work yet
// class BrosquadTeammate extends Teammate {
//     toBro() {
//         return this.catchphrase + ', bro';
//     }
// }


