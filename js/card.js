const Card = ({status, img, date, heure, adress, button}) => {
    return (
        <div>
            <p>{status}</p>
            <img src={img} />
            <p>{date}</p>
        </div>
    )
}