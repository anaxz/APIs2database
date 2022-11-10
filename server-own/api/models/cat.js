// const { resolve } = require('path')
const db = require ('../dbConfig')

// example of what it would look like as object
// const catsData = { 
//     { name: 'Snow', age: 5, owner_id: null },
//     { name: 'Mochi', age: 3, owner_id: 2 },
//     { name: 'Luppy', age: 5, owner_id: null }
// };

class Cat {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.age = data.age
        this.owners_name = data.owners_name
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                let data = await db.query(`SELECT cats.*, owners.name as owners_name
                                        FROM cats
                                        LEFT JOIN owners ON cats.owner_id = owners.id;`);

                // iterate through whole array of data
                // make a new class object of cat using the data
                const cats = data.rows.map(d => new Cat(d))
                //"resolves" a given value to a Promise - returns promise as a value of all cats
                resolve(cats);
            } catch (err) {
                reject("Error retrieving cats")
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                // $1 would be replaced by the database's 1st col so cat id
                let data = await db.query(`SELECT * FROM cats WHERE id = $1;`, [ id ]);

                // new class object and get only 1 cat by id
                let cats = new Cat(data.rows[0]);
                resolve (cats);
            } catch (err) {
                reject('Cat not found');
            }
        });
    }

    // static getAllName () {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const data = await db.query(`SELECT name FROM cats;`)
    //             // const cats = data.rows.map(d => new Cat(d))
    //             // const names = data.rows.map(d => d.name)
    //             const names = data.rows[0]
    //             resolve({names});
    //         } catch(err){
    //             reject("Error retrieving cats")
    //         }
    //     })
    // }

    static create(name, age){
        return new Promise (async (resolve, reject) => {
            try {
                let data = await db.query(`INSERT INTO cats (name, age) VALUES ($1, $2) RETURNING *;`, [ name, age ]);
                let cat = new Cat(data.rows[0]);
                resolve (cat);
            } catch (err) {
                reject('Error creating cat');
            }
        });
    }

    update() {
        return new Promise (async (resolve, reject) => {
            try {
                let update = await db.query(`UPDATE cats SET age = age + 1 WHERE id = $1 RETURNING *;`, [ this.id ]);
                let updatedCat = new Dog(update.rows[0]);
                resolve (updatedCat);
            } catch (err) {
                reject('Error updating cat');
            }
        });
    }

    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                //delete a cat by its id hence using this refers to a class object itself
                await db.query(`DELETE FROM cats WHERE id = $1;`, [ this.id ]);
                resolve('Cat was deleted')
            } catch (err) {
                reject('Cat could not be deleted')
            }
        })
    }

}

module.exports = Cat;