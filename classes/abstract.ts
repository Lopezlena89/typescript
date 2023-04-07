(()=>{

     abstract class Mutante{
        constructor(
            public name:string,
            public realName:string
        ){

        }
    }

    class Xmen extends Mutante{

        salvarMundo(){
            return 'Mundo a Salvo';
        }

    }
    class Villian extends Mutante{
        
        conquistarMundo(){
            return 'Mundo conquistado';
        }
    }

    const wolvering = new Xmen('Wolvering','Logan');
    const magneto = new Villian('Magneto','Magnus');

    // console.log(wolvering.salvarMundo());
    // console.log(magneto.conquistarMundo());

    const printName = (character:Mutante) =>{
        console.log(character.realName);
    }

    // printName(magneto);

})()