let movieDb = require(`./db.json`)
let globalID = 11

module.exports = {
    getAllMovies: (req,res) => {
        res.status(200).send(movieDb)
    },
    createMovie: (req, res) => {
        // console.log(req.body)
        req.body.id = globalID
        movieDb.push(req.body)
        res.status(200).send(movieDb)
        globalID++
    },
    updateMovie: (req,res) => {
        // console.log(req.params, req.body)
        let {id} = req.params
        let {type} = req.body
        let index = movieDb.findIndex(movie => movie.id === +id)

        if (type === `minus` && movieDb[index].rating > 0){
            movieDb[index].rating--
        }else if (type === `plus` && movieDb[index].rating < 5){
            movieDb[index].rating++
        }else {
            res.status(400).send(`Bad request!`)
            return
        }

        res.status(200).send(movieDb)
    },
    deleteMovie: (req,res) => {
        let {id} = req.params
        let index = movieDb.findIndex(movie => movie.id === +id)
        movieDb.splice(index, 1)
        res.status(200).send(movieDb)
    }
}