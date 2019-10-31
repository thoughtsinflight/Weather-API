
$("#button").on("click", function(){
    var userInput = $("#input").val();
    var queryURL =  "https://api.openweathermap.org/data/2.5/weather?appid=f955978716331750bf6a64d67d729e30&q=" + userInput;

    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            console.log(response)
        var newCard = $("#content-div");

        var card = $("<div class= 'card' stylestyle='width: 18rem;'>");
        //newCard.append(card);

        var cardBody = $("<div class='card-body'>")
        card.append(cardBody);

        var cardTitle = $("<h5 class='card-title'>");
        cardBody.append(cardTitle);

        var cardTemp = $("<li>");
        cardBody.append(cardTemp);

        var cardHum = $("<li>");
        cardBody.append(cardHum)

        var cardWind = $("<li>");
        cardBody.append(cardWind);

        newCard.append(card);
        
       
        
        var icon = "https://openweathermap.org/img/wn/"+ response.weather[0].icon+"@2x.png";
        var cardImg = $("<img>");
        
        cardImg.attr("src", icon);
        console.log(cardImg)
        cardTitle.append(cardImg);
        cardTitle.text(response.name);
        cardTemp.text("Temperature: " + Math.floor((response.main.temp - 273.15) * 9/5 + 32) + "°");
        cardHum.text("Humidity: " + response.main.humidity + "%");
        cardWind.text("Wind Speed: " + response.wind.speed + " MPH");
        console.log(response.weather[0].icon);
    })  
})