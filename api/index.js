import express from "express"
import userRoutes from "./routes/users.js"
import routes from "./routes/routes2.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(8800)