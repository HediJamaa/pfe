import React from 'react'
import Cardeeee from './Cardeeee'
import { useSelector } from 'react-redux';

function Histoires() {
      const poste = useSelector((state) => state.post?.postlist || []);
      console.log(poste)

  return (
    <div>
        sss
        {poste.length > 0 ? (
        poste.map((el) => <Cardeeee key={el.id} product={el} />)
      ) : (
        <p>No post available</p>
      )}
    </div>
  )
}

export default Histoires