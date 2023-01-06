import { useRouter } from "next/router";

export default function PageNotFound() {
    const {back} = useRouter();

    return <p>Coś poszło źle... <button onClick={back}>Wróć</button></p>
}