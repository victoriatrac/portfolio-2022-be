const express = require("express")
const app = express()
const project = require('./api/project')

app.use(express.json({ extended: false }))

// app.get('/', (req, res) =>{
//   res.json({
//     message: "hello world"
//   })
// })

app.use("/api/project", project)

const PORT = process.env.PORT || 1234

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})