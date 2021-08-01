export class Imovel {
    constructor(
        public codigo: number,
        public tipo: string,
        public imagem: string,
        public proprietario: string,
        public preco: number,
        public descricao: string,
        public data_cadastro: string
    ){}
}
