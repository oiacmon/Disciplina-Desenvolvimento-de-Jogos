function Fundo(context, imagem, direcao) {
   this.context = context;
   this.imagem = imagem;
   this.velocidade = 0;
   this.posicaoEmenda = 0;
   this.direcao = vertical;
}
Fundo.prototype = {
   atualizar: function() {
      // Atualizar a posição de emenda
      this.posicaoEmenda += this.velocidade;
      
      if(this.direcao == vertical && this.posicaoEmenda > this.imagem.height){
         this.posicaoEmenda = 0;
      }
      else if(this.direcao == horizontal && this.posicaoEmenda > this.imagem.width){
         this.posicaoEmenda = 0;
      }
      
   },
   desenhar: function() {
      var img = this.imagem;
        // Para facilitar a escrita :D
      if (this.direcao == vertical){         
         // Primeira cópia
         var posicaoY = this.posicaoEmenda - img.height;
         this.context.drawImage(img, 0, posicaoY, img.width, img.height);
         
         // Segunda cópia
         posicaoY = this.posicaoEmenda;
         this.context.drawImage(img, 0, posicaoY, img.width, img.height);
      }   
      else if (this.direcao == horizontal){
         
         var posicaoX = this.posicaoEmenda - img.width;
         this.context.drawImage(img, 0, posicaoX, img.width, img.height);
         
         // Segunda cópia
         posicaoX = this.posicaoEmenda;
         this.context.drawImage(img, 0, posicaoX, img.width, img.height);
      }   
      }  
   }

