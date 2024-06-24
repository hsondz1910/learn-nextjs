'use client'
import { useRouter } from "next/router";
const AboutPage = () => {
    const router = useRouter()
    const handleBtn = () => {
        alert("me");
        router.push("/")
    }
    return (
        <div>
            <h1>About Page</h1>
            <div>
                <button onClick={() => handleBtn()}>Back</button>
            </div>
        </div>
    )
}

export default AboutPage;