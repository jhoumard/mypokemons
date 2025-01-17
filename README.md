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

J'ai trouvé ce test beaucoup plus simple que celui de la dernière fois. Je crois surtout que c'est grâce à avoir pris plus d'attention pendant le cour, en plus que cette fois je me suis bien pris la peinne à comprendre chaque ligne de code jusqu'à être sure de tout savoir. Je suis content du progrès le quel je crois avoir fait pendant ces dernières semaines même si il est possible de peutêtre rencontrer quelques erreur d'inatention et que la partie théorique reste encore à améliorer.

Problèmes rencontrés:

Je n'ai pas vraiement senti des difficultés spéciales pendant ce test sauf par 4 choses qui sont:

1- La partie théorique. Même si dans la partie du code je me sens beaucoup plus à laise qu'avant, j'ai encore assez de peine pour la partie théorique. Je ne savais pas comment repondre à certaines questions que j'ai dû laisser en blanc ou sans une reponse que je crois vraiement juste.
2- Les erreures de status pas directement vus en cours (exemple: status 403). J'ai eu de la peinne à comprendre comment les lignes de codes pour ces nouveaux status marchaient.
3- Le compteur d'appels à la route qui liste tous les pokemons. J'ai toujours des problèmes pour comprendre comment cette fonction marche.
4- La règle qui fait que le nom soit composé uniquement de lettres avec les caracteres possibles "é" et "è". Je ne suis pas sur d'avoir compris la logisque derière la façon d'écrir cette règle surtout pour ajouter les caractères "é" et "è".