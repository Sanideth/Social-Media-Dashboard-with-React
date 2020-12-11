import React from 'react';


function ThemeSwitcherButton() {

    function buttonClick() {
        //DOM element variables
        const btnCircle = document.getElementById('btn-circle');
        const btnThemeSwitcher = document.getElementById('btn-theme-switcher');
    
        
        // Button active state style change
        btnCircle.classList.toggle('btn-circle-active');
        btnThemeSwitcher.classList.toggle('btn-active');
        // Css variables change to light mode and back
        if (btnThemeSwitcher.classList.contains('btn-active')) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
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