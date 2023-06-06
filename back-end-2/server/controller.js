let realDb = require(`./db.json`)
let houseID = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(realDb)
    },
    deleteHouse: (req, res) => {
        let {id} = req.params
        let index = realDb.findIndex(house => house.id === +id)
        realDb.splice(index, 1)
        res.status(200).send(realDb)
    },
    createHouse: (req, res) => {
        req.body.id = houseID
        realDb.push(req.body)
        res.status(200).send(realDb)
        houseID++
    },
    updateHouse: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = realDb.findIndex(house => house.id === +id)

        if (type === `minus`){
            realDb[index].price -= 10000
        }else if (type === `plus`){
            console.log(realDb[index].price)
            realDb[index].price += 10000
        }else {
            res.status(400).send(`Bad Request!`)
            return
        }

        res.status(200).send(realDb)
    }
}