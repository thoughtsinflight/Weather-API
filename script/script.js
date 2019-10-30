
$("#button").on("click", function(){
    var userInput = $("#input").val();
    var queryURL =  "https://api.openweathermap.org/data/2.5/weather?appid=f955978716331750bf6a64d67d729e30&q=" + userInput;

    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

        var newCard = $("#content-div");

        var card = $("<div class= 'card' stylestyle='width: 18rem;'>");
        newCard.append(card);

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
        
        var cardImg = $("<img>");
        cardTitle.append(cardImg);
        
        var icon = response.weather.icon;
        cardImg.attr("src", "http://openweathermap.org/img/wn/"+"icon"+"@2x.png")
        cardTitle.text(response.name);
        cardTemp.text("Temperature: " + Math.floor((response.main.temp - 273.15) * 9/5 + 32) + "°");
        cardHum.text("Humidity: " + response.main.humidity + "%");
        cardWind.text("Wind Speed: " + response.wind.speed + " MPH");
        console.log(response.weather.icon);
    })  
})