const filename = "dummy.md"
const filenumber = "93"
const domain = "127.0.0.1"
const port = "6789"


const htmlurl = "https://" + domain + ":" + port + "/home:/" + filename
const texturl = "http://" + domain + ":" + port + "/--original/home/" + filename
const editurl = "http://"  + domain + ":" + port +  "/home:" + filenumber + "?--edit"
//http://localhost:6789/home:93?--edit
//http://localhost:6789/--original/home/dummy.md
//http://localhost:6789/home:93
//RESTer extension


const contentTypeHeader = "Content-Type: application/x-www-form-urlencoded"
const currentContent = "httpCONTENTS%0D%0"
const appendContent = "ANEWLINESENTFROMCURL"
const content = "content=" + currentContent + appendContent
const body = content;

//use RESTer extension to help craft rest requests
//x-www-form-urlencoded is for text/ascii data (thus need the %2 characters), use form-data for non-ascii text
//content type doesnt have to be the the x-www-form-urlencoded and multipart-form but theyre just the most popular
//?XMLHttpRequest vs fetch (no cors)  https://stackoverflow.com/questions/35549547/fetch-api-vs-xmlhttprequest 

//Order of Operation is to get the original content with a GET, concatenate that with the new data, then POST that to url

async function getContents(url){
  var req = new Request(url, {
    method: 'GET',
    // mode: 'cors',
    // redirect: 'follow',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
  });

  const response = await fetch(req);
  const text = await response.formData()

  console.log(text)

  return bodyContents;
}

var details = {
    'userName': 'test@gmail.com',
    'password': 'Password!',
    'grant_type': 'password'
};

var formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

fetch('https://example.com/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: formBody
})

//or

fetch('https://example.com/login', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
        'userName': 'test@gmail.com',
        'password': 'Password!',
        'grant_type': 'password'
    })
});

//or

const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

//or


var req = new Request('https://api.acme.com/users.json', {
    method: 'post',
    mode: 'cors',
    redirect: 'follow',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: 'content=bar&lorem=ipsum'
  });
// Use request as first parameter to fetch method
fetch(req)
    .then(function() { /* handle response */ });
