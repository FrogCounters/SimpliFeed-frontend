// const API_URl = 'http://localhost:8000'
// const FRONTEND_URL = 'http://localhost:3000'
const API_URl = 'https://simplifeed.onrender.com'
const FRONTEND_URL = 'https://simplifeed.netlify.app'

const Widget = (params = {theme: "light", type: "crypto", image: false}) => {
  window.onload = function () {
    let newsArticleHTML = ''
    fetch(API_URl)
      .then((response) => response.json())
      .then((data) => {
        for (i = 0; i < data.length; i++) {
          article = data[i]
          if (params.type === "all" || (params.type && String(article.category).toLowerCase() === String(params.type).toLowerCase())) {
            newsArticleHTML += `
            <div class="card">
                <a href="${FRONTEND_URL}/article/${article['news_id']}" target="_blank">
                    <div>
                        ${params['image'] ? `<img src="${article['image_url'] ? article['image_url'] : 'https://media.zenfs.com/en/valuepenguin_951/28473626fac94922e228d387f48725b1'}"></img>` : ''}
                        <div class="title">${article['title']}</div>
                        <div class="summary">${article['summary']}</div>
                    </div>
                </a>
            </div>`
          }
        }
      })
      .then(() => {
        document.getElementById(
          'widget'
        ).innerHTML = `<div class="simplifeed ${params.theme}">${newsArticleHTML}<button id="brand" onclick="window.open('${FRONTEND_URL}')">SimpliFeed</button></div>`
      })
  }
}
