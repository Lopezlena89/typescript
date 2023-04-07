(()=>{

    const fullName = (firstName:string,LastName?:string):string =>{

        return `${firstName} ${LastName || 'no lastName'}`;
    }
    
    const name = fullName('Tony');

    console.log({name});

})()