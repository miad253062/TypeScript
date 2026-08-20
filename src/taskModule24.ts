const getAgeRatingAccess = (age: number): string => {
    if(age < 7){
        return "E (Everyone)"
    }else if(age >= 7 && age <=12){
        return "E10+ (Everyone 10+)"
    }else if(age >=13 && age <= 16){
        return "T (Teen)"
    }else{
        return "M (Mature)"
    }
}


const getSignalStatus =(): string=>{
    return ''
}