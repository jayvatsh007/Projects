console.log("Welcome to news Website!");
// 2b08c2651da8447689b12c9246dd4c0b
let accordian = document.getElementById('accordionnews');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=2b08c2651da8447689b12c9246dd4c0b', true);
xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = '';
        articles.forEach(function(element, index) {
            let news = ` <div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="accordion-header" id="heading${index}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
             <b>Breaking News ${index+1}: <b>${element['title']}
            </button>
                </h2>
            </div>
            <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#accordi${index}xample">
                <div class="accordion-body">
                    ${element['content']}<a href="${element['url']}" target="_blank" >Read more here</a> 
                </div>
            </div>
        </div>`
            newsHtml += news;
        });
        document.getElementById('accordionnews').innerHTML = newsHtml;
    } else {
        console.log("some error occured!");
    }
}
xhr.send();