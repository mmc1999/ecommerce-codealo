import React from 'react';
import {Formik} from "formik"
import Formulario from './Formulario';

export default function FormPagar() {
    return(
        <section>
            <Formik>
                {props => <Formulario {...props} />}
            </Formik>
        </section>
    )

}