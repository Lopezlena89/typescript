(()=>{

    type Avengers ={
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avenger ={
        nick: 'Samuel L. Jackson',
        ironman : 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123455
    }

    // const {poder, vision} = avenger;
    // console.log(poder.toFixed(2),vision.toUpperCase());

    const printAvenger = ({ironman, ...resto}:Avengers) =>{

        console.log(ironman,resto)
    }
    // printAvenger(avenger)

    const avengersArr:[String,boolean,number] = ['Capitan America',true,150.15];

    const [capitan,ironman,seriaUnNumero] = avengersArr;
    // console.log({capitan,ironman,seriaUnNumero});




})()