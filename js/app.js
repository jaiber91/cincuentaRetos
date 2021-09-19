document.addEventListener("DOMContentLoaded", callData);

function callData() {
    const url = 'js/data.json'
    fetch(url)
        .then(response => response.json())
        .then(result => watchResult(result))
}

function watchResult(projects) {
    const allData = document.querySelector('.home__gallery')
    let html = ''

    projects.forEach(project => {
        const {name, demo, repo, img} = project;

        html +=`
        <div class="home__gallery--card">
                <img src=${img} alt="img de proyecto">
                <div class="home__gallery--shadow">
                    <h3>${name}</h3>
                    <div class="home__gallery--buttom">
                        <a href=${repo} target="_blank">Github</a>
                        <a href=${demo} target="_blank">Demo</a>
                    </div>

                </div>
         </div>
        
        `
    });
    allData.innerHTML = html; 
}