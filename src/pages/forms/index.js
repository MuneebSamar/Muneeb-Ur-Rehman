import { useHistory } from "react-router-dom";
export default function Forms({user, setUser}) {
    const navigate = useHistory();
    if ( user && user?.code == 0) {
        return (
            <div>
                <h1>Forms</h1>
            </div>
        )
    } else {
        navigate.push("/admin");
    }
}
    