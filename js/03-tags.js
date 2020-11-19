const container = document.querySelector('.js-tags');
let selectTag = new Set;

container.addEventListener('click', onContainerClick);

function onContainerClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }
    // функция выбора только одного элемента (выводит все посещенные элементы)
    // const currentActiveBtn = document.querySelector('.tags__btn--active');
    // if (currentActiveBtn) {
    //     currentActiveBtn.classList.remove('tags__btn--active');
    // }
    // selectTag.add(evt.target.dataset.value)
    // evt.target.classList.add('tags__btn--active');
    // console.log(selectTag);


    // функция выбора нескольких элементов (выводит только активные элементы)
    const isActive = evt.target.classList.contains('tags__btn--active');
    if (isActive) {
        selectTag.delete(evt.target.dataset.value);
    } else {
        selectTag.add(evt.target.dataset.value)
    };
    evt.target.classList.toggle('tags__btn--active');
    console.log(selectTag);
}