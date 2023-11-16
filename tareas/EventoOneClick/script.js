document.getElementById("btn1").addEventListener("click",function(){
	this.value="Logout";
});

function hide(element) {
    element.remove();
};

var count1 = 13;
var countElement = document.querySelector("#element1");
function add1(){
    count1++;
    countElement.innerText = count1 + " likes";
}

var count2 = 37;
var countElement = document.querySelector("#element2");
function add2(){
    count2++;
    countElement.innerText = count2 + " likes";


}
