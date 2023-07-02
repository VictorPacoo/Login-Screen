let btnEntrar = document.getElementById("btnEntrar").addEventListener("click", function(){
    const inpUsuario = document.getElementById("inpUsuario").value
    const inpSenha = document.getElementById("inpSenha").value

    if (inpUsuario === '' || inpSenha === '' ){
        if (inpUsuario === '') {
            alert("Digite seu Usuário")
        } 
        if (inpSenha === '') {
            alert("Digite sua Senha")
        } 
    } else {
        alert("Usuário Cadastrado")
    }
})
console.log(btnEntrar)