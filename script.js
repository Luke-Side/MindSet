var numeroSecreto = parseInt(Math.random() * 1000 + 1);


//enquanto o chute for diferente do número secreto
while (chute != numeroSecreto) {
  var chute = prompt ('Digite um número entre 1 e 1000');
  //se o chute for igual ao número secreto
  if (chute == numeroSecreto) {
    alert ('Nice, boa meu mano!👍')
  } else if (chute > numeroSecreto) {
    alert('Errou, chuta baixo!')
  } else if (chute < numeroSecreto) {
    alert('Errou, ta pouco!')
  }
}
