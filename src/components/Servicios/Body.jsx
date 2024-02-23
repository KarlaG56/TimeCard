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
        titulo: "Capacidad de Personalizar las Flashcards",
        texto: "Personaliza el contenido y el formato de tus flashcards según tus preferencias de estudio y estilo de aprendizaje."
    },
    {
        titulo: "Capacidad de Personalizar el Diseño de la Aplicación",
        texto: "Adapta la interfaz de usuario de la aplicación según tus preferencias de diseño, lo que te permite crear una experiencia de usuario personalizada."
    },
    {
        titulo: "Compartir los Mazos entre la Comunidad",
        texto: "Colabora con otros usuarios compartiendo tus mazos de flashcards y obteniendo acceso a mazos creados por otros miembros de la comunidad, fomentando un ambiente de aprendizaje colaborativo."
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
