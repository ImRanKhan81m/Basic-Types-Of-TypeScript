const searchName = (value: string | null)=>{
    if(value === null){
        console.log('There is nothing to search');
    }else{
        console.log(`Searching for ${value}`);
    }
}

searchName(null);

const getMyCarSpeed = (speed: unknown)=>{
    if(typeof speed === 'number'){
        const convertedSpeed = (speed * 1000)/3600
        console.log(`My car speed is ${convertedSpeed}`);
    }
    if(typeof speed === 'string'){
        const [value, unit] = speed.split(" ")

        const convertedSpeed = (parseFloat(value) * 1000)/3600
        console.log(`My car speed is ${convertedSpeed}`);
    }
    else{
        console.log('My car speed is unknown');
    }
}

getMyCarSpeed(100);
getMyCarSpeed('100 kmh');
getMyCarSpeed(true);





function throwError(message: string): never{
    throw new Error(message);
}


throwError('This is an error');