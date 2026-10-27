const produtoModel = require("../models/produtoModel");

const buscarProdutos = async (req, res) => {
    try {
        const produtos = await produtoModel.buscarTodos();

        res.json(produtos);
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao buscar produtos",
            erro: error.message
        });
    }
};

const buscarProdutosPorId = async (req, res) => {
    try {
        const id = req.params.id;
        const produto = await produtoModel.buscarPorId(id);

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }

        res.json(produto);
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao buscar produto",
            erro: error.message
        });
    }
};

const criarProdutos = async (req, res) => {
    try {
        const novoProduto = await produtoModel.criar(
            req.body.nome,
            req.body.descricao,
            req.body.preco,
            req.body.id_categoria,
            req.body.qntd_produtos,
            req.body.qntd_minima
        );

        if (req.body.qntd_produtos < 0 || req.body.qntd_produtos < 0) {
            return res.status(400).json({
                mensagem: "A quantidade de produtos e quantidade mínima devem ser positivos"
            });
        }
        if (req.body.preco <= 0) {
            return res.status(400).json({
                mensagem: "O preço do produto deve ser maior que 0"
            });
        }

        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao criar produto",
            erro: error.message
        });
    }
};

const editarProdutos = async (req, res) => {
    try {
        const id = req.params.id;

        const produto = await produtoModel.buscarPorId(id);

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }

        const produtoEditado = await produtoModel.editar(
            id,
            req.body.nome,
            req.body.descricao,
            req.body.preco,
            req.body.id_categoria,
            req.body.qntd_produtos,
            req.body.qntd_minima
        );
        
        if (req.body.qntd_produtos < 0 || req.body.qntd_produtos < 0) {
            return res.status(400).json({
                mensagem: "A quantidade de produtos e quantidade mínima devem ser positivos"
            });
        }
        if (req.body.preco <= 0) {
            return res.status(400).json({
                mensagem: "O preço do produto deve ser maior que 0"
            });
        }
        

        res.json(produtoEditado);
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao editar o produto, todas informações devem ser preenchidas", // faltou o patch
            erro: error.message
        });
    }
};

const excluirProdutos = async (req, res) => {
    try {
        const id = req.params.id;

        const resultado = await produtoModel.excluir(id);

        if (resultado === 0) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }

        res.json({
            mensagem: "Produto excluído com sucesso"
        });
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao excluir produto",
            erro: error.message
        });
    }
};

const produtoCategoria = async (req, res) => {
    try {
        const id = req.params.id;

        const produto = await produtoModel.categoria(id);

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }

        res.json(produto);
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao buscar produto por categoria",
            erro: error.message
        });
    }
};

const semEstoque = async (req, res) => {
    try {
        const id = req.params.id;

        const produto = await produtoModel.semEstoque(id);


        res.json(produto);
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao buscar produto por estoque",
            erro: error.message
        });
    }
};

const normalEstoque = async (req, res) => {
    try {
        const id = req.params.id;

        const produto = await produtoModel.normalEstoque(id);



        res.json(produto);
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao buscar produto por estoque",
            erro: error.message
        });
    }
};

const baixoEstoque = async (req, res) => {
    try {
        const id = req.params.id;

        const produto = await produtoModel.baixoEstoque(id);


        res.json(produto);
    } catch (error) {
        res.status(500).json({
            mensagem: "Erro ao buscar produto por estoque",
            erro: error.message
        });
    }
};

module.exports = {
    buscarProdutos,
    buscarProdutosPorId,
    criarProdutos,
    editarProdutos,
    excluirProdutos,
    produtoCategoria,
    semEstoque,
    baixoEstoque,
    normalEstoque
};