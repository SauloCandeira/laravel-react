import React from "react";
import { Background, ModalWrapper, ModalContent, CloseModalButton } from "./styles";

export function Modal({showModal, setShowModal}) 
{
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <h1> Teste </h1>
              <p> Teste P</p> 
              <button> Joi Now</button>

            </ModalContent>
            <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(false)} />
          </ModalWrapper>
        </Background>
      ): null }
    </>
  )
}


export default Modal;