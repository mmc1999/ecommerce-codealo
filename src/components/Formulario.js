import React, { useContext } from 'react';
import productoContext from '../context/contextCarrito';
import FormularioModule from "./Formulario.module.css";
import ResumenCompraModule from "./ResumenCompra.module.css";
import ResumenCompra from './ResumenCompra';
import useSumaTodo from '../hooks/useSumaTodo';
import {useModal} from "../hooks/useModal";
import Modal from './Modal';

export default function Formulario({handleSubmit, values, handleChange, touched, errors, handleBlur, isOpen, closeModal}) {
    let {datazos} = useContext(productoContext);
    let {
        sumaTotal,
        IVA,
        sumaPrecio
    } = useSumaTodo(datazos);

    
    return(
        <form className={FormularioModule.formulario} onSubmit={handleSubmit}>
            <div className={FormularioModule.primerDivform}>
                <h1>CHECKOUT</h1>
                <section className={FormularioModule.seccion}>
                    <p className={FormularioModule.tituloSeccion}>Detalles de facturacion</p>
                    <div className={FormularioModule.divSeccion}>
                        <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='nombre'>Nombre</label>
                            <input type="text" id='nombre' name='nombre' value={values.nombre} onChange={handleChange} onBlur={handleBlur} />
                            {touched.nombre && errors.nombre && <p className={FormularioModule.errores}>{errors.nombre}</p>}
                        </div>
                        <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='mail'>Direccion de email</label>
                            <input type="email" id='mail' name='mail' value={values.mail} onChange={handleChange} onBlur={handleBlur} />
                            {touched.mail && errors.email && <p className={FormularioModule.errores}>{errors.email}</p>}
                        </div>
                        <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='numero'>Numero de celular</label>
                            <input type="number" id='numero' name='numero' value={values.numero} onChange={handleChange} onBlur={handleBlur} />
                            {touched.numero && errors.numeroCelular && <p className={FormularioModule.errores}>{errors.numeroCelular}</p>}
                        </div>     
                    </div>
                </section>
                <section className={FormularioModule.seccion}>
                    <p className={FormularioModule.tituloSeccion}>Datos de envio</p>
                    <div className={FormularioModule.divSeccion}>
                        <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='adressHome'>Tu Direccion</label>
                            <input type="text" id='adressHome' name='adressHome' value={values.adressHome} onChange={handleChange} onBlur={handleBlur} />
                            {touched.adressHome && errors.adressHome && <p className={FormularioModule.errores}>{errors.adressHome}</p>}
                        </div>
                        <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='codigoPostal'>Codigo Postal</label>
                            <input type="text" id='codigoPostal' name='codigoPostal' value={values.codigoPostal} onChange={handleChange} onBlur={handleBlur} />
                            {touched.codigoPostal && errors.codigoPostal && <p className={FormularioModule.errores}>{errors.codigoPostal}</p>}
                        </div>
                        <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='ciudad'>Ciudad</label>
                            <input type="text" id='ciudad' name='ciudad' value={values.ciudad} onChange={handleChange} onBlur={handleBlur} />
                            {touched.ciudad && errors.ciudad && <p className={FormularioModule.errores}>{errors.ciudad}</p>}
                        </div>
                        <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='pais'>Pais</label>
                            <input type="text" id='pais' name='pais' value={values.pais} onChange={handleChange} onBlur={handleBlur} />
                            {touched.pais && errors.pais && <p className={FormularioModule.errores}>{errors.pais}</p>}
                        </div>         
                    </div>
                </section>
                <section className={FormularioModule.seccion}>
                    <p className={FormularioModule.tituloSeccion}>Metodo de pago</p>
                    <div className={`${FormularioModule.divSeccion} ${FormularioModule.divSeccionInputRadio}`}>
                        <div className={`${FormularioModule.divLabelInput} ${FormularioModule.inputRadio}`}>
                            <input type="radio" className={FormularioModule.inputRadio} />
                            <label className={FormularioModule.labelTarjeta}>Tarjeta</label>
                        </div>
                        <div className={`${FormularioModule.divLabelInput} ${FormularioModule.divInput}`}>
                            <label htmlFor='tarjetaNumber'>Numero de Tarjeta</label>
                            <input type="text" id='tarjetaNumber' name='tarjetaNumber' value={values.tarjetaNumber} onChange={handleChange} onBlur={handleBlur} />
                            {touched.tarjetaNumber && errors.tarjetaNumber && <p className={FormularioModule.errores}>{errors.tarjetaNumber}</p>}
                        </div>
                        <div className={`${FormularioModule.divLabelInput} ${FormularioModule.divInput2}`}>
                            <label htmlFor='safeNumber'>Numero de seguro</label>
                            <input type="number" id='safeNumber' name='safeNumber' value={values.safeNumber} onChange={handleChange} onBlur={handleBlur} />
                            {touched.safeNumber && errors.safeNumber && <p className={FormularioModule.errores}>{errors.safeNumber}</p>}
                        </div>     
                    </div>
                </section>
            </div>
            <div className={FormularioModule.segundoDivform}>
                <section className={ResumenCompraModule.seccionDetalles}>
                    <h2>RESUMEN</h2>
                    <div >
                        {datazos.length === 0
                            ? []
                            : <>
                                {Object.values(datazos).map(el => 
                                    <ResumenCompra key={el[1].id} el={el} />
                                )}  
                                <div>
                                    <div className={ResumenCompraModule.divResumenCompra}>
                                        <p className={ResumenCompraModule.resumenDataFijo}>TOTAL</p>
                                        <p className={ResumenCompraModule.resumenDatoVariable}>${sumaPrecio.toFixed(2)}</p>
                                    </div>
                                    <div className={ResumenCompraModule.divResumenCompra}>
                                        <p className={ResumenCompraModule.resumenDataFijo}>I.V.A.(Incluido)</p>
                                        <p className={ResumenCompraModule.resumenDatoVariable}>${IVA.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={ResumenCompraModule.divResumenCompra}>
                                        <p className={ResumenCompraModule.resumenDataFijo}>SUMA TOTAL</p>
                                        <p className={`${ResumenCompraModule.resumenDatoVariable} ${ResumenCompraModule.sumaTotal}`}>${sumaTotal}</p>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className={FormularioModule.botonPagar}>Continuar y pagar</button>
                                    {   
                                        isOpen 
                                            ? <Modal isOpen={isOpen} closeModal={closeModal} /> 
                                            : "" 
                                    }
                                </div>
                            </>
                        }
                    </div>
                </section>
            </div>
        </form>
    )
}