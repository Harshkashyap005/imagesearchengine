
const accesskey = "GRqbu1lE-f7Hdso7q-hLyb7FsKI53oOnLUUQJIo81bU"

const searchForm = document.getElementById("search_form")
const searchBox = document.getElementById("search_box")
const searchBtn = document.getElementById("search_btn")
const seachResult = document.getElementById("seach_result")
const showMoreBtn = document.getElementById("show_more_btn")


let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        seachResult.innerHTML = ""
    }

    const results = data.results

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image)

        seachResult.appendChild(imageLink)


    })

    showMoreBtn.style.display = "block"

}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})