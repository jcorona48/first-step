import React, { useState } from 'react';
import './SideBar.css';
import {MenuSeleccionado} from './Menus/Menu.jsx'


export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [menuActivo, setMenuActivo] = useState();
    const handleItemClick = (e) => {
        console.log(e.target)
        if(e.target.className.includes("fa")){
            const Parent = e.target.parentNode.parentNode;
            console.log(Parent.lastChild.textContent)
            setMenuActivo(Parent.lastChild.textContent);
            if(!isCollapsed){
                setIsCollapsed(true);
            }
            
        }else{
            console.log(e.target.lastChild.textContent)
            setMenuActivo(e.target.lastChild.textContent);
            setIsCollapsed(true);
        }
    };

    const handleHamburgerClick = () => {
        setIsCollapsed(!isCollapsed);
    };

    const sidebarStyle = {
        marginLeft: isCollapsed ? '70px' : '220px',
    };

    return (
        <div className={`wrapper ${isCollapsed ? 'hover_collapse' : ''}`}>
            <div className="top_navbar">
                <div className="menu">
                    <div className="hamburger" onClick={handleHamburgerClick}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
                <div className="logo">JC-System</div>
            </div>

            <div className="sidebar">
                <div className="sidebar_inner">
                    <ul>
                        <li>
                            <a href="#" onClick={handleItemClick} >
                                <span className="icon">
                                    <i className="fa fa-qrcode"></i>
                                </span>
                                <span className="text" id='1'>Producto</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={handleItemClick}>
                                <span className="icon">
                                    <i className="fa fa-link"></i>
                                </span>
                                <span className="text" id='2'>Shortcuts</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={handleItemClick}>
                                <span className="icon">
                                    <i className="fa fa-eye"></i>
                                </span>
                                <span className="text" id='3'>Overview</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={handleItemClick}>
                                <span className="icon">
                                    <i className="fa fa-book"></i>
                                </span>
                                <span className="text" id='4'>Event</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={handleItemClick}>
                                <span className="icon">
                                    <i className="fa fa-question-circle"></i>
                                </span>
                                <span className="text" id='5'>About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={handleItemClick}>
                                <span className="icon">
                                    <i className="fa fa-pen"></i>
                                </span>
                                <span className="text" id='6'>Service</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={handleItemClick}>
                                <span className="icon">
                                    <i className="fa fa-id-card"></i>
                                </span>
                                <span className="text" id='7'>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content" id="content" style={sidebarStyle}>
                < MenuSeleccionado  nombre={menuActivo}/>
            </div>
        </div>
    );
}
