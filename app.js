const serchInputFeild=document.getElementById('search-input-feild');
const cardContainer=document.getElementById('card-container');
const error=document.getElementById('error');
const totalSearchItems=document.getElementById('length');

const searchFeild=()=>{
   
    const searchInputFeildValue=serchInputFeild.value ;
    totalSearchItems.textContent="";
    if(searchInputFeildValue === ''){
        error.innerText="No result found !!!";
        totalSearchItems.style.display="none";

    }
    else{
        error.innerText='';
        totalSearchItems.style.display="block";
    }
    // clear
    cardContainer.textContent="";
   
    url=`https://openlibrary.org/search.json?q=${searchInputFeildValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => searchResult(data))
}

const searchResult=(result)=>{
    console.log(result);
    const bookKeeper=result.docs;
    totalSearchItems.innerHTML=`<h2>${bookKeeper.length} results found!</h2>`;
    console.log(bookKeeper);
    bookKeeper.forEach(keep =>{
        console.log(keep);
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${keep.cover_i}-M.jpg" class="img-fluid card-img-top" alt="...">
             <div class="card-body">
                <h3 class="card-title">${keep.title}</h3>
                <h5 class="card-text">Author : <small>${keep.author_name}</small></h5>
                <p><small>Published by : ${keep.publisher}</small></p>
                <p><small class="text-muted">First published year : ${keep?.first_publish_year}</small></p>
             </div>
                
            </div>
        `;
        cardContainer.appendChild(div);

    });
}