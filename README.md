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

2eme test a passé plus facile pour moi grâce a temps quel j'ai. J'ai reussi presque dans tout les exercices sauf bonus. J'ai ajouté les erreurs des base comme 500 et 404 dans get et post et comme etait mis dans ex 3 j'ai ajouté 403 pour delete et put. Au debut je ne comprenait pas pourqoi mon serveur local tombe quand il y a un erreur dans validation, c'etait parce que j'ai oublie ajouter "ValidationError" dans post. Alors cette fois j'ai pas oublie de mettre entête dans tout les fichier modifié. 