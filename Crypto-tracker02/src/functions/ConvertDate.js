export function Convertdate(num){
    const months = ["jan", "Feb", "March", "Apr", "May", "Jun", "july", "aug", "sep", "nov", "dec"]
    let myDate = new Date(num)
    return myDate.getDate() + "/"  + (myDate.getMonth() + 1)
} 