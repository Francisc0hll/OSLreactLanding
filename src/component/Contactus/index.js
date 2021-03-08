import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon } from './ContacElements'

const ContactUs = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">OSL</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Formulario de Contacto</FormH1>
                        <FormLabel htmlFor='for'>Nombres:</FormLabel>
                        <FormInput type='text' required/>
                        <FormLabel htmlFor='for'>Celular:</FormLabel>
                        <FormInput type='text' required/>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormButton type='submit'>Enviar</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>  
        </>
    )
}

export default ContactUs

