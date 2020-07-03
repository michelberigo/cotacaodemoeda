function setup() {
    loadJSON("https://api.coindesk.com/v1/bpi/currentprice.json", gotData);
}
  
function gotData(data) {
    $('#USD').text("USD " + data.bpi.USD.rate);
    $('#GBP').text("GBP " + data.bpi.GBP.rate);
    $('#EUR').text("EUR " + data.bpi.EUR.rate);
}