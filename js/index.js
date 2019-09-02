


var links = document.getElementsByClassName("nav-link");
var searchInp = document.getElementById("searchInp");
var news ;
var term;
var category = 'general';
var country = 'us';

getNews();


searchInp.addEventListener("blur" , function(){

    term  = searchInp.value;

    globalSearch();
})

for(var i=0 ; i <links.length ; i++)
    {
        links[i].addEventListener("click" , function(e){
            category = e.target.innerHTML;
            getNews();
        })
    }






function getNews()
{

    var req ; // IE5 , IE6 

    if(window.XMLHttpRequest) // modern browsers 
        {
                req = new XMLHttpRequest();
        }
    else // IE5 ,IE6
        {
               req = new ActiveXObject("Microsoft.XMLHTTP") 
        }    

    var url =`https://newsapi.org/v2/top-headlines?country=`+country+`&category=`+category+`&apiKey=d34d49ce3a794aca80d1ae821239b0eb`
    req.open("GET",url )

    req.onreadystatechange =function()
    {
        if(req.status == 200 &&  req.readyState == 4)
            {

            news =  JSON.parse (req.response );
            news = news.articles;
            displayNews();
            }
    }

    req.send();

}
function displayNews()
{
    var temp = "";
    for(var i=0 ; i < news.length ; i++)
    {

        temp +=` <div class="col-md-3">
        <div class="new">
        <img src="`+news[i].urlToImage+`" class="img-fluid"/>
                <h5>`+news[i].title+`</h5>
                <p class="text-muted">`+news[i].description+`</p>
        </div>
    </div>`
    }
    document.getElementById("newsRow").innerHTML = temp;   
}

function globalSearch()
{
  
  
    var req ; // IE5 , IE6 

    if(window.XMLHttpRequest) // modern browsers 
        {
                req = new XMLHttpRequest();
        }
    else // IE5 ,IE6
        {
               req = new ActiveXObject("Microsoft.XMLHTTP") 
        }    

    var url =`https://newsapi.org/v2/everything?q=`+term+`&from=2019-07-19&sortBy=publishedAt&apiKey=d34d49ce3a794aca80d1ae821239b0eb`
    req.open("GET",url )

    req.onreadystatechange =function()
    {
        if(req.status == 200 &&  req.readyState == 4)
            {

            news =  JSON.parse (req.response );
            news = news.articles;
            displayNews();
            }
    }

    req.send();


}



