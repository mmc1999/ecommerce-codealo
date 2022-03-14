import React, { useContext } from 'react';
import {Formik} from "formik"
import Formulario from './Formulario';
import { validationForm } from '../helpers/validationForm';
import productoContext from '../context/contextCarrito';
import { useModal } from '../hooks/useModal';

export default function FormPagar() {
    /*let {
        setDatazos
    } = useContext(productoContext);*/
    const {openModal, closeModal, isOpen} = useModal(false);
    return(
        <section>
            <Formik
                initialValues={{
                        nombre:"",
                        mail:"",
                        numero:"",
                        adressHome:"",
                        codigoPostal:"",
                        ciudad:"",
                        pais:"",
                        tarjetaNumber:"",
                        safeNumber:""
                    }
                }
                validate={values => validationForm(values)}
                onSubmit={(e) => {
                    openModal(true);
                }}
            >
                {props => <Formulario {...props} isOpen={isOpen} closeModal={closeModal} />}
            </Formik>
        </section>
    )

}