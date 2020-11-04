

const create_initial_page = function(){
    const list = $('<ul></ul>')
    const firstItem = $('<li>Quimby</li>')
    list.append(firstItem)

    const input = $('<input type=text placeholder=\"Human Name\">')
    const button = $('<button>Add human</button>')

    button.click(function() {
        const name = input.val()
        input.val('')
        const item = $(`<li>${name}</li>`)
        list.append(item)
    })
    $('body').on('click', 'li', function(){
        $(this).remove()
    })
    $('body').append(list)
    $('body').append(input)
    $('body').append(button)
}

const task_1 = function(){
    create_initial_page()
}

const task_4 = function(){
    const items  = $(".item")
    items.click(function(){
        if($(this).data('instock') === true){
            $('#cart').append($(`<p>${$(this).text()}</p>`))
        }
    })
    // let item
    // for (let i=0; i<items.length; i++) {
    //     if(item.data(instock) == true){
    //     item.click(function(){
    //         $('#cart').append($(`<p>${item.text()}</p>`))
    //     })
    //     }
    // }
}
task_4()
