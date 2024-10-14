
// document.querySelector('#subButton') получила элемент, который хочу использовать, то есть кнопку. Можно указать класс кнопки, тогда вначале , как и в цсс ставлю точку, а можно и через айди, но тогда вначале ставлю решетку

// .onclick = myClick; далее пишу событие типа ОНКЛИК и имя майКлик, имя может быть любое

// function myClick() { console.log (''); }  далее пишу функцию она чем-то по стилю похожа на цсс - внутри фигурной скобки пишу что она делает

// document.querySelector('#subButton').onclick = myBtnClick;
// document.querySelector('#subButton').addEventListener('click', myBtnClick); и тот и тот пример правильный, используй любой

document.querySelector('#subButton').addEventListener('click', myBtnClick);

function myBtnClick() {
    // console.log ('work'); это пример
    // get input далее получаем данные с инпута
    // в интупах свойство велью value отвечает за текст введенный пользователем в строке
    let a = document.querySelector('.input').value;
    // в консоль выводим переменную а
    console.log(a);
}