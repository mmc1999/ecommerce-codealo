import React, { useContext } from 'react';
import productoContext from '../context/contextCarrito';
import FormularioModule from "./Formulario.module.css";
import ResumenCompraModule from "./ResumenCompra.module.css";
import ResumenCompra from './ResumenCompra';
import useSumaTodo from '../hooks/useSumaTodo';

export default function Formulario({}) {
    let {datazos} = useContext(productoContext);
    let {
        sumaTotal,
        IVA,
        sumaPrecio
    } = useSumaTodo(datazos)
  
    return(
        <form className={FormularioModule.formulario}>
            <div className={FormularioModule.primerDivform}>
                <h1>CHECKOUT</h1>
                <section className={FormularioModule.seccion}>
                    <p className={FormularioModule.tituloSeccion}>Detalles de facturacion</p>
                    <div>
                    <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='nombre'>Nombre</label>
                            <input type="text" id='nombre' name='nombre' />
                        </div>
                        <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='mail'>Direccion de email</label>
                            <input type="email" id='mail' name='mail' />
                        </div>
                        <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='numero'>Numero de celular</label>
                            <input type="number" id='numero' name='numero' />
                        </div>     
                    </div>
                </section>
                <section className={FormularioModule.seccion}>
                    <p className={FormularioModule.tituloSeccion}>Datos de envio</p>
                    <div>
                    <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='adressHome'>Tu Direccion</label>
                            <input type="text" id='adressHome' name='adressHome' />
                        </div>
                        <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='codigoPostal'>Codigo Postal</label>
                            <input type="number" id='codigoPostal' name='codigoPostal' />
                        </div>
                        <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='ciudad'>Ciudad</label>
                            <input type="text" id='ciudad' name='ciudad' />
                        </div>
                        <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='pais'>Pais</label>
                            <input type="text" id='pais' name='pais' />
                        </div>         
                    </div>
                </section>
                <section className={FormularioModule.seccion}>
                    <p className={FormularioModule.tituloSeccion}>Metodo de pago</p>
                    <div>
                        <div className={`${FormularioModule.divLabelInput} ${FormularioModule.inputRadio}`}>
                            <input type="radio" />
                            <label className={FormularioModule.labelTarjeta}>Tarjeta</label>
                        </div>
                        <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='tarjetaNumber'>Numero de Tarjeta</label>
                            <input type="number" id='tarjetaNumber' name='tarjetaNumber' />
                        </div>
                        <div className={FormularioModule.divLabelInput}>
                            <label htmlFor='safeNumber'>Numero de seguro</label>
                            <input type="number" id='safeNumber' name='safeNumber' />
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
                                    <button className={FormularioModule.botonPagar}>Continuar y pagar</button>
                                </div>
                            </>
                        }
                    </div>
                </section>
            </div>
        </form>
    )
}