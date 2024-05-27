const express = require("express");


const routes = express.Router();
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();


routes.post("/", async (req, res) =>  {
    const {nome, email, fone } = req.body;

const todo = await prisma.todo.create({
    data:{
        nome,
        email,
        fone,
    },
});

return res.status(201).json("todo")
});



routes.get("/", async (req, res) => {
    const todo = await prisma.todo.findMany();

    return res.status(200).json(todo);
})

routes.put("/:id" , async (req, res) =>{
    const {id} = req.params;

    const intId = parseInt(id);

    const {nome, email, fone } = req.body;


    const todoExist = await prisma.todo.findUnique({where: {id: intId}})


    if(!id || !todoExist){
        return res.status(400).json("id is empty or not exist.")
    }

    const todo = await prisma.todo.update({
        where:{
        id:intId
    }, data: {
        nome,
        email,
        fone,
    }
});

return res.status(201).json("deu certo");
})

routes.delete("/:id",  async (req, res) => {
    const {id} = req.params;

    const intId = parseInt(id);

    await prisma.todo.delete({where: { id: intId }})

    return res.status(200).json("Deletado com sucesso.")
})

module.exports = routes;

