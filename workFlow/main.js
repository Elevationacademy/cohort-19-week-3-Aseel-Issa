
const posts = []

const model = function(){
    const addPost= (post) => {
        posts.push(post)
    }

    const getPostsList = () => {
        return posts
    }
    return{
        addPost,
        getPostsList
    }
}



const controller = function () {
    const addPostEvent = function () {
        // Handels the user's request to post on timeline
        $('#post').click(function () {
            let post = {
                name: $('#name').val(),
                text: $('#wish').val()
            }
            // empty fields
            $('#name').val('')
            $('#wish').val('')

            model().addPost(post)
            render().updateList()

        })
    }

    const run = function(){
        addPostEvent();
    }

    return { run }


}

const render = function(){
    // initiate first page
    const initPage = function(){
        controller().run()
        updateList()
    }

    // update the posts list in the view
    const updateList = function(){
        const posts = model().getPostsList()
        $('#postView').empty()
        for (let i=0; i<posts.length; i++) {
            const element = `<div><p class=name>${posts[i].name}:&nbsp;</p><p> ${posts[i].text}</p></div>`
            $('#postView').append($(element))
        }
    }

    return {
        initPage,
        updateList
    }
}

const main = function(){
    render().initPage()
}

main()