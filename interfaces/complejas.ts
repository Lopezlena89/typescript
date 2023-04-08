(()=>{

    interface Client{
        name:string,
        age?:number,
        address:Address,
        getFullAddress(id:string):void; 
    }

    interface Address{
        id:number,
        zip: string,
        city:string
    }

    const client:Client = {
        name:'Luis',
        age:33,
        address:{
            id:125,
            zip: 'KY2 SUD',
            city:'Ottawa'
        },
        getFullAddress(id:String){
            return this.address.city;
        }
    }


    const client2:Client={
        name:'Melissa',
        age:30,
        address:{
            city:'Toronto',
            id:120,
            zip:'K2X,SJND'
        },
        getFullAddress(id:String){
            return this.address.city;
        }

    }

    

    


})()