//asynchronous

function sendEmail(body, to, callback){
    setTimeout(() => {
        // .....lógica
        var deuErro = true;

        if (deuErro) {
            callback(12,"O envio de e-mail falhou!");
        }else{
            callback(12);
        }

        
    }, 2000);
}

console.log("Sending an e-mail!");
sendEmail("Hi, Be welcome!","jose@gmail.com",(time,erro) =>{
    if(erro == undefined){ //OK
        console.log("TUDO OK!");
        console.log(`Tempo: ${time}s`)
    }else{//Opa, deu erro!
        console.log("Ocorreu um erro: " + erro);
    }
    
});
