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

J'ai encore un peu de mal avec la gestion des erreurs, mais c'est la dernière chose qu'on a vu alors
ce n'est pas vraiment étonnant. Par contre je n'arrive toujours pas à faire un compteur fonctionnel,
il faudrait que je regarde avec certains camarade car ce n'est pas vraiment quelque-chose de difficile.