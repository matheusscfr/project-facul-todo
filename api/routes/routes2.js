import express from "express"

const allTodos = [{nome:"Matheus", email:"matheus@gmail.com", fone:"819999222"}];
const routes = express.Router();

routes.post("/", (req,res) => {
    const {nome, email, fone} = req.body;

    allTodos.push({nome, email, fone})
    return res.status(201).json(allTodos)

})

routes.get("/", (req, res) => {
    return res.status(201).json(allTodos);
})

routes.put("/:nome", (req, res) => {
    const { nome } = req.params;
    const { email, fone } = req.body;

    const index = allTodos.findIndex(todo => todo.nome === nome);
    if (index !== -1) {
        allTodos[index] = { nome, email, fone };
        return res.status(200).json(allTodos[index]);
    } else {
        return res.status(404).json({ error: "Todo not found" });
    }
});

routes.delete("/:nome", (req, res) => {
    const { nome } = req.params;

    const index = allTodos.findIndex(todo => todo.nome === nome);
    if (index !== -1) {
        allTodos.splice(index, 1);
        return res.status(204).send();
    } else {
        return res.status(404).json({ error: "Todo not found" });
    }
});



export default routes;