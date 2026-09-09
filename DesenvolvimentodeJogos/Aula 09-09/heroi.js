// Códigos únicos para as direções
var DIRECAO_ESQUERDA = 1;
var DIRECAO_DIREITA = 2;
var DIRECAO_CIMA = 3;
var DIRECAO_BAIXO = 4;

function Heroi(context, teclado, animacao) {
   this.context = context;
   this.teclado = teclado;
   this.animacao = animacao;
   this.x = 0;
   this.y = 0;
   this.direcao = DIRECAO_DIREITA;
}
Heroi.prototype = {
   atualizar: function() {
      if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
         this.direcao = DIRECAO_ESQUERDA;
         this.x -= 5;
      }
      if (this.teclado.pressionada(SETA_DIREITA) && 
               this.x < this.context.canvas.width - 20) {
         this.direcao = DIRECAO_DIREITA;
         this.x += 5;
      }
      if (this.teclado.pressionada(SETA_CIMA) && 
               this.y < this.context.canvas.width - 20) {
         this.direcao = DIRECAO_CIMA;
         this.y -= 5;
      }
      if (this.teclado.pressionada(SETA_BAIXO) && 
               this.y < this.context.canvas.width - 20) {
         this.direcao = DIRECAO_BAIXO;
         this.y += 5;
      }
   },
   desenhar: function() {
      this.context.fillStyle = "yellow";
      this.context.fillRect(this.x, this.y, 30, 50);
      this.context.fillStyle = "black";
      this.context.fillRect(this.x + 2, this.y + 2 , 4, 4);
      this.context.fillRect(this.x + 15, this.y + 2 , 4, 4);
      this.context.fillStyle = "orange";
      this.context.fillRect(this.x + 25, this.y + 4 , 13, 5);
      this.context.fillStyle = "gray";
      this.context.fillRect(this.x + 28, this.y + 25 , 20, 5);
      this.context.fillRect(this.x + 28, this.y + 25 , 10, 10);
   },
   atirar: function() {
      var tiro = new Bola(this.context);
      tiro.x = this.x + 29;
      tiro.y = this.y + 27;
      tiro.raio = 3;
      tiro.cor = 'red';

      // Lendo a direção atual
      if (this.direcao == DIRECAO_ESQUERDA)
         tiro.velocidadeX = -20;
      if (this.direcao == DIRECAO_DIREITA)
         tiro.velocidadeX = 20;
      if (this.direcao == DIRECAO_CIMA)
         tiro.velocidadeY = -20;
      if (this.direcao == DIRECAO_BAIXO)
         tiro.velocidadeY = +20;

      this.animacao.novoSprite(tiro);
   }
}
