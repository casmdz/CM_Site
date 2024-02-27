import React from 'react'

const NavigationDots = ({ active }) => {
return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'education', 'skills', 'interests', 'gallery', 'contact'].map((item, index) => (
        <div key={item + index} className='dot-wrapper'>
        <a 
            href={`#${item}`} 
            key={item + index}
            className='app__navigation-dot'
            // style={active === item ? { backgroundColor: '#77b233'} : {}}
            aria-label='navigation dots'
            >
            </a>
        <span className='nav-label'>{item}</span>
        </div>
        ))}
    </div>
)
}

export default NavigationDots
