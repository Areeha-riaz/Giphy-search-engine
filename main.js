/* 1. Grab the input value */



  document.querySelector(".js-go").addEventListener('click',function(){
    var input = document.querySelector("input").value;
    //.log(input);
    searchgiphy(input);
    //pushToDOM(input);
  })
document.querySelector(".js-userinput").addEventListener('keyup',function(e){
    var input = document.querySelector("input").value;
    //console.log(input);
    // if the key ENTER is pressed...
    if(e.which===13){
      searchgiphy(input);
    //pushToDOM(input);
        }
})


/* 2. do the data stuff with the API */
function searchgiphy(input){
 var url = "https://api.giphy.com/v1/gifs/search?api_key=1pKuFq5Iacuu3DjH3PFO3yIhmNaJNDd6&limit=25&offset=0&rating=g&lang=en&q="+ input;

 // AJAX Request
 var GiphyAJAXCall = new XMLHttpRequest();
 GiphyAJAXCall.open( 'GET', url );
 GiphyAJAXCall.send();

 GiphyAJAXCall.addEventListener('load',function(e){

    var data = e.target.response;
    console.log(data);
    pushToDOM(data);
   });

}  

/* 3. Show me the GIFs */
function pushToDOM(input) {

    var response = JSON.parse(input);

  var imageURLs = response.data;
  
  
  imageURLs.forEach( function(image){

    var src=image.images.fixed_height.url;
    console.log(src);
    var container= document.querySelector(".js-container");
container.innerHTML += "<img src=\""+ src +"\"class=\"container-image\">";
;
});


}