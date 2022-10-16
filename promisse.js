//email => Resolve: "OK" - Reject: "Falha"
//save => Resolve: "Dado salvo" - Reject: "Ocorreu um erro, foi mal :("

function getId(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(5)
        },1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("victorlima@guia.com.br")
        }, 2000);
    })
}

function enviarEmail(body, to){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = true;
            if(!deuErro){
                resolve({time:6, to: "marcelo@udemy.com"}) //Promessa OK!
            }else{
                reject("FILA CHEIA") //Fai mal, eu falhei :(
            }
        },4000)
    });
}

function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "Victor", lang:"JS"},
                {name: "Lima", lang:"C#"},
                {name: "Daniel", lang:"Java"}
            ])
        },3000)
    })
}

async function principal(){

    var id = await getId();
    var email = await buscarEmailNoBanco(id);

    try {
        await enviarEmail("Olá, como  vai?", email);
        console.log("Email enviado com sucesso!");
    } catch (error) {
        console.log(error);
    }
}

principal();


/*
getId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail("Olá, como vai?", email).then(() =>{
            console.log("Email enviado, para o usuário com id: " + id);
        }).catch(err => {
            console.log(err);
        })
    })

})
*/