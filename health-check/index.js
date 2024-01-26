const {postConversation, postToken, postConversationToken, postConversationEnd} = require('../services/post'); 

module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    const token = JSON.parse(await postToken()).token;
    const convo = JSON.parse(await postConversationToken(token));
    const startHealthCheck = await postConversation(convo.token, convo.conversationId)
    context.log(startHealthCheck)
    const endHealthCheck = await postConversationEnd(convo.token, convo.conversationId)
    context.log(endHealthCheck)

    if (myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);   
};