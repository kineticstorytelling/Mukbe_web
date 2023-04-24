import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Posts() {
        const [APIData, setAPIData] = useState([])
        const [filteredResults, setFilteredResults] = useState([]);
        const [searchInput, setSearchInput] = useState('');
        let token = '09ea8c859e132a64f15683e0a11e1889901f51f561b8bd89';
        useEffect(() => {
    
            axios.get(`https://catnip-simplistic-megaraptor.glitch.me/api/products`, {headers: {
            'Content-Type': 'application/json',
            'x-access-token':`Bearer ${token}` 
          }})
                .then((response) => {
                    setAPIData(response.data);
                })
        }, [])
    
        const searchItems = (searchValue) => {
            setSearchInput(searchValue)
            if (searchInput !== '') {
                const filteredData = APIData.filter((item) => {
                    return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
                })
                setFilteredResults(filteredData)
            }
            else{
                setFilteredResults(APIData)
            }
        }
    
        return (
            <div className='p-5 border-2 mx-4'>
                <input 
                    placeholder='Search...'
                    onChange={function filtered(e){searchItems(e.target.value)}}
                    className='p-2 rounded'
                />
                    {searchInput.length > 1 ? (
                        filteredResults.map((item) => {
                            return (
                                <>
                                <div className='flex p-1'>
                                <h2 className='px-2 text-lg'>{item.name}</h2>
                                <h3 className='px-2 text-lg'>{item.cost}</h3>
                                <h3 className='px-2 text-lg'>{item.store}</h3>
                                </div>
                                </>
                            )
                        })
                    ) : (
                        APIData.map((item) => {
                            return (
                                <div className='flex p-1'>
                                <h2 className='px-2 text-lg'>{item.name}</h2>
                                <h2 className='px-2 text-lg'>{item.store}</h2>
                                </div>
                            )
                        })
                    )}
            </div>
        )
    }
