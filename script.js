// проверка на число
function isNumber(num) {
	return typeof num === 'number' && !isNaN(num);
}
 // получаем форму
  let form = document.forms[0]
  // получаем коллекцию инпутов
let inputs = document.querySelectorAll('input')

form.addEventListener('submit',(event)=>{
	event.preventDefault()
	if(isNumber(+inputs[0].value) && isNumber(+inputs[1].value)){
		document.querySelector('.weather__form-block').hidden = true;
		fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${inputs[1].value}&lon=${inputs[0].value}`)
		.then(res => res.json())
		.then(res => {
			document.querySelector('.weather__info').style.visibility = 'visible';
			document.querySelector('.weather__info-country').innerHTML = `Country: ${res.sys.country}`
			document.querySelector('.weather__info-city').innerHTML = `City: ${res.name}`
			document.querySelector('.weather__info-temp').innerHTML = `Temperature: ${res.main.temp}°`
		})
		.catch(err => console.error(err))
	}
	else{
		document.querySelector('.weather__form-block').hidden = false
	}

})