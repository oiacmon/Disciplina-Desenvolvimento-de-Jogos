function Tiro(context, nave, doble) {
   this.context = context;
   this.nave = nave;
   
   // Posicionar o tiro no bico da nave
   this.largura = 4;
   this.altura = 20;   
   if (doble == false){
      this.x = nave.x + nave.imagem.width / 2 - this.largura / 2;
      this.y = nave.y - this.altura;
   } else{
      this.tiro.doble();
   }
   this.velocidade = 10;
   
   this.cor = 'red';
}
Tiro.prototype = {
   doble: function(){
      this.x = nave.x-10 + nave.imagem.width / 2 - this.largura / 2;
      this.y = nave.y+20 - this.altura;

   },
   atualizar: function() {
      this.y -= this.velocidade;
      
      // Excluir o tiro quando sumir da tela
      if (this.y < -this.altura) {
         this.animacao.excluirSprite(this);
         this.colisor.excluirSprite(this);
      }
   },
   desenhar: function() {
      var ctx = this.context;
      ctx.save();
      ctx.fillStyle = this.cor;
      ctx.fillRect(this.x, this.y, this.largura, this.altura);
      ctx.restore();
   },
   retangulosColisao: function() {
      return [ {x: this.x, y: this.y, largura: this.largura,
            altura: this.altura} ];
   },
   colidiuCom: function(outro) {
   
   }
}