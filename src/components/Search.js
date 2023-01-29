import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@mui/icons-material'
import MicIcon from '@mui/icons-material'
import { Button } from '@mui/icons-material'
import { useHistory } from 'react-router-dom'
import {useStateValue} from '../stateProvaider'
import {actionTypes} from './reducer'

function Search ({ hiddeButtons = false }) {
    const [{}, dispatch] = useStateValue()

    const [input, setInput] = useState("")
    const history = useHistory()

    const search = e => {
        e.preventDefault();
        
        console.log('you hit the search button >> ', input)

        history.push('/search')

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
    }
    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {!hiddeButtons ? (

            <div className='search__buttons'>
                <Button type='submit' onClick={search} varian="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
            ) : <div className='search__buttons'>
            <Button type='submit' onClick={search} varian="outlined"
            className="search__buttonsHidden">Google Search</Button>
            <Button variant="outlined"
            className="search__buttonsHidden">I'm Feeling Lucky</Button>
        </div> }

        </form>
    )
}

export default Search