import { useEffect, useState } from 'react';
import Main from './Main';
import ImagePopup from './ImagePopup';
import {api} from '../utils/api';

function App() {

  const [cards, setCards] = useState([]);
  const [showCard, setShowCard] = useState({});

  const cardAddComment = (obj) => {
    console.log(obj.comments)
  }

  useEffect(()=>{
    api.getCards()
      .then((res)=>{
        setCards(res)
      })
      .catch((err)=>{
        console.log(err)
      })
  }, [])

  const handleCardClick = (obj) =>{
    // console.log(obj)
    return setShowCard(obj)
  }

  const closePopup = () => {
    setShowCard({});
  }

  return (
    <div className="root">
      <Main
        cards = {cards}
        onCardClick = {handleCardClick}
        
      />
      <ImagePopup
        card={showCard}
        onClose={closePopup}
        cardAddComment={cardAddComment}
      />
    </div>
  );
}

export default App;
