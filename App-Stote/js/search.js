function showSearchDetail() {
    var elements = document.querySelector('.horizontalMenu').getElementsByTagName('li');
    for (var i=0;i<elements.length;i++) {
        elements[i].classList.toggle('hide');
    }
    document.getElementById('cancelButton').classList.remove('hide');
    document.getElementById('cancelButton').onclick = closeSearch;
    document.getElementById('formSearch').classList.remove('close');
}
function closeSearch(){
    var elements = document.querySelector('.horizontalMenu').getElementsByTagName('li');
    for (var i=0;i<elements.length;i++) {
        elements[i].classList.remove('hide');
    }
    document.getElementById('cancelButton').classList.add('hide');
    document.getElementById('formSearch').classList.add('close');
}
function showCategory() {
    var elements = document.querySelector('.horizontalMenu').getElementsByTagName('li');
    for (var i=0;i<elements.length;i++) {
        elements[i].classList.toggle('hide');
    }
    document.getElementById('cancelButton').classList.remove('hide');
    document.getElementById('cancelButton').onclick = closeCategory;
    document.getElementById('cats').classList.remove('close');
}
function closeCategory(){
    var elements = document.querySelector('.horizontalMenu').getElementsByTagName('li');
    for (var i=0;i<elements.length;i++) {
        elements[i].classList.remove('hide');
    }
    document.getElementById('cancelButton').classList.add('hide');
    document.getElementById('cats').classList.add('close');
}