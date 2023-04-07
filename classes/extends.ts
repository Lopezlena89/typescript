(()=>{

    class Avenger{
        constructor(
            public name:string,
            public realName:string
        ){
            console.log('Constructor Avenger llamado');
        }

        private getFullName(){
            return `${this.name} ${this.realName}`
        }

    }

    class Xmen extends Avenger{
        constructor(
            public isMutant:boolean,
          
        ){
            super()
        }
    }

    const wolvering = new Xmen('Wolvering','Logan');

    console.log(wolvering)
   

})()