import React from 'react'
//Children is for button on background image
export default function Hero({children,hero}) {
    return (
        <header className = {hero}>{children}</header>
    )
}
Hero.defaultprop = {
    hero : 'defaultHero'
};