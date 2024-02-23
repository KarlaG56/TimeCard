function Body() {
    return (
        <div className="container-inf-timecard">
            <div className="container-data-time">
                <div className="animation-cubo">
                    <div class="cube-container">
                        <div class="cube">
                            <div class="face front"></div>
                            <div class="face back"></div>
                            <div class="face right"></div>
                            <div class="face left"></div>
                            <div class="face top"></div>
                            <div class="face bottom"></div>
                        </div>
                    </div>

                </div>

                <div className="inf-timecard">
                    <div className="question-timecard">
                        <h2 className="title-question">¿Qué es TimeCard?</h2>
                    </div>

                    <div className="descrip-time">
                        <p className="txt-question">Es una aplicación web diseñada para ofrecer una experiencia integral de aprendizaje y gestión del tiempo. Combina la potencia de las flashcards digitales
                            con un calendario inteligente para ayudarte a organizar tus estudios y compromisos de manera eficiente, todo en un solo lugar accesible desde cualquier dispositivo.
                        </p>
                    </div>

                    <div className="beneficios-time">
                        <ul style={{ listStyleType: 'disc' }}>
                            <li>Eficiencia Comprobada: Miles de usuarios ya han experimentado una mejora significativa en su productividad y rendimiento académico gracias a nuestra plataforma.</li>
                            <li>Innovación Constante: Estamos comprometidos a ofrecerte las últimas herramientas y técnicas para optimizar tu aprendizaje y tu gestión del tiempo.</li>
                            <li>Soporte Integral: Nuestro equipo de atención al cliente está aquí para ayudarte en cada paso del camino, asegurándonos de que tengas la mejor experiencia posible.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Body