import { TermCard } from './TermCard'
import './TermList.css'


export const TermList = ({termArr, onDelete}) => {
  return <div className='term-list'>
    {termArr && termArr.length > 0 && termArr.map((item)=>
    <div
      key={item.id}
      className='term-list__item'
    >
      <TermCard
         {...item}
         onDelete={onDelete}
       />
    </div>
     )}
  </div>
}