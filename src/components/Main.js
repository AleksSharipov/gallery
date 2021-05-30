import Cards from './Cards';

export default function Main({cards, onCardClick}){
  return (
    <section className="cards">
        <ul className="card">
         {
           cards.map((card)=>{
             return (
               <Cards
                  key={card.id}
                  card={card}
                  handleCardClick = {onCardClick}
                  
               />
             )
           })
         }
        </ul>
      </section>
  )
}