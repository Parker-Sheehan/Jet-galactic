require('dotenv').config()
const {CONNECTION_STRING} = process.env

const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


module.exports = {
    seed : (req,res) => {
        sequelize.query(`
        DROP TABLE IF EXISTS tickets;

        CREATE TABLE tickets (
            ticket_id SERIAL PRIMARY KEY,
            first_name VARCHAR(50),
            last_name VARCHAR(50),
            departing_from VARCHAR(50),
            arriving_on VARCHAR(50),
            date VARCHAR(50),
            check_in_code VARCHAR(10),
            checked_in BOOLEAN DEFAULT False
        );
        `).then(()=> {
            console.log("DB SEEDED")
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    bookTrip : (req,res) => {
        function makeCheckIn(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
              counter += 1;
            }
            return result
        }
        checkInKey = (makeCheckIn(5))

        let {passangers, departingFrom, arrivingOn, date} = req.body
        for (let i = 0; i < +passangers; i++){
            let firstName = req.body[`firstName${i}`]
            let lastName = req.body[`lastName${i}`]

            sequelize.query(`
                INSERT INTO tickets (first_name, last_name, departing_from, arriving_on, date ,check_in_code)
                    VALUES ('${firstName}', '${lastName}', '${departingFrom}', '${arrivingOn}', '${date}', '${checkInKey}');
            `)
        }
        res.status(200).send(checkInKey)
    },
    ticketInfo: (req,res) => {
        res.status(200).send(arr[0])
    }
}