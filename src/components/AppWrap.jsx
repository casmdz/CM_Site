import React from 'react'
import NavigationDots from './NavigationDots'

const AppWrap = ( Component, idName, classNames ) => function HOC() {
  return (
    <div id={idName} className={`${classNames}`}>
        <div id={idName} className='app__wrapper app__flex'>
            <Component />
        </div>
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap;