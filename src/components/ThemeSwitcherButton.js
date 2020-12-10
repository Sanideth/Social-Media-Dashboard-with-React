import React from 'react';


function ThemeSwitcherButton() {

    function buttonClick() {
        //DOM element variables
        const btnCircle = document.getElementById('btn-circle');
        const btnThemeSwitcher = document.getElementById('btn-theme-switcher');
        const headingPrimary = document.getElementById('heading-primary');
        const boxGridPrimary = document.querySelectorAll('.main__box-grid-primary');
        const boxGridSecondary = document.querySelectorAll('.main__box-grid-secondary');
        const userTextNumbers = document.querySelectorAll('.main__user-text-numbers');
        const userInteractionNumbers = document.querySelectorAll('.main__user-interaction-numbers');
        
        // Button active state style change
        btnCircle.classList.toggle('btn-circle-active');
        btnThemeSwitcher.classList.toggle('btn-active');
        document.body.classList.toggle('body-active');
        headingPrimary.classList.toggle('text-color-darkest');
        //User numbers color change on active state
        userTextNumbers.forEach(element => {
            element.classList.toggle('text-color-darkest');
        })

        //Grid box style and hover state change on active state
        boxGridPrimary.forEach(element => {
            element.classList.toggle('bg-color-lighten');
            element.classList.toggle('box-grid-active');
        })

        boxGridSecondary.forEach(element => {
            element.classList.toggle('bg-color-lighten')
            element.classList.toggle('box-grid-active');
        })
        // User interaction numbers style change on active state
        userInteractionNumbers.forEach(element => {
            element.classList.toggle('text-color-darkest');
        })
        
        

        
    }
    return (
        <div className="button-container">
            <p className="button-text">Dark Mode</p>
            <button className="btn btn-theme-switcher" id="btn-theme-switcher" onClick={buttonClick} aria-label="Button for Theme Switch">
                <span className="btn-circle" id="btn-circle"></span>
            </button>
        </div>
    )
}


export default ThemeSwitcherButton;