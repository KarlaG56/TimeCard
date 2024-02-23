function Card(props) {
    return (



        <div class="container-service">
            <div class="ncardss card-service">
                <p class="card__price">{props.title}</p>
                <ul class="card_bullets flow" role="list">
                    <p className="txt-services">{props.text}</p>
                </ul>
            </div>
        </div>

    );
}

export default Card;
