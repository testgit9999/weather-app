// проверка на число
function isNumber(num) {
	return typeof num === 'number' && !isNaN(num);
}
 // получаем форму
  let form = document.forms[0]
  // получаем коллекцию инпутов
let inputs = document.querySelectorAll('input')
inputs.forEach((item)=>{
	item.addEventListener('blur', (event)=>{
		if(isNumber(+event.target.value)){
			event.target.nextElementSibling.hidden = true;
		}else{
			event.target.nextElementSibling.hidden = false;	
		}
	})
})
