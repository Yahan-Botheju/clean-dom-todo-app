// document.addEventListener('dblclick', (e) => {

//   const getValues = getLocalStorageValue();
//   const li = document.querySelectorAll('li');
//   if (e.target.tagName === 'LI') {

//     // const tagValue = e.target.textContent;
//     // console.log(tagValue);
//     // const objIndex = getVal.findIndex(textCon => textCon.text === tagValue )

//     const liArr = Array.from(li);
//     const listArrIndex = liArr.indexOf(e.target)

//     // console.log(listArrIndex);
//     li.forEach((items,index) => {
//       if (index === listArrIndex ) {
//         getValues[listArrIndex] = { ...getValues[listArrIndex], state: 'completeState' };
//         setLocalStorageValue(getValues);
//         e.target.classList.toggle('completeState');
//        }
//      })
//   }
// })
