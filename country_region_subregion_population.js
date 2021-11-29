var XMLHttpRequest = require('xhr2');

let url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'

var country_information = new Object();
var xhr = new XMLHttpRequest();
xhr.open('GET', url)

xhr.send();

xhr.onload = function(){

    

    if(xhr.status === 200){
        let data = JSON.parse(this.responseText)

        for(let i = 0; i < data.length; i++){
            let c_name = data[i].name;
            let c_flag = data[i].flag;
            let c_sub = data[i].subregion;
            let c_pop = data[i].population;
            
            var result = [c_name,c_flag, c_sub, c_pop];

            // result_store(result);

            country_information[c_name]= {"flag" : c_flag,
                                "sub_region":c_sub,
                                "population":c_pop};
        }

        console.log(country_information)

    }
};

/* output: ................,
           ................,
    Zambia: {
    flag: 'https://restcountries.eu/data/zmb.svg',
    sub_region: 'Eastern Africa',
    population: 15933883
  },
  Zimbabwe: {
    flag: 'https://restcountries.eu/data/zwe.svg',
    sub_region: 'Eastern Africa',
    population: 14240168
  }
  */ 


// function result_store(result){
//     let name = result[0];
//     let flag = result[1];
//     let sub = result[2];
//     let pop = result[3];

//     country_information[name]= {"flag" : flag,
//                                 "sub_region":sub,
//                                 "population":pop};
// }

