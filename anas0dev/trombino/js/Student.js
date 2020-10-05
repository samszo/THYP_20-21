"use strict";

class Student{
    //merci à Monsieur Samuel Szoniecky  https://github.com/samszo/AccueilHN_20-21/blob/master/index.html
    // avec des petite correction
    vals = {"Pas besoin":1, "Besoin d'approfondissement":5, "Besoin urgent":10, "je ne connais pas du tout":1,"je connais un peu":5,"je connais bien":10,"je suis expert(e)":20
        ,"Oui":1,"Non":1
        ,"jamais":1,"rarement":2,"souvent":5,"je suis accro":10
        ,"Dans quel parcours êtes vous inscris ?":"Parcours"
        ,"Avez-vous un ordinateur personnel pour suivre les cours ?":"Ordinateur"
        ,"Votre connexion internet personnelle est :":"Connexion"        
        ,"Votre compte GitHub":"Compte"
        ,"Votre compte Diigo":"Compte"
        ,"Votre compte Zotero":"Compte"
        ,"Vos spécialités":"Spécialités"
        ,"Vos objectifs professionnels":"Objectifs"
        ,"Votre formation précédente":"Formation"
        ,"Quelles sont besoins ?":"Besoins"        
        ,"Quelles sont vos compétences ?":"Compétences"        
        ,"Quelles outils utilisez vous ?":"Outils"        
        ,"Langages":"Langages"
        ,"Langues":"Langues"
        ,"CMS":"CMS"
        ,"Quels réseaux sociaux":"Réseaux sociaux"
        }

    id;
    details;
    facet;

    constructor(etud, id){
        this.id = id;
        this.details = {};

        for(let i in etud){

            if(i.indexOf("[") > 0){
                let quest = this.vals[i.substring(0, i.indexOf("[")-1)];
                let prop = i.substring(i.indexOf("[")+1,i.indexOf("]"));
                let v = etud[i];
                let n = this.vals[v];

                if(!this.details[quest])
                    this.details[quest] = new Map();
                
                // if(!n)
                //     n = this.vals[v.substring(0, v.indexOf(",")-1)];
                
                this.details[quest].set(prop, {v, n});

            }else if(this.vals[i] != undefined){
                if(this.vals[i] == "Compte"){
                    if(!(this.details[this.vals[i]]))
                        this.details[this.vals[i]] = new Map();
                    let compte = i.substring(i.indexOf("compte") + 7, i.length);
                    this.details[this.vals[i]].set(compte, etud[i]);
                }else{
                    this.details[this.vals[i]] = etud[i];
                }
            }else{
                this.details[i] = etud[i];
            }

            // let quest = i.indexOf("[") > 0 ? this.vals[i.substring(0, i.indexOf("[")-1)] : this.vals[i];// (this.vals[i]!=undefined)? console.log(i, "-", etud[i], "-", this.vals[i]):false; 
            // let prop = i.substring(i.indexOf("[")+1,i.indexOf("]")); 
            // let v = etud[i];
            // let n = this.vals[v];
        }
    }

    

}