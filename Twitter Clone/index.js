document.addEventListener('click', function (e) {
  if (e.target.dataset.share) {
    console.log(e.target.dataset.share)
  }
  else if (e.target.dataset.heart) {
    console.log(e.target.dataset.heart)
  }
})
import { tweetsData } from './data.js'
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function(){
    console.log(tweetInput.value)
})

function getFeedHtml(){
  let feedHtml = ``
  
  tweetsData.forEach(function(tweet){
    feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                  <i class="fa-regular fa-comment-dots"></i>
                  ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                  <i class="fa-solid fa-heart"></i>
                  ${tweet.likes}
                </span>
                <span class="tweet-detail">
                  <i class="fa-solid fa-retweet"></i>
                  ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>
`
   })
   return feedHtml 
}

function render(){
  document.getElementById('feed').innerHTML = getFeedHtml()
}

render()

