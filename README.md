
Auteur: Vikki dolt
Date: 17.01.2025


## Consigne

1. Créer une nouvelle branche nommée "test17_<votre_nom>" [max 4 lettres du nom de famille, sans espace, sans accent] (exemple: test17_houm):
git checkout -b <branch_name>

2. Si pas déjà fait, installer Express et Nodemon:  
npm install express --save  
npm install nodemon --save-dev

3. Installer Sequelize et le driver MySQL:  
npm install sequelize --save  
npm install mysql2 --save-dev

4. Créer la base de données MySQL pour les Pokemons (p. ex "db_pokemons")

5. Renseigner les informations de connexion au serveur MySQL:
Copier 'example.env.mjs' et renommer le nouveau fichier 'env.mjs', dans lequel on renseignera l'utilisateur et son mot de passe.
On évite ainsi de publier les informations de connexion sur GIT.

6. Incrémenter la version dans "package.json"

7. Commit et push

## Auto-évaluation, difficultés rencontrées
Je pense que ce test c'est plutôt bien passer. Il y a cependant certain problème comme l'utilisation de git ainsi que mon application qui ne se lançais pas au début du test qui m'a un peu inquiété. Pour le code je n'ait pas eu trop de difficultés mais quand même quelque erreurs que je ne savais pas tout de suite comment régler. Actuellement pour la route delete et put le message ne s'affiche pas. Je suis toujours entrain de travailler sur cette erreur mais les autres j'ai put réussir à les comprendre et ainsi pouvoir les corrigé. Il y avait par exemple un nom écris faux ou un paramètre que j'avais oublié de renseigner. J'ai mal vu pour la route cofffe en croyant au début qu'il n'y avait qe deux f mais il y en avait 3 ce qui m'aurait valu une erreur d'inattention. Je suis satisfaite de mon travail et de même pour la partie pratique ou j'ai eu aucune peine à comprendre. Les commits n'ont malheureusement pas pu être fait en raison d'une erreur de réseau.