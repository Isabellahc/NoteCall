
function definirAlerta() {

  const dataInput = document.getElementById("data");
  const horaInput = document.getElementById("hora");
  const assuntoInput = document.getElementById("as");
  const mensagemInput = document.getElementById("tx");

  const dataString = dataInput.value;
  const horaString = horaInput.value;
  const assunto = assuntoInput.value;
  const mensagem = mensagemInput.value;

  const dataHora = new Date(`${dataString}T${horaString}:00`);

  const agora = new Date();

  if (dataHora <= agora) {
    alert("O horário e data especificados já passaram.");
    return;
  }

  const novoBotaoLimpar = document.createElement("button");
  novoBotaoLimpar.type = "button";
  novoBotaoLimpar.className = "btl";
  novoBotaoLimpar.innerHTML = "Apagar";
  novoBotaoLimpar.addEventListener("click", function() {
  
    div.removeChild(novoElemento);
    div.removeChild(novoSpanLimpar);
    dataInput.value = "";
    horaInput.value = "";
    assuntoInput.value = "";
    mensagemInput.value = "";
  });

  const novoSpanLimpar = document.createElement('span');
  novoSpanLimpar.className = "btn-limpar";
  novoSpanLimpar.appendChild(novoBotaoLimpar);

  const div = document.getElementById("resultado");
  const novoElemento = document.createElement('div');
  novoElemento.className = "result";
  novoElemento.innerHTML = `<p>Você vai receber uma notificação na seguinte data: <b>${dataString} às ${horaString}</b>, tratando do assunto: <b>${assunto}</b>.<br><br>Mensagem: <div class='text'>${mensagem}<br></div></p>`;

  const tempoRestante = dataHora - agora;

  const alertDismissed = () => {
    console.log("as");
  }

  setTimeout(() => {

    div.removeChild(novoElemento);
    div.removeChild(novoSpanLimpar);

    alert(` ${assunto} chegou!\nAssunto: ${assunto}\nMensagem: ${mensagem}`);
  }, tempoRestante);

  if (div.childNodes.length === 0) {
    div.appendChild(novoElemento);
    div.appendChild(novoSpanLimpar);
  } else {
    div.insertBefore(novoSpanLimpar, div.childNodes[0]);
    div.insertBefore(novoElemento, div.childNodes[0]);
  }
}

