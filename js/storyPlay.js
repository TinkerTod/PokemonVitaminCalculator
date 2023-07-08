/*
*	Check over the submission to make sure that 
*/
function checking() {
	$('input[type=text]').each(function(){
		maxInput++;
		if (this.value == "") {empty++;} 
	})
	if (empty == 0){
		alert("All inputs filled");
		document.getElementById("inputArea").style.display="none";
		document.getElementById("answer").style.display='block';
	}
	else{alert(empty + ' empty input(s)')}
}
/**
 *  Calculate the Vitamins and print
 * */
function appendData(){
    var Vit = 10;
    var HP = document.getElementById('HP');
    var Attack = document.getElementById('Attack');
    var Defense = document.getElementById('Defense');
    var SpAttack = document.getElementById('SpAttack');
    var SpDef = document.getElementById('SpDef');
    var Speed = document.getElementById('Speed');

    var HPVit = math.round(parseInt(HP)/parseInt(Vit);
    var AttVit = math.round(parseInt(Attack)/parseInt(Vit);
    var DefVit = math.round(parseInt(Defense)/parseInt(Vit);
    var SpAttVit = math.round(parseInt(SpAttack)/parseInt(Vit);
    var SpDefVit = math.round(parseInt(SpDef)/parseInt(Vit);
    var SpeeVit = math.round(parseInt(Speed)/parseInt(Vit);

	document.getElementById('HPVit').innerHTML = HPVit;
    document.getElementById('AttVit').innerHTML = AttVit;
    document.getElementById('DefVit').innerHTML = DefVit;
    document.getElementById('SpAttVit').innerHTML = SpAttVit;
    document.getElementById('SPDefVit').innerHTML = SpDefVit;
    document.getElementById('SpeeVit').innerHTML = SpeeVit;
}

var startBtn = document.getElementById("startBtn");
startBtn.onclick = function(){
	checking();
	appendData();
}