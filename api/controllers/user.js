import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuario";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const insertUsers = (req, res) => {
  const q = "INSERT INTO usuario (`nome`, `email`, `fone`, `data_nascimento`) VALUES (?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err)
      
    return res.status(200).json("Usuario criado com sucesso.")
  })
}

export const updateUsers = (req , res) => {
  const q = "UPDATE usuario SET `nome` = ?, `email`= ?, `fone` = ? , `data_nascimento` = ? WHERE `id` = ? ";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if(err) return res.json(err)

    return res.status(200).json("O Update foi efetuado com sucesso");
  });

};

export const deleteUsers = (req, res) => {
  const q = "DELETE FROM usuario WHERE `id` = ? "



db.query(q, [req.params.id], (err) =>{
  if(err) return res.json(err)

    return res.status(200).json("O usuario foi excluido com sucesso!")
} )
 
}

