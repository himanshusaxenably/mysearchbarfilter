import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Filter = () => {
    const [data, setDta] = useState([]);
    const [searchdata, setSearchdata] = useState("");
    const inputdata = (event) => {
        const data1 = event.target.value;
        setSearchdata(data1);
    }
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => {
                setDta(res.data.products)
            })
    }, [])
    const serchdata = data.filter((value) => {
        return value.title.brand.toLowerCase().includes(searchdata)
    })
    return (
        <>
            <div className="searchdatahere">
                <h1 className='search'>Search Data Here</h1>
                <input type="text" placeholder='Serach Here....'
                    value={searchdata}
                    onChange={inputdata}
                />
            </div>
            <div className="main">
                {
                    serchdata.map((value) => {
                        return <div className="holder">
                            <img src={value.thumbnail} alt="" />
                            <div className="cat">
                                <h1>{value.title}</h1>
                                <h1>{value.category}</h1>
                            </div>
                            <p>{value.description}</p>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Filter