import { Sequelize } from 'sequelize';

// Créer une instance Sequelize pour se connecter à la base de données
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite', // Utilisez le dialecte correspondant à votre base de données (par exemple, 'mysql', 'postgres', etc.)
  storage: 'path/to/database.sqlite', // Chemin vers le fichier SQLite
});

export default sequelize;