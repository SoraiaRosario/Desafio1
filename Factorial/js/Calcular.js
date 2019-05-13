function mostrarResultado(escolha) {
    var n1 = parseFloat(document.getElementById('num1').value);
   
    var r;
    var c = escolha;

    switch (c) {
        

        case '1':
            r = 1;
            while (n1 > 0) {
                r = r * n1;
                n1--;
            }

            break;

        default:
            break;

    }
    document.getElementById('result').value = r;



}