(function(){
  var data = [
    ["John",  "Doe",          "02.21.1994", "BackEnd Developer"],
    ["Alex",  "Riberts",      "03.18.1985", "FrontEnd Dev"],
    ["Hakop", "Baghdasaryan", "06.05.1988", "Project Manager"],
    ["Rosa",  "Simonyan",     "01.09.1987",  "Designer"]
  ];
  localStorage.setItem("data", JSON.stringify(data));
})();

var getData = function(fn) {
  var data = localStorage.getItem("data");

  fn(data);
}

var updateData = function(newData){
  localStorage.setItem("data", newData);
}
