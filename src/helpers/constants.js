import moment from 'moment'

export const NEW_CONTENT = "1"
export const APPLICATION = "1"
export const WEEKLY='weekly'
export const MONTHLY='monthly'
export const TWITTER_API='https://uxstudioteam.com/development/fedc/twitter-data.json'

window.formatNumber = (number)=>{
    return number.toLocaleString().replace(',', ' ')
}


window.capitalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


window.formatDate = function (date) {
    // return date
    return moment(date).format('DD-MM-YYYY')
  };
  