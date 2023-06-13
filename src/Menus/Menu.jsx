import {Inputs} from './Producto.jsx'
import { Component } from 'react';

export function MenuSeleccionado(Menu) {
    console.log(Menu)
    console.log("El menu seleccionado es: " + Menu.nombre);
    if(Menu.nombre == "Producto"){
        console.log('Menu producto')
        console.log(Inputs)
        return <Inputs />
    }
}