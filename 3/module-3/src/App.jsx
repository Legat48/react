// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import { SearchableList } from './SearchableList.jsx'
import { StopWatch } from './StopWatch.jsx'
const list = [
  {
    id: 1,
    title: 'Арбуз',
  },
  {
    id: 2,
    title: 'Арбуз2',
  },
  {
    id: 3,
    title: 'Арбуз1',
  },
  {
    id: 4,
    title: 'Арбуз',
  }
]
function App() {
 return  (
  <>
    <SearchableList list={list} />
    <StopWatch></StopWatch>
  </>
  )
}

export default App
