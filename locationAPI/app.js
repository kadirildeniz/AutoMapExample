
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
}
else (
    console.log("browser not location information")
)

function onSuccess(position) {
    let latitute = position.coords.latitude;
    let longitude = position.coords.longitude;

    const api_key = "06c6bc50bf00433fbf89ea159580582a";
    const url = "https://api.opencagedata.com/geocode/v1/json?q="+ latitute +"+"+ longitude +"&key="+ api_key;

    fetch(url)
        .then(response => response.json())
        .then(result =>
            {
                let details = result.results[0].formatted;
                document.getElementById("getAddress").addEventListener("click", addaddFunction);
                function addaddFunction() {
                    document.getElementById("inputAddress").value = details;
                }
            }
        );




}

function onError(error){
    if (error.code == 1){
        console.log("user forbidden");
    }
    else if (error.code = 2){
        console.log("location not defined");
    }
    else{
        console.log("something went wrong");
    }
}