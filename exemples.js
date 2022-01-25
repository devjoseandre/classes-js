//Criando uma "classe" com um objeto. Nessa estrutura, 'Libro' é um objeto literal e não mutável.
const Livro = {
    nome: "As vantagens de ser invisível",
    editora: "Casa do Código",
    paginas: 123,
    anunciar: function () {
        console.log(`${this.nome} é um livro da editora ${this.editora}`)
    }
}
Livro.anunciar();

//Criando uma "classe" com uma função.
const Pessoa = function (nome, idade, sexo) {

    pNome = nome,
    pIdade = idade,
    pSexo = sexo

    this.getNome = () => { return pNome; }

    this.getIdade = () => { return pIdade; }

    this.getSexo = () => { return pSexo; }
}

const Andre = new Pessoa("André", 21, "masculino");
console.log(Andre.getNome());

//Definindo uma String em JS
const localidade = "Museu do Ipiranga";

//Por debaixo dos panos o JS declara esta variável assim
const temp = new String("Museu do Ipiranga");

console.log(localidade);
console.log(temp.toString());

//Construindo uma Classe a partir do ES6
class Animal {
    constructor(nome, tipo, porte, peso) {
        this.nome = nome;
        this.tipo = tipo;
        this.porte = porte;
        this.peso = peso;
    }

    descricao() {
        console.log(`${this.nome} é um ${this.tipo} de porte ${this.porte} e possui ${this.peso} Kg`);
    }
}

const Belinha = new Animal("Belinha", "cão labrador", "médio", 8);
Belinha.descricao();

//uma Classe nada mais é do que uma função no JS
console.log(typeof Animal);

//Herença
class Gato extends Animal {
    constructor(nome, porte, peso, raca){
        super(nome, porte, peso)
        this.raca = raca;
    }

    descricaoGato(){
        console.log(`${this.nome} é um Gato da raça ${this.raca}, possui porte ${this.porte} e pesa ${this.peso}Kg`);
    }
}

const Miaw = new Gato("Juju", "pequeno", "1", "vira-lata");
Miaw.descricaoGato();