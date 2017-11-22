
   $(document).ready(function() {
    
              //$.getJSON pulls data from data.json
             //and turns it into an array called data.
            //with an object in each array element
    $.getJSON("./data.json", function(data) { 
            
            //topspot is an empty variable
    var topSpot = "";

            //.each is basically a for loop for the length of data[i].
            //now value within each element (key is place)
    $.each(data, function(index, value){ 

           //creates new table row saved to topSpot
        topSpot += "<tr>";

          //in value- returns value of key(name) first column. {name: returned}; adds column to topspot
        topSpot += "<td>"+ value.name + "</td>";    

          //returns value of key(description) to new column in topSpot
        topSpot += "<td>"+ value.description + "</td>";

          //value.location returns [] w/ coordinates
        var link= "https://www.google.com/maps?q=" + value.location[0] + "," + value.location[1]; 

          //pull the coordinates to finish a URL that leads to Google maps, showing the coordinates
          //using <a href=""> to create a link to that URL

        topSpot += "<td><a class=\"btn\" href=\""+link+"\">Google Maps location</a></td>"; 

            // place that link in new table column. send column to topSpot
            // close row of table in topSpot
        topSpot += "</tr>";

        console.log(topSpot);
           //finish .each function, after new table row was created for each element in data[]
           //append topSpot to table id="tableP" that exists in html
         $("#tableP").append(topSpot);
         topSpot = ''
       });
      });
   });














// function initMap(){
//     var options = {
//         zoom:8,
//         center: {lat:32.7157 , lng:-117.1611}
//     }
//     var map = newgoogle.map.map(document.getElementById("map"),options);

    // var markers = [
    //     {
    //         coords: {lat:33.0974 , lng:-116.9957 },
    //         //iconImage if i want
    //         content:"<h1>  </h1>"
    //     },
    //     {
    //         coords: {lat:32.7095  , lng:-117.1709 },
    //         //iconImage if i want
    //         content:"<h1>  </h1>"
    //     },
    //     {
    //         coords: {lat:32.7071  , lng:-117.1625 },
    //         //iconImage if i want
    //         content:"<h1>  </h1>"
    //     },
    //     {
    //         coords: {lat:32.7324  , lng:-117.2038 },
    //         //iconImage if i want
    //         content:"<h1>  </h1>"
    //     },
    //     {
    //         coords: {lat:32.7632  , lng:-117.1343 },
    //         //iconImage if i want
    //         content:"<h1>  </h1>"
    //     },
    //     {
    //         coords: {lat:32.7834  , lng:-117.2527 },
    //         //iconImage if i want
    //         content:"<h1>  </h1>"
    //     },
    //     {
    //         coords: {lat:32.8918  , lng:-117.2412 },
    //         //iconImage if i want
    //         content:"<h1>  </h1>"
    //     },
    //     {
    //         coords: {lat:32.7114  , lng:-117.1599 },
    //         //iconImage if i want
    //         content:"<h1>  </h1>"
    //     },
    //  ];

    //  //loop
    //  for(var i = 0; i < markers.length; i++){
    //      addMarker(marker[i]);
    //      function addMarker(props){
    //          var marker = newgoogle.map.marker({
    //              position:props.coords,
    //              map:map
    //          });
    //          if(props.content){
    //              var infoWindow = newgoogle.mapsInfoWindow({content:props.content
    //             });
    //             marker.addListener("mouseover",function(){
    //                 infoWindow.open(map,marker);
    //             })
//              }
//          }
//      }

//     }

