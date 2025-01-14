import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div>
            <p>
                Page Not Found... Please visit <Link to="/">Home page</Link>!
            </p>
        </div>
    );
}
