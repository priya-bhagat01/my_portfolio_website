"use script"

//Adding Dynamic effect on section
//To change title from Aspiring Software Developer to Robotics Enthusiast to Problem Solver

//What Data do I need?
//I need to make an array for texts

//What Calculation do I need to perform?
//I need to make loop and a function, set a time loop for appearing each text
//and also deleting each texts

//Where does it goes in DOM?
//In my Define para class

const texts = ["Aspiring Software Developer", "Robotics Enthusiast", "Problem Solver", "Computer Science Student"];


    // const Define = document.getElementById('Define');
    const Define = document.querySelector('.Define')

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function dynamicTyping() {
        const currentText = texts[textIndex]; //gets the character using index
        
        if (isDeleting) { //when true
            // Remove characters one by one
            Define.textContent = currentText.substring(0, charIndex - 1); //slice specific portion 
            charIndex--;
            typingSpeed = 50; // Faster speed when deleting
        } else {
            // Add characters one by one
            Define.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100; // Standard speed when typing
        }

        // If word is completely typed out, pause before deleting
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause duration at full text
        } 
        // If word is completely deleted, move to the next word in the array
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before typing the next word
        }

        setTimeout(dynamicTyping, typingSpeed);
    }

// Start the typing loop when the page loads
document.addEventListener('DOMContentLoaded', dynamicTyping);