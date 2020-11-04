
// Outer functions (to be reused as if they are inheretend from a parent class)
// remove element from the array
const removeElementById = (array, id) => {
    for(let i=0; i<array.length; i++){
        if(array[i].getId() == id){
            array = array.slice((id, 1))
        }
    }
    return array
}

// remove element from the array
// const removeElementById = (array, id) => {
//     if(id < array.length && id >=0){
//         array = array.slice((id, 1))
//         // changing the id number of the comments after the deleted one, so they keep matching their indexes
//         // Not perfect solution
//         for(let i=id; i < array.length; i++){
//             array[id].setId(i)
//         }
//     }else{
//         console.log("The Id is not in the range of the array")
//     }
//     return array
// }

// get element from an array
// const getElementById = (array, id) => {
//     if(id < array.length && id >=0){
//         return array[id]
//     }else{
//         return null
//     }
// }

// get element from an array, returns null of not found 
const getElementById = (array, id) => {
    for(let i=0; i<array.length; i++){
        if(array[i].getId() == id){
            return array[id]
        }else{
            return null
        }
    }
}

// add element to the end of the array
const addElement = (array, element) => {
    array.push(element);
} 

// ===================================================================

const Tweets = function(){
    // List of all tweets
    let allTweets = []

    // tweet module
    // ================================================================
    const Tweet = (tweetContent) => {
        let tweetText = tweetContent
        let tweetId = 0

        let comments = []
        // comment module
        // ====================================================
        const Comment = (commentContent) => {
            let commentText = commentContent
            let commentId = 0
            const getcommentContent = ()=> commentText
            const setcommentContent = (value) => {
                commentText= value
            }
            const getcommentId = ()=> commentId
            const setcommentId = (value) => {
                commentId= value
            }
            return{
                getcommentContent,
                setcommentContent,
                getId: getcommentId,
                setId: setcommentId
            }
        }
        // =====================End of comment module==================================
        const getTweetContent = () => tweetText
        const setTweetContent = (value) => {
            tweetText = value;
        }

        const getTweetId = () => tweetId
        const setTweetId = (value) => {
            tweetId = value;
        }

        // add a comment to the tweet
        const addComment = (value) => {
            const comment  = Comment(value)
           // comment.setId("T"+this.getId()+"-"+comments.length)
           // this refers to the global object instead of the one who called the function even though we are using arrow function
           comment.setId("C-"+comments.length)
            addElement(comments, comment)
            return comment
        } 
        // remove comment from the tweet
        const removeCommentById = (id) => {
            comments = removeElementById(comments, id)
        }

        // get specific comment by its id/index
        const getCommentById = (id) => {
            return getElementById(comments, id)
        }

        const getNumberOfComments = () => {
            return comments.length
        }

        const getComments = () => {
            return comments
        }

        return{
            getTweetContent,
            setTweetContent,
            getId: getTweetId,
            setId : setTweetId,
            addComment,
            removeCommentById,
            getCommentById,
            getNumberOfComments,
            getComments
        }

    }
    // =======================End of tweet module=========================================

    // Post a tweet
    const postTweet = (tweetContent) => {
        const tweet = Tweet(tweetContent)
        tweet.setId(allTweets.length)
        addElement(allTweets, tweet)
        return tweet
    }

    // get specific tweet by its id/index
    const getTweetById = (id) => {
        return getElementById(comments, id)
    }

    // delete a specific tweet based on its id/index
    const removeTweetById = (id) => {
        // allTweets array is being called as value, and not as reference, that's why it has been reassigned again
        allTweets = removeElementById(allTweets, id)
    }

    const getAllTweets = () => {
        return allTweets
    }

    return {
        postTweet,
        getTweetById,
        removeTweetById,
        getPosts: getAllTweets
    }

}
// ================End of Tweets module================================================

