const textArea= document.getElementById("txt_ingreso");
const mensaje = document.getElementById("txt_salida");
const requisitos = /^[a-z\nñ\s]+$/;

activarBoton('none');

function activarBoton(valor)
{
    if(textArea!=''||mensaje !='')
    {
        document.querySelector('.boton__copiar').style.display=valor;
    }
}

function botonEncriptar()
{
    
    if(requisitos.test(textArea.value) && textArea.value!='')
    {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        document.getElementById('div_invisible').style.display="none";
        activarBoton('initial');
    }
    else
    {
        alert('El texto es invalido o no ha ingresado texto');
        mensaje.value = '';
        document.getElementById('div_invisible').style.display="initial";
    }
    textArea.value='';
    document.querySelector(".boton__limpiar").removeAttribute('disabled');
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imer"],["a","ai"],["o","ober"],["u","ufat"]];

        for(let i=0;i < matrizCodigo.length;i++)
            {
                if(stringEncriptado.includes(matrizCodigo[i][0]))
                {
                    stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
                }
            }
                   
        return stringEncriptado;
}

function botonDesencriptar()
{
    
    if(requisitos.test(textArea.value) && textArea.value!='')
    {
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.value = textoDesencriptado;
        document.getElementById('div_invisible').style.display="none";
        activarBoton('initial');
    }
    else
    {
        alert('El texto es invalido o no ha ingresado texto');
        mensaje.value = '';
        document.getElementById('div_invisible').style.display="initial";
    }
    textArea.value='';
    document.querySelector(".boton__limpiar").removeAttribute('disabled');
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imer"],["a","ai"],["o","ober"],["u","ufat"]];

        for(let i=0;i < matrizCodigo.length;i++)
            {
                if(stringDesencriptado.includes(matrizCodigo[i][1]))
                {
                    stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
                }
            }
                   
        return stringDesencriptado;
}

function limpiartexto()
{
    mensaje.value='';
    document.getElementById('div_invisible').style.display='initial';
    document.querySelector('.boton__limpiar').setAttribute('disabled','true');
    activarBoton('none');
}

function copiar(){
    if(mensaje.value !='')
    {
        navigator.clipboard.writeText(mensaje.value);
        alert('Texto Copiado');
    }
    else
    {
        alert('Ingrese un texto para copiar');
    }
}


