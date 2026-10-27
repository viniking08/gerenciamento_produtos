const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");

router.get("/", produtoController.buscarProdutos);
router.get("/zerado", produtoController.semEstoque);
router.get("/normal", produtoController.normalEstoque);
router.get("/baixo", produtoController.baixoEstoque);
router.get("/:id/categoria", produtoController.produtoCategoria);
router.get("/:id", produtoController.buscarProdutosPorId);

router.post("/", produtoController.criarProdutos);
router.put("/:id", produtoController.editarProdutos);
router.delete("/:id", produtoController.excluirProdutos);


module.exports = router;
