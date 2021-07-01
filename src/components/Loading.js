import React from 'react'
import { Container, Loader } from 'rsuite'
function Loading() {
    return (
        <Container>
            <Loader center vertical size="md" content="Loading" speed="slow" />
        </Container>
    )
}

export default Loading
