import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.get("/", (_req, res) => {
    res.json("Seja bem vindo a minha API")
})
app.get("/frutas", async (_req, res) => {
    try {
        const response = await pool.query("SELECT * FROM frutas")
        res.json(response.rows)
    }catch (error) {
        console.error(error);
    }
})

app.listen(port, () => {
    console.log(`API rodando em: http://localhost: ${port}`);
})