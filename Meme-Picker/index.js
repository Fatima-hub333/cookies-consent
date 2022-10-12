import { catsData } from "./data"

const emotionRadios = document.getElementById('emotion-radios')

const emotionsArray = []
function getEmotionsArray(cats){
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      emotionsArray.push(emotion)
    }
  }
  return emotionsArray
}

function renderEmotionsRadios(cats) {
  let radioItems = ``
  const emotions = getEmotionsArray(cats)
  for (let emotion of emotions) {
    radioItems += `<p>${emotion}</p>`
  }
  emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)