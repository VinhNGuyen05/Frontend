import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FruitList from '../../components/ListFruit'
import { useSelector, useDispatch } from 'react-redux'
import { getFruit } from '../../redux/apiThunk/fruitThunk'

const Search = () => {
    const { keyword } = useParams()
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        dispatch(getFruit({ name: keyword, min: '', max: '', newDate: '', createDate: '', user: '' }))
    }, [dispatch, keyword])
    const fruitList = useSelector((state) => state.fruit.fruit)

    return (
        <>
            {/* onSubmit={e => handleFormSubmit(e)} */}
            <header className="header">
                <div className="container">
                    <h1 className="display-4 fw-bolder">Search fruit</h1>
                </div>
            </header>
            <section className="py-5 bg-light">
                <div className="container px-1 px-lg-5 mt-3">
                    <div className="container justify-content-center search">
                        <div className="row ">
                            <form className="input-group mb-5" >
                                <input
                                    type="text"
                                    className="form-control input-text"
                                    placeholder="Search products"
                                    value={keyword}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <button className="btn" type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row gx-2 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">
                        <FruitList data={fruitList.data} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search