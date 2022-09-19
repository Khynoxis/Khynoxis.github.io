const ingresartexto = document.querySelector(".ingresar-texto")
const mensaje = document.querySelector(".mensaje")
const texto1 = document.querySelector(".texto1")
const texto2 = document.querySelector(".texto2")
const boton = document.querySelector(".copiar")

    function btnEncriptar(){
        const textoencriptado = encriptar(ingresartexto.value)
        mensaje.value = textoencriptado;
        mensaje.style.backgroundImage="none"
        ingresartexto.value = "";
        boton.style.display = "block"
        texto1.style.display = "none"
        texto2.style.display = "none"
    }
    function btnDesencriptar(){
        const textodesencriptado = desencriptar(ingresartexto.value)
        mensaje.value = textodesencriptado ;
        ingresartexto.value= "";
    }
    

    function encriptar(textoEncriptar){
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        textoEncriptar = textoEncriptar.toLowerCase();
        for ( let i=0 ; i < matrizCodigo.length ; i++){
            if(textoEncriptar.includes(matrizCodigo[i][0])){
                textoEncriptar = textoEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            }
        } 
        return textoEncriptar;
    }   
    function desencriptar(textodesencriptar){
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        textodesencriptar = textodesencriptar.toLowerCase();
        for ( let i=0 ; i < matrizCodigo.length ; i++){
            if(textodesencriptar.includes(matrizCodigo[i][1])){
                textodesencriptar = textodesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
            }
        } 
        return textodesencriptar;
    }   
    function copiar(){
        let mensaje = document.getElementById('texto')
        mensaje.select();
        mensaje.setSelectionRange(0,99999);
        document.execCommand('copy')
    }