function ratingSet(id){
    var rating = document.getElementById('scoreRate');
    var scores = rating.getElementsByClassName('score');
    for(var i=0;i<=4;i++){
        scores[i].classList.remove('active');
    }
    for(var i=0;i<=id;i++){
        scores[i].classList.add('active');
    }
}
function closeRating(element){
    var rt = document.getElementById(element);
    rt.style.left = "100%";
}
function showRating(element){
    var rt = document.getElementById(element);
    rt.style.left = "0";
}