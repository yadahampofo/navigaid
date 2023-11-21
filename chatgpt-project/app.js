const API_KEY = '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'

const submitButton = document.querySelector("#submit");

async function getMessage() {
    console.log('clicked');
    const options={
        method: 'POST',
        headers:{
            'Authorization' : `Bearer ${API_KEY}`,
            'Content-Type' : 'application/json'
    },
        body:JSON.stringify({
            model : "gpt-3.5-turbo",
            messages:[{role:"user", content:"Hello!"}],
            max_tokens: 10
        })

    }

    function hndlr(response) {
        for (var i = 0; i < response.items.length; i++) {
            var item = response.items[i];
            // Make sure HTML in item.htmlTitle is escaped.
            document.getElementById("content").append(
                document.createElement("br"),
                document.createTextNode(item.htmlTitle)
            );
        }
    }
    
    try {
        const response =  await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
    } catch (error){
        console.error(error)

    }
}

submitButton.addEventListener('click', getMessage);

