const textArea= document.getElementById("txt_ingreso");
const mensaje = document.getElementById("txt_salida");
let estado = false;
const modo = document.querySelector('.modo__oscuro');
const alerta = document.querySelector("#alerta");
const cerrarAlerta = document.querySelector("#cerrar_alerta");
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
        mostrarAlerta("El texto es invalido o no ha ingresado texto");
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
        mostrarAlerta("El texto es invalido o no ha ingresado texto");
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
        mostrarAlerta("Ingrese un texto para copiar ");
    }
}

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

function mostrarAlerta(textoIngresado){
    alerta.showModal();
    let texto = document.querySelector("#mensaje_alerta");
    texto.innerHTML=textoIngresado;
}

cerrarAlerta.addEventListener('click',()=>{
    alerta.close();
})






