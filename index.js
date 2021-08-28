let textPTag = document.querySelector('#test-p');
let combinedKeysDisplayer = document.querySelector('#keydetectorjoin_text')
let singleKeysDisplayer = document.querySelector('#keydetector_text');

let yellowBox = document.querySelector('#doc-box')

let ctrlKeyPressed = false;
let ctrlKey = "";
// document.onkeydown = function (event) {
//     // console.log(event);
//     // console.log(event.key);
//     singleKeysDisplayer.innerText = "You clicked " + event.key + " key"

    

//     if (event.key == "q") {
//         yellowBox.style.backgroundColor == 'pink' 
//         ? yellowBox.style.backgroundColor = 'yellow' 
//         : yellowBox.style.backgroundColor = 'pink'  
//     }
    
//     if (event.key == "Control") {
//         ctrlKeyPressed = true
//         ctrlKey = event.key
//     }
//     if (event.key == "j") {
//         if (ctrlKeyPressed) {
//             event.preventDefault();
//             combinedKeysDisplayer.innerText = "You clicked " + ctrlKey + " + " + event.key;
//             textPTag.style.color == 'red' ? textPTag.style.color = 'black' : textPTag.style.color = 'red'
//             ctrlKeyPressed = false
//         }
//     }
// }

document.querySelector('#test-input').onkeydown = function (event) {
    // console.log(event);
    if (event.key == "Enter") {
        let inputValue = event.target.value
        // console.log(inputValue);
        document.querySelector('#input-value-displayer').innerText = inputValue
    }
}

$(function () {
    $(document).keydown(function (event) {
        // console.log(event);
        // console.log(event.originalEvent.key)
        singleKeysDisplayer.innerText = "You clicked " + event.key + " key"

    

        if (event.key == "q") {
            yellowBox.style.backgroundColor == 'pink' 
            ? yellowBox.style.backgroundColor = 'yellow' 
            : yellowBox.style.backgroundColor = 'pink'  
        }
        
        if (event.key == "Control") {
            ctrlKeyPressed = true
            ctrlKey = event.key
        }
        if (event.key == "j") {
            if (ctrlKeyPressed) {
                event.preventDefault();
                combinedKeysDisplayer.innerText = "You clicked " + ctrlKey + " + " + event.key;
                textPTag.style.color == 'red' ? textPTag.style.color = 'black' : textPTag.style.color = 'red'
                ctrlKeyPressed = false
            }
        }
    })

    // $('#test-input').keydown(function (event) {
    //     // event, evt, e
    //     if (event.key == "Enter") {
    //         let inputValue = event.target.value
    //         // console.log(inputValue);
    //         document.querySelector('#input-value-displayer').innerText = inputValue
    //     }
    // })
})