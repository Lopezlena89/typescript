(()=>{

    interface Xmen{
        name:string,
        realName:string,
        mutantPower(id:number):void,
    }
    
    interface Human{
        age:number,

    }

    class Mutant implements Xmen,Human{
        public age:number;
        public name: string;
        public realName: string;

    

        mutantPower( ) {
            return 'hola mundo'
        }


    }

    
    
    


})()