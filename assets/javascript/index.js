function setup() {
  loadJSON("https://api.coindesk.com/v1/bpi/currentprice.json", gotData);
}

function gotData(data){
  document.getElementById('USD').innerHTML = "USD " + data.bpi.USD.rate;
  document.getElementById('GBP').innerHTML = "GBP " + data.bpi.GBP.rate;
  document.getElementById('EUR').innerHTML = "EUR " + data.bpi.EUR.rate;
}
