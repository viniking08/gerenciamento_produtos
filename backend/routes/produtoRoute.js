const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");

router.get("/", produtoController.buscarProdutos);
router.get("/:id", produtoController.buscarProdutosPorId);
router.post("/", produtoController.criarProdutos);
router.put("/:id", produtoController.editarProdutos);
router.delete("/:id", produtoController.excluirProdutos);
router.get("/:id/categoria", produtoController.produtoCategoria);
router.get("/zerado", produtoController.semEstoque);
router.get("/normal", produtoController.normalEstoque);
router.get("/baixo", produtoController.baixoEstoque);

module.exports = router;