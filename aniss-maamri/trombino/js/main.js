var con=0;
var div= document.getElementById("cards");
var f2= document.getElementById("filter2");
var filter= document.getElementById("filter1").value;


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
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src="` + imgStudent + `" alt="card image"></p>
                                    <h4 class="card-title">${post[con]["Votre nom"]} ${post[con]["Votre prénom"]}</h4>
                                    <p class="card-text">Filière : ${post[con]["Dans quel parcours êtes vous inscris ?"]} <br>Formation précédente : ${post[con]["Votre formation précédente"]}</p>                                                                   
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">n° étudiant : ${post[con]["N° étudiant"]}</h4>
                                    <p class="card-text"><bt>Mail : ${post[con]["Votre mail"]}<br> Github : ${post[con]["Votre compte GitHub"]}</p>                                   
                                </div>
                            </div>
                        </div>
                    </div>
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
function modal() {

}


function getFilter(){
    if (filter.value == "") {
        f2.innerHTML+= `
                
            `
    }
    if (filter.value == "Par filière" ) {
        f2.innerHTML+= `
            <option>M1 CEN</option>
            <option>M1 GSI</option>
            <option>M1 NET</option>
            <option>M2 THYP</option>
            `
    }
    else if (filter.value == "Par besoin") {

    }
    else if (filter.value == "Par compétence") {

    }
}