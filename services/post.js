const request = require('request');

const postToken = () => {
    const options = {
        'method': 'POST',
        'url': 'https://directline.botframework.com/v3/directline/tokens/generate',
        'headers': {
            'Authorization': `Bearer ${direct_line_secret}` 
        }
    }
   
    return new Promise((resolve, reject) => {
        request(options, function(error, res, body) {
            if (!error && res.statusCode === 200) {
                resolve(body);
            } else {
                reject(error);
            }
        })
    })
}

const postConversationToken = (token) => {
    const options = {
        'method': 'POST',
        'url': 'https://directline.botframework.com/v3/directline/conversations',
        'headers': {
            'Authorization': `Bearer ${token}` 
        }
    }
   
    return new Promise((resolve, reject) => {
        request(options, function(error, res, body) {
            if ((!error && (res.statusCode === 201 || res.statusCode === 200))) {
                resolve(body);
            } else {
                reject(error);
            }
        })
    })
}

const postConversation = (token, conversationId) => {
    const options = {
        'method': 'POST',
        'url': `https://directline.botframework.com/v3/directline/conversations/${conversationId}/activities`,
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({
            "type": "message",
            "from": {
              "id": "Integration"
            },
            "text": "Health Check"
          })
    }
   
    return new Promise((resolve, reject) => {
        request(options, function(error, res, body) {
            if (!error && res.statusCode === 200) {
                resolve(body);
            } else {
                console.log(options)
                console.log(body)
                console.log(res.statusCode)
                reject(error);
            }
        })
    })
}

const postConversationEnd = (token, conversationId) => {
    const options = {
        'method': 'POST',
        'url': `https://directline.botframework.com/v3/directline/conversations/${conversationId}/activities`,
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({
            "type": "endOfConversation",
            "from": {
                "id": "Integration"
            }
        })
    }
   
    return new Promise((resolve, reject) => {
        request(options, function(error, res, body) {
            if (!error && res.statusCode === 200) {
                resolve(body);
            } else {
                console.log(options)
                console.log(error)
                console.log(res.statusCode)
                reject(error);
            }
        })
    })
}

exports.postToken = postToken;
exports.postConversationToken = postConversationToken;
exports.postConversation = postConversation;
exports.postConversationEnd = postConversationEnd;



/* body: data
}; */