'use client'

import { useRouter } from "next/navigation";
import { Button } from 'react-bootstrap';

const AboutPage = () => {
    const router = useRouter()

    const handleBtn = () => {
        router.push("/")
    }

    return (
        <div>
            <h1>About Page</h1>
            <div className="container">
                <Button variant='primary'>PHSON</Button>
                <Button variant='success'>PHSON</Button>
                <Button variant='danger'>PHSON</Button>
                <Button variant='warning'>PHSON</Button>
                <Button variant='info'>PHSON</Button>
                <Button variant='light'>PHSON</Button>
                <Button variant='dark'>PHSON</Button>
                <Button variant='secondary'>PHSON</Button>
            </div>
            <div>
                <button onClick={() => handleBtn()}>Back</button>
            </div>
        </div>
    )
}

export default AboutPage;