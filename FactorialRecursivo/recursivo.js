function factorial(n) {
	if( n == 1) {
		return 1;
	}
		
	return n * factorial(n -1);
}

function calculate() {
	//Extrair o valor da Caixa de Texto
	var input = document.getElementById('numero').value;
	var resultado = factorial(input);
	
	//Output
	
	document.getElementById('output').innerHTML = resultado;
}
	