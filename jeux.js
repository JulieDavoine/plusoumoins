var nb = nb_aleatoire(1, 100); 
var cpt = 0;
var saisie;
var msg = 'Devinez un nombre entre 1 et 100';

do

{
     saisie = prompt(msg);
     cpt++;


     if(saisie > nb)

          msg = "C'est moins";

     else

          msg = "C'est plus";

}

while(saisie != nb);


alert("Bravo, tu as gagne en " + cpt + " coups !")

function nb_aleatoire(min, max)
{
     var nb = min + (max-min+1)*Math.random();
     return Math.floor(nb);
}