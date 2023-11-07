import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("sessions.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)",
        [],
        () => {
          tx.executeSql(
            "CREATE TABLE IF NOT EXISTS users (localId TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL, lastName TEXT NOT NULL)",
            [],
            () => resolve(),
            (_, error) => reject(error),
          );
        },
        (_, error) => {
          reject(error);
        },
      );
    });
  });
  return promise;
};

export const insertUserData = ({ localId, name, lastName }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "INSERT INTO users (localId, name, lastName) VALUES (?, ?, ?);",
        [localId, name, lastName],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      );
    });
  });
  return promise;
};

export const insertSession = ({ localId, email, token }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?);",
        [localId, email, token],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      );
    });
  });
  return promise;
};

export const fetchSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM sessions",
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      );
    });
  });
  return promise;
};

export const fetchUser = localId => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM users WHERE localId = ?",
        [localId],
        (_, result) => {
          const users = result.rows._array;
          console.log("Users:", users);
          resolve(users);
        },
        (_, error) => reject(error),
      );
    });
  });
  return promise;
};

export const deleteSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "DELETE FROM sessions",
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      );
    });
  });
  return promise;
};
