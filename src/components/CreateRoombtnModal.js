import React, { useRef, useState } from 'react'
import { Button, Icon, Modal, Form, FormGroup, ControlLabel, FormControl, Schema, Alert } from 'rsuite'
import ModalBody from 'rsuite/lib/Modal/ModalBody'
import ModalFooter from 'rsuite/lib/Modal/ModalFooter'
import ModalHeader from 'rsuite/lib/Modal/ModalHeader'
import ModalTitle from 'rsuite/lib/Modal/ModalTitle'
import { useModalState } from '../misc/costum-hooks'
import { database } from '../misc/firebase'
import firebase from 'firebase/app'
import { useDispatch } from 'react-redux'
import { roomsActions } from '../store/reducers/rooms'
import { addRoomToList } from '../store/actions/rooms'
const { StringType } = Schema.Types;
const model = Schema.Model({
    name: StringType().isRequired('chat name is required'),
    description: StringType().isRequired('description is required')
})

const CreateRoombtnModal = () => {
    const dispatch = useDispatch()
    const { isOpen, open, close } = useModalState()
    const [FormValue, setFormValue] = useState({
        name: '',
        description: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const formRef = useRef()

    const handleSubmit = async () => {
        if (!formRef.current.check()) {
            return;
        }
        try {
            await database.ref('rooms').push({
                ...FormValue,
                createdAt: firebase.database.ServerValue.TIMESTAMP
            })
            setFormValue({
                name: '',
                description: ''
            })

            dispatch(addRoomToList());
            close()
            Alert.success(`${FormValue.name} has created sucssesfully`, 4000)
        }
        catch {
            Alert.error('cant created your room', 4000)
        }
    }

    return (
        <div className="mt-1">
            <Button block color="green" onClick={open}>
                <Icon icon="creative" /> create chat room
            </Button>

            <Modal show={isOpen} onHide={close}>
                <ModalHeader onHide={close}>
                    <ModalTitle>add new chat room</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form fluid formValue={FormValue} model={model} ref={formRef}>
                        <FormGroup>
                            <ControlLabel>name</ControlLabel>
                            <FormControl value={FormValue.name} name="name" placeholder="enter room name..." onChange={(e) => setFormValue({ ...FormValue, name: e })} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>description</ControlLabel>
                            <FormControl name="description" rows={5} componentClass="textarea" placeholder="enter description..." onChange={(e) => setFormValue({ ...FormValue, description: e })} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button block appearance="ghost" onClick={handleSubmit}>
                        <Icon icon="edit"> submit</Icon>
                    </Button>
                </ModalFooter>
            </Modal>
        </div>



    )
}

export default CreateRoombtnModal
