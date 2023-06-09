(()=>{

    class Avenger{
        constructor(
            public name:string,
            public realName:string
        ){
            // console.log('Constructor Avenger llamado');
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`
        }

    }

    class Xmen extends Avenger{
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean,
          
        ){
            super(name,realName)
            // console.log('Constructor Xmen llamado')
            
        }

        get fullName(){
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name:string){
            if(name.length < 3){
                throw new Error('El nombre debe ser mayor de 3 letras');
            }
            this.name= name;
        }

        getFullNameDesdeXmen(){
            console.log(super.getFullName())
        }
    }

    const wolvering = new Xmen('Wolvering','Logan',true);

    // console.log(wolvering.fullName);
    // wolvering.fullName = 'Fernando';
    // console.log(wolvering.fullName);
    // wolvering.getFullNameDesdeXmen();


})()