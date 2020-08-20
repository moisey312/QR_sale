var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
console.log("url", url_string);
var sale = url.searchParams.get("text");
console.log("param", sale);
document.getElementById("sale_text").innerText = " " + sale;

var address = url.searchParams.get("address");
document.getElementById("sale_address").innerText = " " +address;
