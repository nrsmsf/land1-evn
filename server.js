const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs")
app.get("/",
    (req,
     res) => {
        console.log("Here")
        res.status(200)
            .render("index",
                {test: "Test"})
    }
)

const userRouter = require("./routes/users")
app.use("/users", userRouter)

app.listen(3000)
