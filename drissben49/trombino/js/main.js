var con=0;
var div= document.getElementById("cards");
function getPost(){
    fetch('https://api.jsonbin.io/b/5f7eedca65b18913fc5ca0ba')
    .then((res)=>{
        return res.json();
    })
    .then((post)=>{
        for (let index = 0; index < 62; index++) {
            let imgId = post[con]["Votre photo"].split('id=')[1];
            let imgStudent = 'https://drive.google.com/thumbnail?id=' + imgId + ''; 
            div.innerHTML+= `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="` + imgStudent + `" alt="card image" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${post[con]["Votre nom"]} ${post[con]["Votre prénom"]}</h5>
                        <p class="card-text">${post[con]["Dans quel parcours êtes vous inscris ?"]} <br>Formation précédente : ${post[con]["Votre formation précédente"]}</p>
                        <a href="#" class="btn btn-primary">Github de ${post[con]["Votre prénom"]}</a>
                    </div>
            </div>
            `          
            con=con+1;
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}