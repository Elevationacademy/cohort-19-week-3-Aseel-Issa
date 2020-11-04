

const Renderer = function(){

    const renderPosts = (tweets) => {
        $('#posts').empty()
        for(let i=0; i<tweets.length; i++){
            let element = `<div class=post data-id=${tweets[i].getId()}><div class=tweet >${tweets[i].getTweetContent()}</div>`
            let comments = tweets[i].getComments()
            for(let j=0; j<comments.length; j++){
                // Comment id is the index the same as the index of the comment
                element+=`<div class=comment data-id=${comments[j].getId()}>id: ${comments[j].getId()} - ${comments[j].getcommentContent()}</div>`
            }
            element+=`</div>`
            $('#posts').append(element)
        }

    }


    return {
        renderPosts
    }

}