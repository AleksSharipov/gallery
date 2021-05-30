export default function Cards({card, handleCardClick}) {

  function likeCard(e){
    if(e.target.className === 'btn btn__like'){
      e.target.className = `btn btn__like_active`
    }else  {
      e.target.className = 'btn btn__like';
    }
  }
  const link = card.urls.regular;
  const id = card.id
  function handleClick(e) {
    handleCardClick({
      link,
      id
    })
  }

  return (
    <>
    <li className="card__element">
      <img className="card__img" src={link} alt="fire" onClick={handleClick}></img>
      <div className="btns">
        <div>
        <button className="btn btn__like" onClick={likeCard}></button>
        </div>
        <button onClick={handleClick} className="btn btn__msg"></button>
      </div>
    </li>
  </>
  )
} 