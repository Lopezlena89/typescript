"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
        bio() {
            return `${this.name} (${this.team})!!!`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('AntMan', 'Capitan', 'Scott Lang');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(isMutant) {
            super();
            this.isMutant = isMutant;
        }
    }
    const wolvering = new Xmen('Wolvering', 'Logan');
    console.log(wolvering);
})();
//# sourceMappingURL=main.js.map