import { useEffect } from "react"
import { Toast } from "react-bootstrap"

interface Props {
    show: boolean,
    animation: boolean,
    title: string,
    message: string
}

export const ToastMessage = (props : Props) => {

  

    return (
        <>
            <Toast show={props.show} animation={props.animation}>
                <Toast.Header>
                    <strong className="me-auto">{props.title}</strong>
                </Toast.Header>
                <Toast.Body>{props.message}</Toast.Body>
            </Toast>
        </>
    )
}