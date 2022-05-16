let xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function() {
    //handle the response change of the http object.
    //onreadystatechange is only called be the browser if there is an observable change in the http object
    if(this.readyState == 4 && this.status == 400){
        console.log('request successful!')
    }

}

xhttp.open('GET', './data.json', true)
xhttp.send()

