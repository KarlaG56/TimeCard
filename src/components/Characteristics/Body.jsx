import Card from "./Card";

const infChara = [
  {
    imageSrc: "./public/bx-calendar.svg",
    title: "Integración de Flashcards y Calendario",
    text: "Organiza tus sesiones de estudio y tareas de manera efectiva al tener todo en un mismo lugar"
  },
  {
    imageSrc: "bx-book-alt.svg",
    title: "Personalización Total",
    text: "Ajusta tus sesiones de estudio y horarios según tus necesidades individuales."
  },
  {
    imageSrc: "bx-like.svg",
    title: "Accesible y Fácil de Usar",
    text: "Diseñada para ser intuitiva y fácil de usar para todos los usuarios, garantizando una experiencia sin complicaciones."
  },
  {
    imageSrc: "bx-laptop.svg",
    title: "Sincronización Multiplataforma",
    text: "Accede a tu cuenta desde cualquier dispositivo para estudiar en cualquier momento y lugar."
  }

];

function Body() {
  return (
    <div className="container-chara">
      <div className="container-data-chara">
        <div className="title-chara">
          <h2>Tu Compañero Todo en Uno para una Organización Eficiente</h2>
        </div>

        <div className="cards-container-data">
          {infChara.map((item, index) => (
            <Card key={index} img={item.imageSrc} title={item.title} text={item.text} />
          ))}
          <img src="" alt="" />
        </div>
      </div>

    </div>
  );
}

export default Body;
