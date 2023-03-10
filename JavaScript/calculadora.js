
/*
    Modifying the layout of the calculator digital,
    and creating the calculate function using JavaScript..
*/


//Creating a calculate function with to parameters.

function calcular(tipo, valor){

    if(tipo === 'acao'){

        if(valor === 'c'){
            //limpar visor
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }

        if(valor === '='){
            //estabelecer uma variavel
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }
    }else if(tipo === 'valor'){
        var valor_campo = document.getElementById('resultado').value
        document.getElementById('resultado').value = valor_campo + valor
    }
}