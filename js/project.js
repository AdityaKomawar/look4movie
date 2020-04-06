function renderResponseOne(aOne, aTwo) {
  document.getElementById("demo").innerHTML = `Title:${aOne}<br />Year:${aTwo}`;
}
function renderResponseTwo(aOne, aTwo, aThree) {
  document.getElementById("demo").innerHTML = `Title:${aOne}<br />IMDB Id:${aTwo}<br />Year:${aThree}`
}
function validatorOne() {
  if(document.getElementById("inputOne").value !== ""){
  let aOne = document.getElementById("inputOne").value;
  let url = "http://www.omdbapi.com/?i=";
  let aTwo = "&apikey=a7f2aeef"
  fetch(url+aOne+aTwo).then(response => response.json()).then(jsonResponse => renderResponseOne(jsonResponse.Title, jsonResponse.Year))
  .catch(errorOne => console.console.log(errorOne))
  }
}
function validatorTwo() {
  if(document.getElementById("inputTwo").value !== ""){
  let aOne = document.getElementById("inputTwo").value;
  let url = "http://www.omdbapi.com/?s=";
  let aTwo = "&apikey=a7f2aeef";
  fetch(url+aOne+aTwo).then(response => response.json()).
  then(jsonResponse => renderResponseTwo(jsonResponse.Search[0].Title, jsonResponse.Search[0].imdbID, jsonResponse.Search[0].Year))
  .catch(errorTwo => console.log(errorTwo))
  }
}
