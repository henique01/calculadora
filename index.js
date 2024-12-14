function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    // Obtém o conteúdo atual (texto ou número) do elemento com id 'resultado'.
    // 'numero' agora contém o valor que está dentro desse elemento (geralmente é o valor exibido na calculadora).
    
    document.getElementById('resultado').innerHTML = numero + num;
    // Atualiza o conteúdo do elemento com id 'resultado' concatenando o valor atual 'numero' com o novo valor 'num'.
    // 'num' é o parâmetro passado para a função, que provavelmente será um número ou um operador quando o botão da calculadora for pressionado.
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);

    // O método 'substring' extrai uma parte da string, começando do índice 0 até o índice (length - 1),
    // ou seja, ele retorna a string sem o último caractere. Exemplo: "1234" se tornaria "123".    

}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = "Nao foi...";
    }
}







