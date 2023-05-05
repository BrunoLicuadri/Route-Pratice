import Button from "../../../Components/Button/inidex";
import Card from "../../../Components/Card/inidex";


export default function HomeBody() {
    return (
        <main>
            <section className="container">
                <div className="mb30 mt30">
                    {<Card title="Página Inicial" />}
                </div>
                <div className="dflex">
                    {<Button text="Ver Promoção"/> }
                </div>
            </section>

        </main>
    );
}