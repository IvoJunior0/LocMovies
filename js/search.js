import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBidZ3bW_aUV6--4-IzaA5ffwRoyggCXoA",
    authDomain: "e-commerce-1bace.firebaseapp.com",
    databaseURL: "https://e-commerce-1bace-default-rtdb.firebaseio.com",
    projectId: "e-commerce-1bace",
    storageBucket: "e-commerce-1bace.firebasestorage.app",
    messagingSenderId: "1025673573006",
    appId: "1:1025673573006:web:97ef141bd05d84db30cfdf",
    measurementId: "G-WZWQ5LCL6V"
};

const app = initializeApp(firebaseConfig);

import { getDatabase, ref, child, get, set, update, remove } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";


const db = getDatabase();

let codigo = document.getElementById('codigo');
let produto = document.getElementById('produto');
let categoria = document.getElementById('categoria');
let quantidade = document.getElementById('quantidade');
let valor = document.getElementById('valor');

let idProduto = document.getElementById('idProduto');

let dadoProduto = document.getElementById('dadoProduto');
let dadoCategoria = document.getElementById('dadoCategoria');
let dadoQuantidade = document.getElementById('dadoQuantidade');
let dadoValor = document.getElementById('dadoValor');

let cadastrarProduto = document.getElementById('cadastrarProduto');
let buscarProduto = document.getElementById('buscarProduto');
let atualizarProduto = document.getElementById('atualizarProduto');
let deletarProduto = document.getElementById('deletarProduto');

function AddProduto() {
    set(ref(db, 'Produto/' + codigo.value), {
        codigo: codigo.value,
        produto: produto.value,
        categoria: categoria.value,
        quantidade: quantidade.value,
        valor: valor.value
    }).then(() => {
        codigo.value = ''
        produto.value = ''
        categoria.value = ''
        quantidade.value = ''
        valor.value = ''
        alert("Produto Cadastrado!");
    }).catch((error) => {
        console.log(error);
        alert('Produto Não Cadastrado!');
    })

}

function PesquisarProduto() {
    const dbRef = ref(db);
    get(child(dbRef, 'Produto/' + idProduto.value)).then((snapshot) => {
        if (snapshot.exists()) {
            dadoProduto.value = snapshot.val().produto;
            dadoCategoria.value = snapshot.val().categoria;
            dadoQuantidade.value = snapshot.val().quantidade;
            dadoValor.value = ('R$ ') + parseFloat(snapshot.val().valor).toFixed(2);
            alert('Produto Localizado!')
        } else {
            alert("O produto não existe");
        }
    }).then(() => {
        alert('Leitura Realizada!')
    }).catch((e) => {
        alert('Algo deu errado!')
        console.log(e)
    })
}

function AtualizarProdutos() {
    update(ref(db, 'Produto/' + idProduto.value), {
        produto: dadoProduto.value,
        categoria: dadoCategoria.value,
        quantidade: dadoQuantidade.value,
        valor: dadoValor.value
    }).then(() => {
        alert('Produto Atualizado!');
    }).catch((e) => {
        alert('Algo deu errado!')
        console.log(e)
    })
}

function DeletarProdutos() {
    remove(ref(db, 'Produto/' + idProduto.value)).
        then(() => {
            idProduto.value = ''
            dadoProduto.value = ''
            dadoCategoria.value = ''
            dadoQuantidade.value = ''
            dadoValor.value = ''
            alert('Produto Deletado!')
        })
}

cadastrarProduto.addEventListener('click', AddProduto);
buscarProduto.addEventListener('click', PesquisarProduto);
atualizarProduto.addEventListener('click', AtualizarProdutos);
deletarProduto.addEventListener('click', DeletarProdutos);