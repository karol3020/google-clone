import React from 'react'
import './SearchPage.css'
import {useStateValue} from './stateProvaider'
// import useGoogleSearch from './useGoogleSearch'
import {Link } from 'react-router-dom'
import Search from '../components/Search'

function SearchPage() {

    const [{term}, dispatch] = useStateValue()
    //Live APi call
    // const { data } = useGoogleSearch(term)
    const data = Response
    console.log(data)

    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to="/">
                    <img
                    className='searchPage__logo'
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt=""
                    />
                </Link>

            </div>
            
            <div className='searchPage__headerBody'>
                <Search hideButtons />
            </div>

            <div className='searchPage__options'>
                <div className='searchPage__optionsLeft'>
                    <div className='searchPage__option'>
                        <SearchIcon />
                        <Link to="/all">All</Link>
                    </div>
                </div>
                
            </div>
            
            <div className='searchPage__results'>

            </div>
        </div>
    )
}

export default SearchPage