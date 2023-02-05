/*
then: caso resolvida, faça()
catch: caso erro, faça()
*/
//chama a api
let cep = fetch('https://viacep.com.br/ws/01001000/json/')
//converte os resultados de byte em JSON
    .then(resposta=>resposta.json())
    .then(r=>{
//caso o cep tenha formato válido mas não exista, 'erro' recebe TRUE
        if(r.erro){
            throw Error('\nEsse cep não existe!')
        }else{
//recebe o JSON e mostra na tela
            console.log(r)}
    })
//recebe o erro e mostra na tela dos ceps fora de formato
    .catch(formatoErrado=>console.log(formatoErrado, 'Cep com formato inválido'))
    .finally(()=>console.log('Fim do Processamento'));
