let clicks = 0;

function countClicks() {
    clicks +=1;
    return clicks;
}

let units = document.getElementById('units');
units.addEventListener('click', () => {
    if(tempc.style.display === 'none' && tempf.style.display === 'block') {
        tempc.style.display = 'block';
        tempf.style.display = 'none';
        countClicks();
    } else if(tempf.style.display === 'none' && tempc.style.display === 'block') {
        tempc.style.display = 'none';
        tempf.style.display = 'block';
        countClicks();
    } else {
        let error = document.getElementById('error');
        error.innerText = 'Please choose a city first!'
    }
});


(function weather() {
    let city = document.getElementById('city');
    city.addEventListener('keyup', (e) => {
        let error = document.getElementById('error');
        let card = document.getElementById('card');
        if(e.key === 'Enter') {
                fetch(`https://api.weatherapi.com/v1/current.json?key=58ae0c59cc6f44fa876221723232004&q=${city.value}`, {mode: 'cors'})
                .then(function(response) {
                    if(response.ok) {
                        card.style.display = 'flex';
                        error.style.display = 'none';
                        error.innerText = ''
                        return(response.json())
                    } else {
                        error.style.display = 'block';
                        error.innerText = `${city.value} does not exist!`;
                    }
                }).then(function(response) {
                    

                    let name = document.getElementById('name');
                    name.innerText = response.location.name;
                    let region = document.getElementById('region');
                    region.innerText = response.location.region;
                    let country = document.getElementById('country');
                    country.innerText = response.location.country;

                    let pic = response.current.condition.icon;
                    let icon = document.getElementById('icon');
                    icon.src = ('https:'+pic);

                    let tempf = document.getElementById('tempf');
                    tempf.innerText = response.current.temp_f+'°F';
                    let tempc = document.getElementById('tempc');
                    tempc.innerText = response.current.temp_c+'°C';

                    if(clicks % 2 === 0 || clicks === 0) {
                        tempf.style.display = 'block';
                        tempc.style.display = 'none';
                    } else {
                        tempf.style.display = 'none';
                        tempc.style.display = 'block';
                    }
                    
                    

                    let condition = document.getElementById('condition');
                    condition.innerText = response.current.condition.text;
                }).finally(() => {
                    city.value = '';
                })
                
        }
    })
    }
)();



