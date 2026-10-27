const db = require("../config/database");

const buscarTodos = async () => {
    const [produtos] = await db.query(
        "SELECT * FROM produtos"
    );

    return produtos;
};

const buscarPorId = async (id) => {
    const [produtos] = await db.query(
        "SELECT * FROM produtos WHERE id_produto = ?",
        [id]
    );

    return produtos[0];
};

const criar = async (nome, descricao, preco, id_categoria, qntd_produtos, qntd_minima) => {
    const [resultado] = await db.query(
        "INSERT INTO produtos (nome, descricao, preco, id_categoria, qntd_produtos, qntd_minima) VALUES (?, ?, ?, ?, ?, ?)",
        [nome, descricao, preco, id_categoria, qntd_produtos, qntd_minima]
    );

    return {
        id: resultado.insertId,
        nome,
        descricao,
        preco,
        id_categoria,
        qntd_produtos,
        qntd_minima
    };
};

const editar = async (id, nome, descricao, preco, id_categoria, qntd_produtos, qntd_minima) => {
    await db.query(
        "UPDATE produtos SET nome=?, descricao=?, preco=?, id_categoria=?, qntd_produtos=?, qntd_minima=? WHERE id_produto=?",
        [nome, descricao, preco, id_categoria, qntd_produtos, qntd_minima, id]
    );

    return {
        id,
        nome,
        descricao,
        preco,
        id_categoria,
        qntd_produtos,
        qntd_minima
    };
};

const excluir = async (id) => {
    const [resultado] = await db.query(
        "DELETE FROM produtos WHERE id=?",
        [id]
    );

    return resultado.affectedRows;
};

const categoria = async (id) => {
    const [produto] = await db.query(
        "SELECT * FROM produtos WHERE produtos.id_categoria = ?",
        [id]
    );

    return produto;
};

const semEstoque = async () => {
    const [produto] = await db.query(
        "SELECT * FROM produtos WHERE qntd_produtos = 0"
    );

    return produto;
};

const baixoEstoque = async () => {
    const [produto] = await db.query(
        "SELECT * FROM produtos WHERE qntd_produtos > 0 AND qntd_produtos <= qntd_minima"
    );

    return produto;
};

const normalEstoque = async () => {
    const [produto] = await db.query(
        "SELECT * FROM produtos WHERE qntd_produtos > qntd_minima"
    );

    return produto;
};

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    editar,
    excluir,
    categoria,
    semEstoque,
    baixoEstoque,
    normalEstoque
};