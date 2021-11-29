var XMLHttpRequest = require('xhr2');

let url = 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'


var country_flag = new Object();
var xhr = new XMLHttpRequest();
xhr.open('GET', url)

xhr.send();

xhr.onload = function(){

    

    if(xhr.status === 200){
        let data = JSON.parse(this.responseText)

        for(let i = 0; i < data.length; i++){
            let cname = data[i].name;
            let cflag = data[i].flag;
            
            var result = [cname,cflag];

            result_store(result);
        }
        console.log(country_flag);
    }
};


function result_store(result){
    let name = result[0];
    let flag = result[1];

    country_flag[name]= flag;
    
}

/* output:
   ................
   ................
  Uruguay: 'https://restcountries.eu/data/ury.svg',
  Uzbekistan: 'https://restcountries.eu/data/uzb.svg',
  Vanuatu: 'https://restcountries.eu/data/vut.svg',
  'Venezuela (Bolivarian Republic of)': 'https://restcountries.eu/data/ven.svg',
  'Viet Nam': 'https://restcountries.eu/data/vnm.svg',
  'Wallis and Futuna': 'https://restcountries.eu/data/wlf.svg',
  'Western Sahara': 'https://restcountries.eu/data/esh.svg',
  Yemen: 'https://restcountries.eu/data/yem.svg',
  Zambia: 'https://restcountries.eu/data/zmb.svg',
  Zimbabwe: 'https://restcountries.eu/data/zwe.svg'
  */
