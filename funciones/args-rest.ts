(()=>{

    const fullName=(FirstName:string, ...restArgs:string[])=>{
        return  `${FirstName} ${restArgs.join(' ')}`
    }

    const superman = fullName('Clark','Joseph','Herrera')

    console.log(superman)


})()