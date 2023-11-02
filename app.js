const apiKey="zIbwaULeOjdoJ_jcLtuSTfC1rBEc7m_98k5NYjHZOrE";

const formValue=document.getElementById("form");
const inputBoxValue=document.getElementById("inputBox");
const searchResultValue=document.querySelector(".searchResult");
const showMoreRes=document.getElementById("showMoreBtn"); 

let inputData="";
let page=2;

async function searchImages(){
    inputData=inputBoxValue.value;

const apiUrl=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`

const response=await fetch(apiUrl)
const data=await response.json()

const results=data.results;

if(page===1){
    searchResultValue.innerHTML=""; 
}
results.map((res)=>{
const imgWrapper = document.createElement("div")
imgWrapper.classList.add("searchImg")

const image=document.createElement("img")
 image.src=res.urls.small
 image.alt=res.alt_description

const imgLink=document.createElement("a")
imgLink.href=res.links.html
imgLink.target="_blank"
imgLink.textContent=res.alt_description


imgWrapper.appendChild(image);
imgWrapper.appendChild(imgLink);
searchResultValue.appendChild(imgWrapper);

});
 
page++
if(page>1){
    showMoreRes.style.display="block";
}
}


formValue.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;
    searchImages();
})

showMoreRes.addEventListener("click",()=>{
    searchImages();
})