import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Button, Input, ModalFooter } from 'reactstrap'
import { useState, useEffect } from 'react';
//import { useEffect } from 'react';

const modeloContacto = {
    idContacto: 0,
    nombre: '',
    correo: '',
    telefono: ''
}

function ModalContacto({ mostrarModal, setMostrarModal, guardarContacto, editar, setEditar, editarContacto }) {
    const [contacto, setContacto] = useState(modeloContacto);


    const enviarDatos = () => {
        if (contacto.idContacto === 0) {
            guardarContacto(contacto);
        } else {
            editarContacto(contacto);
            setEditar(null);
        }
    }

    const actualizarDato =(e) => {
        setContacto({
            ...contacto,
            [e.target.name] : e.target.value
        });

        //console.log(contacto);
    }

    useEffect(() => {
        if (editar != null) {
            setContacto(editar);
        } else {
            setContacto(modeloContacto);
        }
    }, [editar]);

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal);
        setEditar(null);
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {contacto.idContacto == 0 ? "Nuevo Contacto" : "Editar Contacto"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={contacto.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input name="correo" onChange={(e) => actualizarDato(e)} value={contacto.correo} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input name="telefono" onChange={(e) => actualizarDato(e)} value={contacto.telefono} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>

        </Modal>
    );
}

export default ModalContacto;
//(() => setMostrarModal(!mostrarModal))