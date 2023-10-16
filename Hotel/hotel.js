var hotel;
var valorDiaria;
var nomeHospede;
var nome;
var diasReserva;
var valorReserva;
var vetorA = [15];
entrada();
function entrada() {
hotel = prompt("Qual o nome do hotel?");
alert("O nome do hotel é: "+hotel);
login();
}
function login(){
    nome = prompt("Nome do usuário");
    var senha = parseInt(prompt("Senha"));
    if (senha == 2678){
        alert("Bem vindo ao Hotel "+hotel+", "+nome+". É um imenso prazer ter você por aqui!");
        inicio();
    }else{
        alert("Senha incorreta");
        login();
    }
}
function inicio(){
    var menuNav = parseInt(prompt("O que deseja?\n1-Reservar quarto\n2-Cadastrar hóspedes\n3-Cadastro e pesquisa de hóspedes\n4-Eventos\n5-Buffet\n6-Auditórios\n7-Reserva de restaurante\n8-Abastecimento do carro\n9-Manutenção de ar-condicionado\n0-Sair"));
    switch (menuNav){
        case 1:
            reserva1();
        break;
        case 2:
            cadastroHospedes1();
        break;
        case 3:
            abaCadastro();
        break;
        case 4:
            eventos();
        break;
        case 5:
            buffet();
        break;
        case 6:
            auditorios();
        break;
        case 7:
            reservaRestarante();
        break;
        case 8:
            abastecimento();
        break;
        case 9:
            arCondicionado();
        break;
        case 0:
            alert("Obrigado "+nome+", foi um prazer ter você por aqui!");
        break;
        default:
            alert("Digite um valor válido");
            inicio();
    }
}
function reserva1(){
    valorDiaria = parseFloat(prompt("Qual o valor padrão da diária?"));
    if (valorDiaria<=0){
        alert("Valor inválido"+nome);
        reserva1();
    }else{
        reserva2();
    }
}
function reserva2(){
    diasReserva = parseInt(prompt("Quantas diárias serão necessárias?"));
        if(diasReserva<=0 || diasReserva>30){
            alert("Valor inválido"+nome);
            reserva2();
        }else{
            valorReserva = valorDiaria*diasReserva;
            alert("O valor de "+diasReserva+" dias de hospedagem é de R$"+valorReserva);
            reserva3();
        }
}
function reserva3(){
    nomeHospede = prompt("Qual o nome do hóspede?");
    var confirmacaoReserva = prompt(nome+", você confirma a hospedagem para "+nomeHospede+" por "+diasReserva+" dias? S/N");
    if(confirmacaoReserva=="S"){
        alert(nome+", reserva efetuada para "+nomeHospede+". O valor total é de R$"+valorReserva+".");
        inicio();
    }else if(confirmacaoReserva=="N"){
        alert(nome+", reserva não efetuada.");
        inicio();
    }
}
function cadastroHospedes1(){
    valorDiaria = parseFloat(prompt("Qual o valor padrão da diária?"));
    if (valorDiaria<=0){
        alert("Valor inválido"+nome);
        cadastroHospedes1();
    }else{
        cadastroHospedes2();
    }
}
function cadastroHospedes2(){
    var vetorB = [];
    var vetorC = [];
    var totalHospedes = 0;
    var gratuidade = 0;
    var meia = 0;
    for (var i=0;i<Infinity;i++){
        vetorB[i] = prompt("Qual o nome do hóspede?");
        if (vetorB[i]==="PARE"){
            break;
        }
        vetorC[i] = prompt("Qual a idade do hóspede?");
        if(vetorC[i]<6){
            gratuidade++;
            alert(vetorB[i]+" cadastrado(a) com sucesso. "+vetorB[i]+" possui gratuidade.");
        }else if(vetorC[i]>60){
            meia++;
            alert(vetorB[i]+" cadastrado(a) com sucesso. "+vetorB[i]+" paga meia.");
        }else if(vetorC[i]>=6 && vetorC[i]<=60){
            totalHospedes++;
            alert(vetorB[i]+" cadastrado(a) com sucesso.");
        }
    }
    valorReserva = totalHospedes*valorDiaria;
    valorReserva = valorReserva+((valorDiaria/2)*meia);
    alert(nome+", o valor das hospedagens é: R$"+valorReserva+"; "+gratuidade+" gratuidade(s); "+meia+" meia(s)");
    inicio();
}
function abaCadastro(){
    var menuCadastro = parseInt(prompt("1-Cadastrar\n2-Pesquisar\n3-Lista\n4-Sair"));
    switch(menuCadastro){
        case 1:
            cadastroHospedes3();
        break;
        case 2:
            pesquisarHospedes();
        break;
        case 3:
            listaHospedes();
        break;
        case 4:
            inicio();
        break;
        default:
            alert("Digite um valor válido");
            abaCadastro();
        break;
    }
}
function cadastroHospedes3(){
    for (var i=0;i<15;i++){
        vetorA[i] = prompt("Digite o nome do hóspede");
        alert("Hóspede "+vetorA[i]+" foi cadastrado(a) com sucesso.");
        var confirmacao = prompt("Deseja cadastrar mais um? S/N");
        if (confirmacao == "N"){
            break;
        }
        if(i==14){
            alert("Limite de cadastros atingido");
        }
    }
    abaCadastro();
}
function pesquisarHospedes(){
    var pesquisaConfirm = false;
    var pesquisa = prompt("Digite o nome do hóspede");
    for (var i=0;i<15;i++){
        if (pesquisa==vetorA[i]){
            alert("Hóspede "+vetorA[i]+" foi encontrado(a)");
            pesquisaConfirm = true;
            break;
        }
    }
    if(!pesquisaConfirm){
        alert("Hóspede não encontrado");
    }
    abaCadastro();
}
function listaHospedes(){
    for (var i=0;i<15;i++){
        if(vetorA[i]==undefined){
            break;
        }
        alert(vetorA[i]);
    }
    abaCadastro();
}
function eventos(){
    var garcomPrecoHora = 10.50;
    var duracaoEvento = parseInt(prompt("Qual a duração do evento em horas?"));
    var garcomQuant = parseInt(prompt("Quantos garçons serão necessários?"));
    var garcomPrecoFinal = garcomPrecoHora * garcomQuant;
    garcomPrecoFinal = garcomPrecoFinal * duracaoEvento;
    alert("Custo total: R$"+garcomPrecoFinal);
    var confirmacaoGarcom = prompt("Gostaria de efetuar a reserva? S/N");
    if(confirmacaoGarcom=="S"){
        alert(nome+", reserva efetuada com sucesso");
        inicio();
    }else{
        alert(nome+", reserva não efetuada");
        inicio();
    }
}
function buffet(){
    var quantidadeConvidados = parseInt(prompt("Qual o número de convidados para o evento?"));
    if (quantidadeConvidados > 350){
        alert("Quantidade de convidados superior à capacidade máxima.");
        buffet();
    }else if(quantidadeConvidados<0){
        alert("Quantidade inválida.");
        buffet();
    }
    var cafeLitros = quantidadeConvidados * 0.2;
    var aguaLitros = quantidadeConvidados * 0.5;
    var quantidadeSalgados = quantidadeConvidados * 7;
    var cafePreco = cafeLitros * 0.80;
    var aguaPreco = aguaLitros * 0.40;
    var salgadoPreco = quantidadeSalgados * 0.34;
    var buffetPrecoFinal = cafePreco + aguaPreco + salgadoPreco;
    var buffetPrecoFinalFormatado = buffetPrecoFinal.toFixed(2);
    alert("O evento precisará de "+cafeLitros+" litros de café, "+aguaLitros+" litros de água e "+quantidadeSalgados+" salgados. O custo total do buffet será de R$"+buffetPrecoFinalFormatado);
    var confirmacaoBuffet = prompt("Gostaria de efetuar a reserva? S/N");
    if(confirmacaoBuffet=="S"){
        alert(nome+", reserva efetuada com sucesso");
        inicio();
    }else{
        alert(nome+", reserva não efetuada");
        inicio();
    }
}
function auditorios(){
    var quantidadeConvidadosAuditorio = parseInt(prompt("Qual o número de convidados para o evento?"));
    if (quantidadeConvidadosAuditorio>350){
        alert("Quantidade de convidados superior à capacidade máxima.");
        auditorios();
    }else if(quantidadeConvidadosAuditorio<0){
        alert("Quantidade inválida.");
        auditorios();
    }
    if(quantidadeConvidadosAuditorio<220){
        if(quantidadeConvidadosAuditorio>150){
            var cadeirasExtras = quantidadeConvidadosAuditorio - 150;
            alert("Use o auditório Laranja (inclua mais "+cadeirasExtras+" cadeiras)");
        }else{
            alert("Use o auditório Laranja");
        }
    }else{
        alert("Use o auditório Colorado");
    }
    var confirmacaoAuditorio = prompt("Gostaria de efetuar a reserva? S/N");
    if(confirmacaoAuditorio=="S"){
        alert(nome+", reserva efetuada com sucesso");
        inicio();
    }else{
        alert(nome+", reserva não efetuada");
        inicio();
    }
}
function reservaRestarante(){
    var diaSemanaResposta = prompt("Qual o dia do seu evento?");
    if(diaSemanaResposta=="segunda" || diaSemanaResposta=="terça" || diaSemanaResposta=="quarta" || diaSemanaResposta=="quinta" || diaSemanaResposta=="sexta"){
        var horaReserva = parseInt(prompt("Qual a hora do seu evento?"));
        if(horaReserva<7 || horaReserva>23){
            alert("Restaurante indisponível");
            reservaRestarante();
        }else{
            var nomeEmpresa = prompt("Qual o nome da empresa?");
            alert("Restaurante reservado para "+nomeEmpresa+". "+diaSemanaResposta+" às "+horaReserva+"hs.");
            inicio();
        }
    }else if(diaSemanaResposta=="sabado" || diaSemanaResposta=="domingo"){
        var horaReserva = parseInt(prompt("Qual a hora do seu evento?"));
        if(horaReserva<7 || horaReserva>15){
            alert("Restaurante indisponível");
            reservaRestarante();
        }else{
            var nomeEmpresa = prompt("Qual o nome da empresa?");
            alert("Restaurante reservado para "+nomeEmpresa+". "+diaSemanaResposta+" às "+horaReserva+"hs.");
            inicio();
        }
    }
}
function abastecimento(){
    var alcoolWayne = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
    var gasolinaWayne = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
    var alcoolStark = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
    var gasolinaStark = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
    const vantagemWayne = alcoolWayne <= (gasolinaWayne*0.7);
    const vantagemStark = alcoolStark <= (gasolinaStark*0.7);
    var postoMaisBarato = "";
    var combustivelMaisBarato = "";
    if (vantagemWayne && vantagemStark){
        if(alcoolWayne<alcoolStark){
            postoMaisBarato = "Wayne Oil";
            combustivelMaisBarato = "álcool";
        }else{
            postoMaisBarato = "Stark Petrol";
            combustivelMaisBarato = "álcool";
        }
    }else if(vantagemWayne){
        postoMaisBarato = "Wayne Oil";
        combustivelMaisBarato = "álcool";
    }else if(vantagemStark){
        postoMaisBarato = "Stark Petrol";
        combustivelMaisBarato = "álcool";
    }else{
        if(gasolinaWayne<gasolinaStark){
            postoMaisBarato = "Wayne Oil"
            combustivelMaisBarato = "gasolina";
        }else{
            postoMaisBarato = "Stark Petrol";
            combustivelMaisBarato = "gasolina";
        }
    }
    alert(nome+", é mais barato abastecer com "+combustivelMaisBarato+" no posto "+postoMaisBarato+".");
    inicio();
}
function arCondicionado(){
    var empresa = [];
    var valorTotal = [];
    var valorMaisBarato = Infinity;
    var empresaComMelhorPreco = "";
    for (var i=0;i<Infinity;i++){
        empresa[i] = prompt("Qual o nome da empresa?");
        var valorAparelho = parseFloat(prompt("Qual o valor do aparelho"));
        var quantAparelho = parseInt(prompt("Qual a quantidade de aparelhos?"));
        var porcenDesconto = parseFloat(prompt("Qual a porcentagem de desconto?"));
        if (porcenDesconto>0){
            var minAparelho = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));
        }
        valorTotal[i] = valorAparelho * quantAparelho;
        if(porcenDesconto>0 && minAparelho<=quantAparelho){
            var desconto = (porcenDesconto / 100) * valorTotal[i];
            valorTotal[i] -= desconto;
        }
        if(valorTotal[i]<valorMaisBarato){
            valorMaisBarato = valorTotal[i];
            empresaComMelhorPreco = empresa[i];
        }
        alert("O serviço de "+empresa[i]+" custará R$"+valorTotal[i]);
        var confirmacaoArcondicionado = prompt("Deseja informar novos dados, "+nome+"? (S/N)");
        if(confirmacaoArcondicionado=="N"){
            break;
        }
    }
    alert("O orçamento de menor valor é o ["+empresaComMelhorPreco+" por R$"+valorMaisBarato+"]");
    inicio();
}