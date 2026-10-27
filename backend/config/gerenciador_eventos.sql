DROP DATABASE IF EXISTS gerenciador_produtos;
CREATE DATABASE gerenciador_produtos;
USE gerenciador_produtos;

CREATE TABLE produtos 
( 
 id_produto INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(50) NOT NULL,  
 descricao VARCHAR(150) NOT NULL,  
 preco DOUBLE NOT NULL,  
 id_categoria INT NOT NULL,  
 qntd_produtos INT NOT NULL,  
 qntd_minima INT NOT NULL
); 

CREATE TABLE categorias 
( 
 id_categoria INT PRIMARY KEY AUTO_INCREMENT,  
 nome VARCHAR(50) NOT NULL
); 

ALTER TABLE produtos ADD FOREIGN KEY(id_categoria) REFERENCES categorias (id_categoria);

INSERT INTO categorias (nome) VALUES ('Objetos Voadores');
INSERT INTO categorias (nome) VALUES ('Objetos Terrestres');

INSERT INTO produtos (nome, descricao, preco, id_categoria, qntd_produtos, qntd_minima) VALUES ('Cadeira voadora', 'Ela voa', 5980.95, 1, 10, 5);
INSERT INTO produtos (nome, descricao, preco, id_categoria, qntd_produtos, qntd_minima) VALUES ('Cadeira terrestre', 'Ela não voa', 3980.95, 2, 5, 10);