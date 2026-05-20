const Card = (props) => {
  return (
    <div className="card" id={props.key}>
        <div className="img-container">
          <img src={props.img} alt="" />
        </div>

        <div className="info">
          <div className="name">
            <h1>{props.name}</h1>
          </div>

          <div className="description">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
  )
}

export default Card