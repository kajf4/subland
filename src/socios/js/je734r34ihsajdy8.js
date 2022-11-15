
function UserinpValidate(){const frm = document.getElementById('loginForm');
frm.addEventListener('submit', (e) =>{e.preventDefault();
var userinp = document.getElementById('usernameId');
var passinp = document.getElementById('password');
if(userinp.value == '')
{document.getElementsByName('username')[0].placeholder='Completa este campo';userinp.classList.add('err');}
if(passinp.value == ''){document.getElementsByName('pass')[0].placeholder='Completa este campo';
passinp.classList.add('err');}
if (userinp.value && passinp.value != '')
{

    var mod = document.getElementById('eroj');
    mod.style.visibility="visible"
    
   frm.submit();

}
})}
UserinpValidate()