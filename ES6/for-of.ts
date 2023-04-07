(()=>{

    type Avenger ={
        name:string,
        weapon:string;
    }

    const ironMan:Avenger ={
        name:'IronMan',
        weapon:'Armorsuit'    
    }

    const captainAmerica:Avenger ={
        name:'Capitan America',
        weapon:'Escudo'    
    }
    
    const thor:Avenger ={
        name:'Thor',
        weapon:'Mjolnir'    
    }

    const avengers:Avenger[] = [ironMan,captainAmerica,thor];

    for (const avenger of avengers) {
        console.log(avenger.name)
    }



})()