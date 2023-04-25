
(function weather() {
    let city = document.getElementById('city');
    city.addEventListener('keyup', (e) => {
        if(e.key === 'Enter') {
                fetch(`https://api.weatherapi.com/v1/current.json?key=58ae0c59cc6f44fa876221723232004&q=${city.value}`, {mode: 'cors'})
                .then(function(response) {
                    if(response.ok) {
                        return(response.json())
                    } else {
                        console.log(`${city.value} does not exist!`)
                    }
                }).then(function(response) {
                    console.log(response.location.country);
                    console.log(response.location.region);
                    console.log(response.location.name);
                    console.log(response.current.condition.text);
                    console.log(response.current.temp_c);
                    console.log(response.current.temp_f);
                }).finally(() => {
                    city.value = '';
                })
                
        }
    })
    }
)();

