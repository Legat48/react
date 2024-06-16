// import { createElement } from "react"
import './TermCard.css'
export const TermCard = ({title, desc, onDelete, id})  =>  {
  const hendeleDeleteClick =  ()  =>  {
    console.log('delete')
    onDelete(id)
  }


  return <div className='term-card'
  >
    <h2 className='term-card__title'>{title}</h2>
    {desc && <p className="term-card__text">{desc}</p>}
    <button type='button' className='term-card__delete' onClick={hendeleDeleteClick}>
      Удалить
    </button>
  </div>
}