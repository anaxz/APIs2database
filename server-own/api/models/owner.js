const db = require ('../dbConfig')

const Cat = require("./cat")

class Owner {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.address = data.address
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let ownerData = await db.query(`SELECT * FROM owners WHERE id = $1;`, [ id ]); 
                let owner = new Owner(ownerData.rows[0]);
                resolve (owner);
            } catch (err) {
                reject('Owner not found');
            }
        });
    }

    get cats(){
        return new Promise (async (resolve, reject) => {
            try {
                const dogsData = await db.query(`SELECT * FROM cats WHERE owner_id = $1;`, [ this.id ]);
                const dogs = dogsData.rows.map(d => new Cat(d));
                resolve(dogs);
            } catch (err) {
                reject("Owner's cats could not be found");
            };
        });
    };

}

module.exports = Owner;