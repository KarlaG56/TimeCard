function Card(props) {
    return (
        <div class="card">
            <div className="div-icon-chara">
                <img className="icons" src={props.img} alt="" />
            </div>
            <p class="heading"> {props.title} </p>
            <p className="txt-card-chara"> {props.text} </p>
        </div>
    )
}

export default Card