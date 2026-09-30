function Nave(context, teclado, imagem) {
   this.context = context;
   this.teclado = teclado;
   this.imagem = imagem;
   this.x = 0;
   this.y = 0;
   this.velocidade = 0;
}
Nave.prototype = {
   atualizar: function() {
      if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0)
         this.x -= this.velocidade;
         
      if (this.teclado.pressionada(SETA_DIREITA) && 
               this.x < this.context.canvas.width - this.imagem.width)
         this.x += this.velocidade;
         
      if (this.teclado.pressionada(SETA_ACIMA) && this.y > 0)
         this.y -= this.velocidade;
         
      if (this.teclado.pressionada(SETA_ABAIXO) &&
               this.y < this.context.canvas.height - this.imagem.height)
         this.y += this.velocidade;
   },
   desenhar: function() {
      this.context.drawImage(this.imagem, this.x, this.y, 
            this.imagem.width, this.imagem.height);
   },
atirar: function() {
    let largura = this.imagem.width;

    // Posição das asas
    let xEsquerda = this.x + 10;
    let xDireita  = this.x + largura - 10;

    // Criar dois tiros
    let tiroEsq = new Tiro(this.context, this, xEsquerda);
    let tiroDir = new Tiro(this.context, this, xDireita);

    // Adicionar na animação
    this.animacao.novoSprite(tiroEsq);
    this.animacao.novoSprite(tiroDir);
}

}