let all_btn = document.querySelectorAll("button") // selecting all buttons by querySelectorAll | querySelectorAll return nodelist => [btn,btn,btn ] like array
// console.log(all_btn);  // nodelist => [btn,btn] like array 

all_btn.forEach((btn) => { // looping all_btn | allbtn like array so use foreach 
    btn.addEventListener('click', (e) => { // addeventlistner to all btn  | e is event object that have property of all btn
        console.log(e.target.id); // getting id by( e ) event object  | e.target.is  => retun id of element i click 
        document.body.style.backgroundColor = e.target.id // changing bg | set bg color depend on click btn id 

    })
})

