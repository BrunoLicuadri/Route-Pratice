import { Link } from "react-router-dom";
import Button from "../../../Components/Button";
import Card from "../../../Components/Card/inidex";

export default function Promotion() {
    return (
        <main>
            <section className="container">
                <div className="mb30 mt30">
                    <Card title="Página de Promoção" />
                </div>
                <div className="dflex">
                    <Link to="/sub">
                        <Button text="Quero Participar" />
                    </Link>
                </div>
            </section>

        </main>
    );
}