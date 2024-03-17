var numberOfDivs = 4;
var container = document.getElementById('Two');
for (var i = 0; i < numberOfDivs; i++) {
    var newDiv = document.createElement('div');
    newDiv.classList.add('card', 'text-start');
    newDiv.id = 'day' + (i + 2);
    newDiv.innerHTML = document.getElementById('day1').innerHTML;
    container.appendChild(newDiv);
}

function fetchData() {
    let cityName = $("#cityInput").val();
    let apiKey = "19b9f702004024fc3c8f76b4067e9ede";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("City not found. Enter a valid city name.");
            }
            return response.json();
        })
        .then((data) => {
            $(".container").css("display", "none");
            $("section .one").css("display", "block flex");
            $("section .two").css("display", "block flex");
            for (let i = 0; i < 5; i++) {
                let sum = 0;
                let sum2 = 0;
                let humidity = 0;
                let min = 400;
                let max = 0;
                for (let j = 0; j < 8; j++) {
                    let index = i * 8 + j;
                    if (min > data.list[index].main.temp) {
                        min = data.list[index].main.temp;
                    }
                    if (max < data.list[index].main.temp) {
                        max = data.list[index].main.temp;
                    }
                    sum += data.list[index].main.temp;
                    sum2 += data.list[index].main.feels_like;
                    humidity += data.list[index].main.humidity;
                    if (j == 0) {
                        $(`#day${i + 1} .weather`).text(data.list[index].weather[0].main);
                    }
                }
                sum = parseInt(sum / 8 - 273.15);
                sum2 = parseInt(sum2 / 8 - 273.15);
                humidity = parseInt(humidity / 8);
                $(`#day${i + 1} .card-text`).html(`${sum.toFixed(0)}&#176C`);
                let date = new Date();
                let day = parseInt(date.getDate());
                $(`#day${i + 1} .card-title`).text(`${day + i} March 2024`);
                $(`#day${i + 1} .feels`).html(`${sum2.toFixed(0)}&#176`);
                $(`#day${i + 1} .humidity`).html(`${humidity.toFixed(0)}%`);
                let typed = $("#cityInput").val();
                $(`#day${i + 1} .loc`).text(`${typed}, ${data.city.country}`);
                $(`#day${i + 1} .min-max p:first-child`).html(`${(min - 273.15).toFixed(0)}&#176C`);
                $(`#day${i + 1} .min-max p:last-child`).html(`${(max - 273.15).toFixed(0)}&#176C`);
            }
        })
        .catch((error) => {
            alert(error.message);
        });
}

function back() {
    $(".one").css("display", "none");
    $(".two").css("display", "none");
    $(".container").show();
    let input = $("#cityInput");
    input.val("");
}
