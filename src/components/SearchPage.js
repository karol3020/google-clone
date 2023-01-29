import React from 'react'
import './SearchPage.css'
import {useStateValue} from './stateProvaider'
// import useGoogleSearch from './useGoogleSearch'
import {Link } from 'react-router-dom'
import Search from '../components/Search'
import { Search } from '@mui/icons-material'
import  DescriptionIcon  from '@mui/icons-material'
import  ImageIcon  from '@mui/icons-material'
import  LocalOfferIcon from '@mui/icons-material'
import  RoomIcon from '@mui/icons-material'
import  MoreVertIcon from '@mui/icons-material'


function SearchPage() {

    const [{ term }, dispatch] = useStateValue()
    //Live APi call
    const { data } = useGoogleSearch(term)
    //Mock api call
    // const data = Response
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
                    <div className='searchPage__option'>
                        <DescriptionIcon />
                        <Link to="/news">News</Link>
                    </div>
                    <div className='searchPage__option'>
                        <ImageIcon />
                        <Link to="/images">Images</Link>
                    </div>
                    <div className='searchPage__option'>
                        <LocalOfferIcon />
                        <Link to="/shopping">shopping</Link>
                    </div>
                    <div className='searchPage__option'>
                        <RoomIcon />
                        <Link to="/maps">maps</Link>
                    </div>
                    <div className='searchPage__option'>
                        <MoreVertIcon />
                        <Link to="/more">more</Link>
                    </div>
                </div>
                
                <div className='searchPage__optionsRight'>
                    <div className='searchPage__option'>
                        <Link to="/setting">Settings</Link>
                    </div>
                    <div className='searchPage__option'>
                        <Link to="/tools">Tools</Link>
                    </div>
                </div>
            </div>

            {term && (
                <div className='searchPage__results'>
                    <p className='searchPage__resultCount'>
                        About {data?.searchInformation.formattedTotalResults} 
                        results ({data?.searchInformation.formattedTotalSearchTime} seonds)
                        for {term}
                    </p>

                    {data?.items.map(item => {
                        <div className='searchPage__results'>
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 &&
                                item.pagemap?.cse_image[0]?.src && (
                                    <img
                                        className='searchPage__resultImage'
                                        src={item.pagemap?.cse_image[0]?.src}
                                        alt=""                                   
                                    />
                                )}
                            {item.displayLink}
                            </a>
                            <a className='searchPage__resultTitle'
                            href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className='searchPage__resultSnippet'>
                                {item.snippet}
                            </p>
                        </div>
                    })}
                </div>
            )}

        </div>
    )
}

export default SearchPage