const estado = document.getElementById('estado')
const cidade = document.getElementById('cidade')
const logradouro = document.getElementById('endereco');
const __bairro = document.getElementById('bairro')


const mensagemErro = document.getElementById('erro')
function limpaCampos(){
    estado.value = ''
    cidade.value = ''
    logradouro.value = ''
    __bairro.value = ''
}
async function buscaEndereco(cep){
    mensagemErro.innerHTML=""
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultaCEPConvertida = await consultaCEP.json()
        if(consultaCEPConvertida.erro){
            limpaCampos()
            mensagemErro.innerHTML=`<p>CEP inexistente! Tente novamente.</p>`
            throw Error('Cep não existente')
        }else{
            console.log(consultaCEPConvertida)
        }
        estado.value = consultaCEPConvertida.uf
        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        __bairro.value = consultaCEPConvertida.bairro
    } catch(error){
        limpaCampos()
        mensagemErro.innerHTML=`<p>CEP de formato inválido! Tente Novamente.</p>`;
        console.log(error)
    }
}
let cep = document.getElementById('cep');
cep.addEventListener('focusout',()=> buscaEndereco(cep.value))
