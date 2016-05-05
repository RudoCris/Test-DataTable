var getData = function(fn) {
  var data = [
    ["John",  "Doe",          "02.21.1994", "BackEnd Developer"],
    ["Alex",  "Riberts",      "03.18.1985", "FrontEnd Dev"],
    ["Hakop", "Baghdasaryan", "06.05.1988", "Project Manager"],
    ["Rosa",  "Simonyan",     "01.09.1987",  "Designer"]
  ];

  fn(data);
}
