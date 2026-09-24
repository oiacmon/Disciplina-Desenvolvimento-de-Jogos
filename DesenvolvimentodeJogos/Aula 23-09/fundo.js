var VERTICAL = 1;
var HORIZONTAL = 2;

function Fundo(context, imagem, direcao) {
   this.context = context;
   this.imagem = imagem;
   this.velocidade = 0;
   this.posicaoEmenda = 0;
   this.direcao = direcao;
}

Fundo.prototype = {
   atualizar: function() {
      this.posicaoEmenda += this.velocidade;
      
      if (this.direcao == VERTICAL && this.posicaoEmenda > this.imagem.height) {
         this.posicaoEmenda = 0;
      }
      else if (this.direcao == HORIZONTAL && this.posicaoEmenda > this.imagem.width) {
         this.posicaoEmenda = 0;
      }
   },

   desenhar: function() {
      var img = this.imagem;

      if (this.direcao == VERTICAL) {
         var posY = this.posicaoEmenda - img.height;
         this.context.drawImage(img, 0, posY);
         
         posY = this.posicaoEmenda;
         this.context.drawImage(img, 0, posY);
      }
      else if (this.direcao == HORIZONTAL) {
         var posX = this.posicaoEmenda - img.width;
         this.context.drawImage(img, posX, 0);
         
         posX = this.posicaoEmenda;
         this.context.drawImage(img, posX, 0);
      }
   }
};