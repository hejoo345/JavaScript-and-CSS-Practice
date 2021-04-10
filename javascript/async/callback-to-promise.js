"use strict";

//Callback hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "nct" && password === "127")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }

  async getUserWithRole(id, password) {
    try {
      const user = await this.loginUser(id, password);
      const role = await this.getRoles(user);
      alert(`hi! ${role.name} your role ${role.role}`);
      return role;
    } catch (error) {
      console.log(error);
    }
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.getUserWithRole(id, password);

// async function getUserWithRole(id, password) {
//   try {
//     const user = await userStorage.loginUser(id, password);
//     const userRole = await userStorage.getRoles(user);
//     alert(`hi ${userRole.name}, your role ${userRole.role}`);
//     return userRole;
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUserWithRole(id, password).then(console.log);
