import db from '../../config/database';

// const pool = new Pool(dbConfig);

export default class User {
  // ... constructeur et autres méthodes

  static async getUsers() {
    //    const query = 'SELECT * FROM "app_users"';
    try {
      const result = await db.query('select * from app_users').then(async (req, res) => {
        return res.json(req.rows);
      })

      print(result)
    
      const users = result.rows;
      return users

      //return users.map(user => new User(id_app_user, name_app_users, first_name__app_users, birth_date_app_users, adress_app_users));
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
      throw error;
    }
  }

  static async updateUser(id, userData) {
    const { name_app_users, first_name__app_users, birth_date_app_users, address_app_users } = userData;
    const query = 'UPDATE app_users SET name_app_users = $1, first_name__app_users = $2, birth_date_app_users = $3, adress_app_users = $4 WHERE id_app_user = $5 RETURNING *';
    const values = [name_app_users, first_name__app_users, birth_date_app_users, address_app_users, id_app_user];

    try {
      const result = await pool.query(query, values);
      const updatedUser = result.rows[0];
      if (updatedUser) {
        return new User(updatedUser.id_app_user, updatedUser.name_app_users, updatedUser.first_name__app_users, updatedUser.birth_date_app_users, updatedUser.adress_app_users);
      }
      return null;
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
      throw error;
    }
  }

  static async deleteUser(id) {
    const query = 'DELETE FROM app_users WHERE id = $1 RETURNING *';
    const values = [id];

    try {
      const result = await pool.query(query, values);
      const deletedUser = result.rows[0];
      if (deletedUser) {
        return new User(deletedUser.id_app_user, deletedUser.name_app_users, deletedUser.first_name__app_users, deletedUser.birth_date_app_users, deletedUser.adress_app_users);
      }
      return null;
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
      throw error;
    }
  }
}
