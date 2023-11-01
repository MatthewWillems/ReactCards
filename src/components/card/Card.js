import "./Card.css"
const Card = (props) => {
    let cardImage = <img src={"/img/" + props.image || "/img/" + props.image} alt="" />
    if (props.image === undefined) {
        cardImage = <img src={"/img/" + props.image || "/img/beans.jpg"} alt="" />
    }
    return (
        <article class="card">
            <figure class="card__figure">
                {cardImage}
            </figure>
            <section class="card__section">
                <p>{props.text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>
            </section>
        </article>
    )
}

export default Card;