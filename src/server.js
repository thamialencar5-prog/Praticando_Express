import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.get("/", (_req, res) => {
    res.json("Seja bem vindo a minha API")
})

app.listen(port, () => {
    console.log(`API rodando em: http://localhost: ${port}`);
})