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

let estado = false;

const modo = document.querySelector('.modo__oscuro');

modo.addEventListener('click',()=>{
    estado =!estado;
    if(estado)
    {
        document.documentElement.style.setProperty("--fondo","linear-gradient(156deg, rgba(27,6,117,1) 50%, rgba(43,24,126,1) 65%, rgba(72,56,143,1) 84%, rgba(128,117,176,1) 100%, rgba(156,153,153,1) 100%)");
        document.documentElement.style.setProperty("--color-fondo-logo","#2D13A2");
        document.documentElement.style.setProperty("--color-violetapastel","00000");
    }
    else
    {
        document.documentElement.style.setProperty("--color-violetapastel","#998FC7");
        document.documentElement.style.setProperty("--fondo","linear-gradient(153deg, rgba(91,62,219,1) 36%, rgba(143,123,230,1) 62%, rgba(255,255,255,1) 96%)");
        document.documentElement.style.setProperty("--color-fondo-logo","#7257ec");
    }
});






