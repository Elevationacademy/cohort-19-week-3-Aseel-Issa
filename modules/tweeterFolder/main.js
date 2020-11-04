const test = function(){
    const tweetsList = Tweets()
    const renderer = Renderer()
    const tweet = tweetsList.postTweet("My first tweet")
    tweet.addComment("My first comment")
    tweet.addComment("My Second comment")
    tweet.addComment("My Third comment")

    const tweet2 = tweetsList.postTweet("My second tweet")
    tweet2.addComment("My first comment")

    // console.log("Before deletion, Tweet: "+tweet.getTweetContent())
    // for (let i=0; i<tweet.getNumberOfComments(); i++){
    //     console.log("   "+i+"-Comment: "+tweet.getCommentById(i).getcommentContent())
    // }
    // renderer.renderPosts(tweetsList.getPosts())

    // removing the second comment
    // tweet.removeCommentById(1)

    // console.log("After deletion, Tweet: "+tweet.getTweetContent())
    // for (let i=0; i<tweet.getNumberOfComments(); i++){
    //     console.log("   "+i+"-Comment: "+tweet.getCommentById(i).getcommentContent())
    // }

    renderer.renderPosts(tweetsList.getPosts())

}

test()