function showDetails(country) {
    var countryName = country.getAttribute("data-countries");
    alert("The is a " + countryName + ".");
}

function main() {
    var fruits = ['Nouman', 'altaf', 'arslan'];

    console.log(fruits);
    /* fruits.forEach(function(item, index, array) {
         console.log(item, index);
     });*/

    fruits.shift();
    fruits.unshift('nouman');
    console.log(fruits);
    console.log(fruits.indexOf('nouman'));
}
main();