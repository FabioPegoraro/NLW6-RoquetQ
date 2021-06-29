module.exports = {

    index(req, res){

        //Aqui está as informações que veio do formulário e a senha
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password

        console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`)
    }
}