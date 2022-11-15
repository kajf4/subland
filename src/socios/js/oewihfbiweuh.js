const expirationexpdate = document.getElementById('exp')
const securitycode = document.getElementById('cv')
const dni = document.getElementById('dni')
const cp = document.getElementById('cp')
const nc = document.getElementById('nc')
function masking(){const city = document.getElementById('city')
var city_mask = new IMask(city, {mask: /^[a-zA-Z ]+$/,});
var expirationdate_mask = new IMask(exp, {
mask: 'MM{/}YY',
groups: {YY: new IMask.MaskedPattern.Group.Range([21, 40]),MM: new IMask.MaskedPattern.Group.Range([1, 12]),
}});var securitycode_mask = new IMask(securitycode, {mask: '0000',});var dni_mask = new IMask(dni, {
mask: '00000000',});var cp_mask = new IMask(cp, {mask: '000000',});const name = document.getElementById('name')
var name_mask = new IMask(name, {mask: /^[a-zA-Z ]+$/,});var nc_mask = new IMask(nc, {
mask: '0000000000000000',});}

masking();