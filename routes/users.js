const express = require("express")
const router = express.Router()
router.get("/", (req, res) => {
    res.send("User list")
})
router.get("/new", (req, res) => {
    res.send("User New form")
})

// dynamic routes
router.route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.send(`get user with id ${req.params.id}`)
    })
    .post((req, res) => {
        res.send(`post user with id ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`put user with id ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`delete user with id ${req.params.id}`)
    })


const users = [{name: "Kek"}, {name: "Lol"}]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router