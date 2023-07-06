import { Pool } from 'pg';
import dbConfig from '../../config/database';

const pool = new Pool(dbConfig);

export class User {
  // ... constructeur et autres méthodes

  static async getUsers() {
    const query = 'SELECT * FROM users';

    try {
      const result = await pool.query(query);
      const users = result.rows;
      return users.map(user => new User(user.id, user.name, user.firstname, user.address, user.email));
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
      throw error;
    }
  }

  static async updateUser(id, userData) {
    const { name, firstname, address, email } = userData;
    const query = 'UPDATE users SET name = $1, firstname = $2, address = $3, email = $4 WHERE id = $5 RETURNING *';
    const values = [name, firstname, address, email, id];

    try {
      const result = await pool.query(query, values);
      const updatedUser = result.rows[0];
      if (updatedUser) {
        return new User(updatedUser.id, updatedUser.name, updatedUser.firstname, updatedUser.address, updatedUser.email);
      }
      return null;
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
      throw error;
    }
  }

  static async deleteUser(id) {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const values = [id];

    try {
      const result = await pool.query(query, values);
      const deletedUser = result.rows[0];
      if (deletedUser) {
        return new User(deletedUser.id, deletedUser.name, deletedUser.firstname, deletedUser.address, deletedUser.email);
      }
      return null;
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
      throw error;
    }
  }
}
