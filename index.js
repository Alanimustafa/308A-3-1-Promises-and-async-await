// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  const thePromise = new Promise ((resolve, reject) => {
    let databaseNumber ;
      if (id >=1 && id <= 5) {
        databaseNumber = 1
        resolve(db1(id));
      } else if (id >5 && id < 7) {
        databaseNumber = 2
        resolve (db2(id)) ;
      } else if (id >=7 && id <= 10) {
        databaseNumber = 3
        resolve (db3(id));
      } else {
        reject("Rejected.. Please try again with different ID number.");
      }
    })

    thePromise.then((message) => {
      console.log(message);
    }).catch ((error) => {
      console.error(`ID# ${id} is OUT OF RANGE `, error);
    })
  
  }

  getUserData(2); // db1 
  getUserData(6); // db2
  getUserData(9); // db3
  getUserData(11);// Reject error: out of range. 

  
  
// Part 2 - Using Promise.all

function promiseAll (id) {
  const thePromise = new Promise ((resolve,reject) => {
    let databaseNumber ;
    if (id >=1 && id <= 5) {
      databaseNumber = 1
      resolve(db1(id));
    } else if (id >5 && id < 7) {
      databaseNumber = 2
      resolve (db2(id)) ;
    } else if (id >=7 && id <= 10) {
      databaseNumber = 3
      resolve (db3(id));
    } reject(`Promise All Error ID# ${id} is OUT OF RANGE`);
  }
  )
  Promise.all([db1, db2, db3]).then((values) => { 
      console.log("Promise All", values);
    }).catch((error) => {
      console.log(error)
    })
  };


 promiseAll(1);
 promiseAll(8);
 promiseAll(6);
 promiseAll(15);
  