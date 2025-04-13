import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

function Ingredients() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
    const Animals = useSelector((state) => state.animal?.animalList || []);
  
  const { id } = useParams();
  const animal = Animals.find((p) => p._id === id);

  return (
    <div>
      <div className="animal-card">
        <img style={{ width: 250 }} src={animal?.img} alt={animal?.titel} />
        <div className="animal-sec">
          <h4 className="animal-title" style={{ textAlign: "center" }}>
            {animal?.titel}
          </h4>
          <p className="animal-desc">
            <h1 className="h1name">description:&nbsp;</h1>
            {animal?.description}
          </p>
          <p className="animal-desc">
            <h1 className="h1name">name:&nbsp;</h1>
            {animal?.name}
          </p>
          <p className="animal-desc">
            <h1 className="h1name">race:&nbsp;</h1>
            {animal?.race}
          </p>
          <p className="animal-desc">
            <h1 className="h1name">gender:&nbsp;</h1>
            {animal?.gender}
          </p>
          <p className="animal-desc">
            <h1 className="h1name">location:&nbsp;</h1>
            {animal?.location}
          </p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4295 3.29074L12.024 3.73295L12.6201 3.29292C13.8781 2.36439 15.4265 1.91606 16.9859 2.02881C18.5435 2.14143 20.0096 2.80633 21.1204 3.90373C21.7231 4.51528 22.1994 5.23968 22.5219 6.03551C22.8451 6.83312 23.0075 7.68673 22.9997 8.5473C22.992 9.40787 22.8143 10.2584 22.4767 11.0501C22.1392 11.8417 21.6486 12.5589 21.033 13.1603L21.0274 13.1658L21.0218 13.1714L13.8181 20.4352C13.8175 20.4358 13.817 20.4363 13.8165 20.4368C13.3285 20.9234 12.6674 21.1966 11.9782 21.1966C11.289 21.1966 10.628 20.9234 10.14 20.4368C10.1394 20.4363 10.1389 20.4358 10.1384 20.4352L2.93462 13.1714L2.93464 13.1714L2.92921 13.166C1.75712 12.0021 1.06956 10.4373 1.005 8.78674C0.940433 7.13618 1.50366 5.52246 2.58126 4.27054C3.65886 3.01862 5.17079 2.2215 6.81257 2.0397C8.45436 1.8579 10.1041 2.30492 11.4295 3.29074Z" fill="#FDFBFF" stroke="red" stroke-width="2"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Ingredients