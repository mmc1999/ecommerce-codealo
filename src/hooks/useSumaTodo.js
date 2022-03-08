import React from 'react';

export default function useSumaTodo(datazos) {
    let sumaPrecio = 0;
    let IVA = 0; 
    let sumaTotal = 0;
    const sumarTodo = () => {
        Object.values(datazos).forEach(el => {
            sumaPrecio+=(el[1].price*el[0]);
        });
        IVA=sumaPrecio*0.21;
        sumaTotal=(sumaPrecio+IVA).toFixed(2)
    }
    sumarTodo()
    return {
        sumaTotal,
        IVA,
        sumaPrecio,
    }
}