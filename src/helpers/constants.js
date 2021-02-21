export const NEW_CONTENT = "1"
export const APPLICATION = "1"
export const WEEKLY='weekly'
export const MONTHLY='monthly'

window.formatNumber = (number)=>{
    return number.toLocaleString().replace(',', ' ')
}


window.capitalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}