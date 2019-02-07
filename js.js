const fact = document.querySelector('#fact');
		const factTxt = document.querySelector('#factTxt');
		const numberInput = document.querySelector('#numberInput');
		const category = document.querySelector('#category');
		const catTitle = document.querySelector('#catTitle');
		const trivia = document.querySelector('#trivia');
		const date = document.querySelector('#date');
		const math = document.querySelector('#math');
		let value = '';

		numberInput.addEventListener('input', getFactAjax);
		// Btn
		const btn = document.querySelectorAll('button');
		btn.forEach(btn => {
			btn.addEventListener('click', () => {
				catTitle.innerText = `${btn.innerHTML} Fact`;
				value = btn.innerHTML.toLowerCase();
				if(value === 'trivia') {
					trivia.classList.add('active');
					date.classList.remove('active');
					math.classList.remove('active');
				}else if(value === 'math') {
					math.classList.add('active');
					trivia.classList.remove('active');
					date.classList.remove('active');
				}else if(value === 'date') {
					date.classList.add('active');
					math.classList.remove('active');
					trivia.classList.remove('active');
				}else{
					trivia.classList.remove('active');
					date.classList.remove('active');
					math.classList.remove('active');
				}
			});
		});
		// Getting the API
		function getFactAjax() {
			let number = numberInput.value;

			axios.get(`https://numbersapi.com/${number}/${value}`)
			.then(data => data.data)
			.then(data => {
				if(number !== '') {
					fact.style.display = 'block';
					factTxt.innerText = data;
				}else if(number === '') {
					fact.style.display = 'none';
				}
			})
			.catch(err => console.log(err))
		}