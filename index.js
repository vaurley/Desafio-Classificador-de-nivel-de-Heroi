let nome = "Vaurley"
let xp = 10002

let nivel;
if (xp < 1000) {
    nivel = ("Você é nível Ferro");
    }   else if (xp <= 2000) {
        nivel = ("Você é nível Bronze");
   }    else if (xp <= 5000) {
         nivel = ("Você é nível Prata");
   }    else if (xp <= 7000) {
            nivel = ("Você é nível Ouro");
   }else if (xp <= 8000) {
        nivel = ("Você é nível Platina");
   }else if (xp <= 9000) {
        nivel = ("Você é nivel Ascendente")
   }else if (xp <= 10000) {
        nivel = ("Você é nível Imortal")
   }else {
        nivel = ("Você é nível Radiante")
    }

console.log("O herói " + nome + " Está no nivel " + nivel)

          

