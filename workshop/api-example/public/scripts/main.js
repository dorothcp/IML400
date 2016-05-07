console.log("...javascript {main.js} loaded...");


var SERVICE = "http://api.openweathermap.org/data/2.5/weather?zip=";

// This is the base URL for the rhymebrain api
// See this page:
// http://rhymebrain.com/api.html 
// and this example from that page:
// http://rhymebrain.com/talk?function=getRhymes&word=hello

var RHYMEBRAIN_URL = "http://api.openweathermap.org/data/2.5/weather";

var result = null;
var msg_results = "<p class='msg'> Explore the weather by typing in a zipcode in the box above. Type clear to reset.  </p>";
/**
 button handlers

 these functions get called when the buttons get clicked

*/


//Clear the results 
function onClear() {
    $("#results").empty();
    $("#results").append(msg_results);
}


//Kick off the logic to get the user's entry, format it, submit it to the API
// get the results, parse the results and display the results, phew...
function onSubmit() {
    //get the word that the user entered

 
    var query = $('#query').val();
    if (query == "zipcode") {
   		query= "90007";
    }

    console.log('zipcode: ' + query);

    //pass the user's entry to a function that will format it to submit to the server
    // the reason to do this is because of the next step where we call the
    // jQuery getJSON function.
    // See below for the explanation
    var myRequest = formatQuery(query);
	
    //submit the request to the service
    // This is a jQuery function that will make a web request to a url that returns
    // JSON data. You can read how the function works at 
    //  http://api.jquery.com/jquery.getjson/
    //
    //  Summarizing the documentation
    //  the function takes these parameters:
    //      1) URL - for us that is stored in RHYMEBRAIN_URL
    //      2) An object that has parameters and values. In our case the object will be:
    //                  { "function" : "getRhymes",
    //                    "word" : "whatever the user entered "}
    //        What jquery will do is convert this object to:
    //                  "?function=getRhymes&word=whatever the user entered"
    //        this query parameter string will be tacked onto the URL and sent to the website
    //   
    //      The data from the website will be passed to whatever function name you put into done()    
    //      If there is a problem then whatever function you put into fail will be called
	console.log("My request");
	console.log(myRequest);
	console.log("---- dash");
    $.getJSON( "http://api.openweathermap.org/data/2.5/weather", myRequest).done( onJSONSuccess ).fail( onJSONFail );
     $("#results").empty();
}


/* 
    This function uses the information from the rhymebrain api:
    http://rhymebrain.com/api.html

    Note the request parameters for the Rhyming example:
    http://rhymebrain.com/talk?function=getRhymes&word=hello

    -- you have to sepcify a query parameter 'function' and 'word'
    this function does that
*/

function formatQuery( aQueryString ) {

    //If you read the documentation for the getJSON method:
    //  http://api.jquery.com/jquery.getjson/
    //
    //  See the examples at the bottom of the page
    //  Essentially, what you have to do is construct an object that has
    //  the parameter names and values that the API service requires.
    //  What does this mean in this example?
    //
    //  Well, the rhymebrain API requires a function parameter and word
    //  parameter. 
    //
    // So what I do is create an object that has properites with the EXACT NAME
    // of the parameters that the API needs AND that has the values
    // that I want to send to the server.  In this case those values are
    // function = getRhymes
    // word = <whatever the user entered that we passed to this function
  
    var request = { "APPID": "6f8145d7e7e4ad44a34ac96940304e5f"};    

    //the encodeURIComponent function will simply substitute URL escape codes into the string
    // For instance if the user typed any spaces they will be substituted
    // with the string '%20'
    //
    // Note that this also adds the a 'word' property to our request object
    request.zip =  encodeURIComponent(aQueryString);
	
    console.log('going to make the following request:');    
    console.log(request);
    return request;
}


/*
 * this function will get called automatically 
 * if the call to the service is successful
 * the data from the service will be passed back as
 * an argument
 */
function onJSONSuccess( returnedData ) {
   
    console.log("SUCCESS!!!")
    console.log( "got: " + returnedData.name + " results back");
    
    //I just save the returned data to this variable so that I can interact with it on the console
    // whilst testing
    result = returnedData;

    // Now we just need to display the results. For that I am going to create HTML elements using jQuery
    // and attach them to the <div id='results'></div> in the html page
    // See:
    // http://www.w3schools.com/jquery/jquery_dom_add.asp    

	
        $aResult = $("<div class='rhyme " + " '><h4>" + returnedData.name + " : " + returnedData.weather[0].description+  "</h4> </div>");

        //Now add the element that we just created to the end of the result div
        $("#results").append($aResult);
    //}
    // I am going to use javascript Array functions to do this because it is easier
    // You can find the reference for those here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



//     returnedData.forEach()



    
}

function onJSONFail( error ) {
    console.log("there was a problem: " );
    console.log(error);
}



/*

var $divResult = $("<div><h3>"+ testResult.word + "</h3><span class='score'>" + testResult.score + " </span><span class='frequency'>" + testResult.freq + "</span>")

$('body').append($divResult)
*/

