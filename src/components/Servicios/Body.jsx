import Card from "./Card";

const serviceinf = [
    {
        titulo: "Flashcards Inteligentes",
        texto: "Crea, estudia y repasa tus tarjetas de estudio de manera fácil y eficiente. Nuestra plataforma te ayuda a recordar lo que necesitas aprender de forma más rápida y sencilla."
    },
    {
        titulo: "Calendario Personalizado",
        texto: "Planifica tus sesiones de estudio y tus tareas de manera simple. Organiza tu tiempo y establece recordatorios para que nunca te pierdas una tarea importante o un momento de estudio."
    },
    {
        titulo: "Recordatorios Automatizados",
        texto: "Recibe notificaciones personalizadas para recordarte tus sesiones de estudio y tus fechas límite. Nuestros recordatorios te mantienen en el buen camino y te ayudan a mantenerte organizado sin esfuerzo."
    },
    {
        titulo: "Flashcards Inteligentes",
        texto: "Crea, estudia y repasa tus tarjetas de estudio de manera fácil y eficiente. Nuestra plataforma te ayuda a recordar lo que necesitas aprender de forma más rápida y sencilla."
    },
    {
        titulo: "Calendario Personalizado",
        texto: "Planifica tus sesiones de estudio y tus tareas de manera simple. Organiza tu tiempo y establece recordatorios para que nunca te pierdas una tarea importante o un momento de estudio."
    },
    {
        titulo: "Recordatorios Automatizados",
        texto: "Recibe notificaciones personalizadas para recordarte tus sesiones de estudio y tus fechas límite. Nuestros recordatorios te mantienen en el buen camino y te ayudan a mantenerte organizado sin esfuerzo."
    }

];

function Body() {
    return (
        <div className="container-service">
            <div className="container-title-service">
                <h2 className="title-service">Servicios</h2>
            </div>

            <div className="cj scroll-1">
                <div className="cards-service">
                    {serviceinf.slice(0,3).map((item, index) => (
                        <Card key={index} title={item.titulo} text={item.texto} />
                    ))}
                </div>
            </div>
            <div className="cj scroll-1">
                <div className="cards-service">
                    {serviceinf.slice(3,6).map((item, index) => (
                        <Card key={index} title={item.titulo} text={item.texto} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Body;
