document.body.appendChild(
	Object.assign(document.createElement('h1'), {
		className: 'heading',
		textContent: 'Add your TO-DO List 📝',
	}),
);
document.body
	.appendChild(
		Object.assign(document.createElement('div'), { className: 'container' }),
	)
	.appendChild(
		Object.assign(document.createElement('div'), {
			className: 'input-container',
		}),
	)
	.appendChild(
		Object.assign(document.createElement('input'), {
			type: 'text',
			id: 'inputItem',
			className: 'inputItem',
		}),
	)
	.parentElement.appendChild(
		Object.assign(document.createElement('button'), {
			id: 'btnAdd',
			textContent: 'Add',
		}),
	)
	.closest('.container')
	.appendChild(
		Object.assign(document.createElement('div'), {
			className: 'item-container',
		}),
	)
	.appendChild(
		Object.assign(document.createElement('ul'), { className: 'items' }),
	);

document.getElementById('btnAdd').addEventListener('click', () => {
	let listArr = [];

	const inputValue = document.getElementById('inputItem');
	const input = inputValue.value;

	if (input !== '') {
		document
			.querySelector('.items')
			.appendChild(
				Object.assign(document.createElement('li'), {
					className: 'incompleteState',
				}),
			).textContent = input;

		listArr.push({ text: input, state: 'incompleteState' });

		// const checkObj = JSON.parse(localStorage.getItem('to-do-list')) || [];
		const checkObj = getLocalStorageValue();
		checkObj.push(...listArr);

		// localStorage.setItem('to-do-list', JSON.stringify(checkObj));
		setLocalStorageValue(checkObj);
	} else {
		alert('Fields cannot be empty..!!');
	}

	inputValue.value = '';
});

document.addEventListener('contextmenu', (e) => {
	e.preventDefault();

	const getValue = getLocalStorageValue();

	if (e.target.tagName === 'LI') {
		const targetValue = e.target.textContent;

		const filterValue = getValue.filter((items) => items.text !== targetValue);
		// console.log(filterValue);
		setLocalStorageValue(filterValue);
		e.target.remove();
	}
});

let clickDelay;

document.addEventListener('dblclick', (e) => {
	if (e.target.tagName === 'LI') {
		clearTimeout(clickDelay);

		clickDelay = setTimeout(() => {
			const targetValueProgress = e.target;
			const state = 'completeState';

			setStatus(targetValueProgress, state);

			e.target.classList.toggle('completeState');
		}, 100);
	}
});

document.addEventListener('click', (e) => {
	if (e.target.tagName === 'LI') {
		clearTimeout(clickDelay);

		clickDelay = setTimeout(() => {
			const targetValueProgress = e.target;
			const state = 'progressState';

			setStatus(targetValueProgress, state);
			e.target.classList.toggle('progressState');
		}, 100);
	}
});

function setStatus(targetValue, state) {
	const getValues = getLocalStorageValue();
	const li = document.querySelectorAll('li');

	const listArr = Array.from(li);
	const listArrIndex = listArr.indexOf(targetValue);

	li.forEach((items, index) => {
		if (index === listArrIndex) {
			getValues[listArrIndex] = { ...getValues[listArrIndex], state: state };
			setLocalStorageValue(getValues);
		}
	});
}

function displayList() {
	const getValue = JSON.parse(localStorage.getItem('to-do-list')) || [];

	getValue.forEach(({ text, state }) => {
		document
			.querySelector('.items')
			.appendChild(
				Object.assign(document.createElement('li'), { className: state }),
			).textContent = text;
	});
}

function setLocalStorageValue(listValue) {
	localStorage.setItem('to-do-list', JSON.stringify(listValue)) || [];
}

function getLocalStorageValue() {
	return JSON.parse(localStorage.getItem('to-do-list')) || [];
}

displayList();
