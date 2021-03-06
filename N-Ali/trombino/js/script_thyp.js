var div = d3.select("body").append("div")
                            .attr("class", "tooltip-donut")
                            .style("opacity", 0);
        
            
function Specialite_thyp(data){
   
    let info = {
        "Graphiste":0,
        "Concepteur":0,
        "Développeur":0,
        "Chef de projet":0,
        "Community manager":0,
        "Rédacteur":0,
        "Ingénieur informatique":0,
        "Data analyste":0
    };
  
     for(let i = 0; i< data.length;i++){

        if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP" && data[i]['Vos spécialités'].includes("Data analyste")){
            info["Data analyste"]++
           }
       else if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP" && data[i]['Vos spécialités'].includes("Ingénieur informatique")){
            info["Ingénieur informatique"]++
        }
       else if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP" && data[i]['Vos spécialités'].includes("Concepteur")){
           info["Concepteur"]++
       }
       else if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP" && data[i]['Vos spécialités'].includes("Graphiste")){
        info["Graphiste"]++
       }
       else if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP" && data[i]['Vos spécialités'].includes("Chef de projet")){
        info["Chef de projet"]++
       }
      

           

        
       
      
    }
    console.log(info);
     var width = 450
         height = 450
         margin = 40
     var radius = Math.min(width, height) / 2 - margin
     var svg = d3.select("#specialite_thyp")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .attr("viewBox", "0 0 450 450")
     .append("g")
     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
     var color = d3.scaleOrdinal()
     .domain(info)
     .range(d3.schemeCategory10);
     var pie = d3.pie()
     .value(function(d) {return d.value; })
     var data_ready = pie(d3.entries(info))
     var arcGenerator = d3.arc()
     .innerRadius(150)
     .outerRadius(radius);
     svg
     .selectAll('mySlices')
     .data(data_ready)
     .enter()
     .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .style("opacity", 0.7)
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.85');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "%")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
 
}

function Youtube_M2_Thyp(data){
        let info = {
            "souvent":0,
            "rarement":0,
            "jamais":0,
            "je suis accro":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Quels réseaux sociaux [Youtube]']){
               
                    case "souvent":
                         info["souvent"]++;
                         break;
                     case "rarement":
                         info["rarement"]++;
                         break;
                     case "jamais":
                         info["jamais"]++;
                         break;
                     case "je suis accro":
                         info["je suis accro"]++;
                         break;
                     default:
                     break;
                }
            }
           
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#youtube_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
     
    }

    function Facebook_M2_Thyp(data){
        let info = {
            "souvent":0,
            "rarement":0,
            "jamais":0,
            "je suis accro":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Quels réseaux sociaux [Facebook]']){
               
                    case "souvent":
                         info["souvent"]++;
                         break;
                     case "rarement":
                         info["rarement"]++;
                         break;
                     case "jamais":
                         info["jamais"]++;
                         break;
                     case "je suis accro":
                         info["je suis accro"]++;
                         break;
                     default:
                     break;
                }
            }
           
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#facebook_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
     
    }

    function LinkedIn_thyp(data){
        let info = {
            "souvent":0,
            "rarement":0,
            "jamais":0,
            "je suis accro":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Quels réseaux sociaux [LinkedIn]']){
               
                    case "souvent":
                         info["souvent"]++;
                         break;
                     case "rarement":
                         info["rarement"]++;
                         break;
                     case "jamais":
                         info["jamais"]++;
                         break;
                     case "je suis accro":
                         info["je suis accro"]++;
                         break;
                     default:
                     break;
                }
            }
           
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#linkedin_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
     
    }
    function Snapchat_thyp(data){
        let info = {
            "souvent":0,
            "rarement":0,
            "jamais":0,
            "je suis accro":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Quels réseaux sociaux [snapchat]']){
               
                    case "souvent":
                         info["souvent"]++;
                         break;
                     case "rarement":
                         info["rarement"]++;
                         break;
                     case "jamais":
                         info["jamais"]++;
                         break;
                     case "je suis accro":
                         info["je suis accro"]++;
                         break;
                     default:
                     break;
                }
            }
           
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#snapchat_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
     
    }

    function Discord_thyp(data){
        let info = {
            "souvent":0,
            "rarement":0,
            "jamais":0,
            "je suis accro":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Quels réseaux sociaux [discorde]']){
               
                    case "souvent":
                         info["souvent"]++;
                         break;
                     case "rarement":
                         info["rarement"]++;
                         break;
                     case "jamais":
                         info["jamais"]++;
                         break;
                     case "je suis accro":
                         info["je suis accro"]++;
                         break;
                     default:
                     break;
                }
            }
           
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#discord_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
    }

    function Telegram_Thyp(data){
        let info = {
            "souvent":0,
            "rarement":0,
            "jamais":0,
            "je suis accro":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Quels réseaux sociaux [telegram]']){
               
                    case "souvent":
                         info["souvent"]++;
                         break;
                     case "rarement":
                         info["rarement"]++;
                         break;
                     case "jamais":
                         info["jamais"]++;
                         break;
                     case "je suis accro":
                         info["je suis accro"]++;
                         break;
                     default:
                     break;
                }
            }
           
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#telegram_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
     
    }
    function Instagram_Thyp(data){
        let info = {
            "souvent":0,
            "rarement":0,
            "jamais":0,
            "je suis accro":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Quels réseaux sociaux [instagram]']){
               
                    case "souvent":
                         info["souvent"]++;
                         break;
                     case "rarement":
                         info["rarement"]++;
                         break;
                     case "jamais":
                         info["jamais"]++;
                         break;
                     case "je suis accro":
                         info["je suis accro"]++;
                         break;
                     default:
                     break;
                }
            }
           
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#instagram_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
     
    }

    //Langues 

    function Langue_japonais_thyp(data){
        let info = {
            "je suis expert(e)":0,
            "je connais bien":0,
            "je connais un peu":0,
            "je ne connais pas du tout":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Langues [Japonais]']){
                    case "je suis expert(e)":
                            info["je suis expert(e)"]++;
                            break;
                        case "je connais bien":
                            info["je connais bien"]++;
                            break;
                        case "je connais un peu":
                            info["je connais un peu"]++;
                            break;
                        case "je ne connais pas du tout":
                            info["je ne connais pas du tout"]++;
                            break;
                        default:
                        break;
                }
            }
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#japonais_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
     
    }

    function Langue_chinois_thyp(data){
        let info = {
            "je suis expert(e)":0,
            "je connais bien":0,
            "je connais un peu":0,
            "je ne connais pas du tout":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Langues [Chinois]']){
                    case "je suis expert(e)":
                            info["je suis expert(e)"]++;
                            break;
                        case "je connais bien":
                            info["je connais bien"]++;
                            break;
                        case "je connais un peu":
                            info["je connais un peu"]++;
                            break;
                        case "je ne connais pas du tout":
                            info["je ne connais pas du tout"]++;
                            break;
                        default:
                        break;
                }
            }
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#chinois_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });

         
     
    }

    function Langue_russe_thyp(data){
        let info = {
            "je suis expert(e)":0,
            "je connais bien":0,
            "je connais un peu":0,
            "je ne connais pas du tout":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Langues [Chinois]']){
                    case "je suis expert(e)":
                            info["je suis expert(e)"]++;
                            break;
                        case "je connais bien":
                            info["je connais bien"]++;
                            break;
                        case "je connais un peu":
                            info["je connais un peu"]++;
                            break;
                        case "je ne connais pas du tout":
                            info["je ne connais pas du tout"]++;
                            break;
                        default:
                        break;
                }
            }
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#russe_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
    }
    
    function Langue_perse_thyp(data){
        let info = {
            "je suis expert(e)":0,
            "je connais bien":0,
            "je connais un peu":0,
            "je ne connais pas du tout":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Langues [Persan]']){
                    case "je suis expert(e)":
                            info["je suis expert(e)"]++;
                            break;
                        case "je connais bien":
                            info["je connais bien"]++;
                            break;
                        case "je connais un peu":
                            info["je connais un peu"]++;
                            break;
                        case "je ne connais pas du tout":
                            info["je ne connais pas du tout"]++;
                            break;
                        default:
                        break;
                }
            }
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#perse_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
    }

    function Langue_allemand_thyp(data){
        let info = {
            "je suis expert(e)":0,
            "je connais bien":0,
            "je connais un peu":0,
            "je ne connais pas du tout":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Langues [Allemenand]']){
                    case "je suis expert(e)":
                            info["je suis expert(e)"]++;
                            break;
                        case "je connais bien":
                            info["je connais bien"]++;
                            break;
                        case "je connais un peu":
                            info["je connais un peu"]++;
                            break;
                        case "je ne connais pas du tout":
                            info["je ne connais pas du tout"]++;
                            break;
                        default:
                        break;
                }
            }
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#allemand_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
    }


    function Langue_italien_thyp(data){
        let info = {
            "je suis expert(e)":0,
            "je connais bien":0,
            "je connais un peu":0,
            "je ne connais pas du tout":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Langues [Italien]']){
                    case "je suis expert(e)":
                            info["je suis expert(e)"]++;
                            break;
                        case "je connais bien":
                            info["je connais bien"]++;
                            break;
                        case "je connais un peu":
                            info["je connais un peu"]++;
                            break;
                        case "je ne connais pas du tout":
                            info["je ne connais pas du tout"]++;
                            break;
                        default:
                        break;
                }
            }
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#italien_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
    }



    function Langue_allemand_thyp(data){
        let info = {
            "je suis expert(e)":0,
            "je connais bien":0,
            "je connais un peu":0,
            "je ne connais pas du tout":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Langues [Allemenand]']){
                    case "je suis expert(e)":
                            info["je suis expert(e)"]++;
                            break;
                        case "je connais bien":
                            info["je connais bien"]++;
                            break;
                        case "je connais un peu":
                            info["je connais un peu"]++;
                            break;
                        case "je ne connais pas du tout":
                            info["je ne connais pas du tout"]++;
                            break;
                        default:
                        break;
                }
            }
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#allemand_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
    }






    function Langue_tamazirth_thyp(data){
        let info = {
            "je suis expert(e)":0,
            "je connais bien":0,
            "je connais un peu":0,
            "je ne connais pas du tout":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Langues [Tamazirth]']){
                    case "je suis expert(e)":
                            info["je suis expert(e)"]++;
                            break;
                        case "je connais bien":
                            info["je connais bien"]++;
                            break;
                        case "je connais un peu":
                            info["je connais un peu"]++;
                            break;
                        case "je ne connais pas du tout":
                            info["je ne connais pas du tout"]++;
                            break;
                        default:
                        break;
                }
            }
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#tamazirth_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
    }






    function Langue_espagnol_thyp(data){
        let info = {
            "je suis expert(e)":0,
            "je connais bien":0,
            "je connais un peu":0,
            "je ne connais pas du tout":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Langues [Espagnol]']){
                    case "je suis expert(e)":
                            info["je suis expert(e)"]++;
                            break;
                        case "je connais bien":
                            info["je connais bien"]++;
                            break;
                        case "je connais un peu":
                            info["je connais un peu"]++;
                            break;
                        case "je ne connais pas du tout":
                            info["je ne connais pas du tout"]++;
                            break;
                        default:
                        break;
                }
            }
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#espagnol_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
    }





    function Langue_anglais_thyp(data){
        let info = {
            "je suis expert(e)":0,
            "je connais bien":0,
            "je connais un peu":0,
            "je ne connais pas du tout":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Langues [Anglais]']){
                    case "je suis expert(e)":
                            info["je suis expert(e)"]++;
                            break;
                        case "je connais bien":
                            info["je connais bien"]++;
                            break;
                        case "je connais un peu":
                            info["je connais un peu"]++;
                            break;
                        case "je ne connais pas du tout":
                            info["je ne connais pas du tout"]++;
                            break;
                        default:
                        break;
                }
            }
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#anglais_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
    }





    function Langue_portugais_thyp(data){
        let info = {
            "je suis expert(e)":0,
            "je connais bien":0,
            "je connais un peu":0,
            "je ne connais pas du tout":0
        };
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Langues [Portugais]']){
                    case "je suis expert(e)":
                            info["je suis expert(e)"]++;
                            break;
                        case "je connais bien":
                            info["je connais bien"]++;
                            break;
                        case "je connais un peu":
                            info["je connais un peu"]++;
                            break;
                        case "je ne connais pas du tout":
                            info["je ne connais pas du tout"]++;
                            break;
                        default:
                        break;
                }
            }
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#portugais_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
    }

    function Langue_francais_thyp(data){
        let info = {
            "je suis expert(e)":0,
            "je connais bien":0,
            "je connais un peu":0,
            "je ne connais pas du tout":0
        };
        
        for(let i = 0; i< data.length;i++){
            if(data[i]['Dans quel parcours êtes vous inscris ?'] === "M2 THYP"){
                switch(data[i]['Langues [Français]']){
                    case "je suis expert(e)":
                            info["je suis expert(e)"]++;

                            break;
                        case "je connais bien":
                            info["je connais bien"]++;
                            break;
                        case "je connais un peu":
                            info["je connais un peu"]++;
                            break;
                        case "je ne connais pas du tout":
                            info["je ne connais pas du tout"]++;
                            break;
                        default:
                        break;
                }
            }
        }
        //console.log(info);
         var width = 450
             height = 450
             margin = 40
         var radius = Math.min(width, height) / 2 - margin
         var svg = d3.select("#francais_thyp")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .attr("viewBox", "0 0 450 450")
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
         var color = d3.scaleOrdinal()
         .domain(info)
         .range(d3.schemeCategory10);
         var pie = d3.pie()
         .value(function(d) {return d.value; })
         var data_ready = pie(d3.entries(info))
         var arcGenerator = d3.arc()
         .innerRadius(150)
         .outerRadius(radius);
         svg
         .selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){ return(color(d.data.key)) })
         .attr("stroke", "#C3D90A")
         .style("stroke-width", "9px")
         .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.35');
            div.transition()
                .duration(50)
                .style("opacity", 1);
            div.html(d.data.key + "<br />" + d.value + "/62")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
            })
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                    .duration('50')
                    .style("opacity", 0);
            });
    }
