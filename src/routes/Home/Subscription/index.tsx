import { Link } from "react-router-dom";
import Button from "../../../Components/Button";
import Card from "../../../Components/Card/inidex";

export default function Subscription() {
    return (
        <main>

            <section className="container">
                <div className="mb30 mt30">
                    <Card title="Página de Inscrição" />
                </div>
                <div className="dflex">
                    <Link to="/promotion">
                        <Button text="Ver Promoção" />
                    </Link>
                </div>
            </section>

        </main>
    );
}