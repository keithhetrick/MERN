import { useState } from 'react';
import TabsCSS from './TabsCSS.module.css'

const Tabs = ({ children }) => {

  const [tabs, setTabs] = useState(children[0].props.label);

  const handleClick = (e, newTab) => {
    e.preventDefault();
    setTabs(newTab);
  }

  return (
    <div> 
      <main className={TabsCSS.tabsWrapper}>
        <ul className={TabsCSS.tabsList}>
          {children.map((tab) => {
            const label = tab.props.label;
            return ( 
              <li 
                className={label === tabs ? TabsCSS.current : ''} 
                key={label}>
                <p onClick={(e) => handleClick(e, label)}>{label}</p>
              </li> 
            );
          })}
        </ul> 
      </main>
        {children.map((tab) => { 
          const label = tab.props.label;
          if (label === tabs)
            return (
              <main key={label} className={TabsCSS.content}>{tab.props.children}</main>
            );
          })}
    </div>
  )
}

export { Tabs }