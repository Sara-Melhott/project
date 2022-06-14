import {React, useEffect} from 'react';
import { useState } from 'react';
import { start_search } from './scripts/search_module';
import {validate_data } from './scripts/validator';
import { ListTracks } from './ListTracks';
import { ListArtists } from './ListArtists';

export function Main(){

    let [listArtists, setListArtists] = useState([]);
    let [listTracks, setListTracks] = useState([]);
    
    function onSearchClick(e, type){

        const reqest = start_search(e, type);
        reqest.then((data)=>{
            try
            {
                if (type == 'artist_text'){
                    setListArtists(validate_data(data.results.artistmatches, type))
                }
                else{
                    setListTracks(validate_data(data.results.trackmatches, type))
                }
            }
            catch(err)
            {
                console.log(err)
                window.alert("No such object in Last.fm data base")
            }
            })
    }
    return(
        <div className='app'>
            <div className="flex-container-head">
                <div className="logo">
                    <p className="logo_text">MusicFM</p>
                </div>
            </div>
            <div className="site_body">
            <div className="container">
                <div id="actor_body" className="actor_music_body">
                    <p className="body_text">Actors List</p>
                    <div className="search_area">
                        <form className="form" action="">
                            <input id="artist_text" className="input" type="search"/>
                            <i id="search_artist_button" className="fa fa-search" onClick={e => onSearchClick(e, "artist_text")}></i>
                        </form>
                    </div>
                    <ListArtists valide_data={listArtists} id="0"/>
                </div>
                <div id="music_body" className="actor_music_body">
                    <p className="body_text">Music List</p>
                    <div className="search_area">
                        <form className="form" action="">
                            <input id="music_text" className="input" type="search"/>
                            <i id="search_music_button" className="fa fa-search" onClick={e => onSearchClick(e, "music_text")}></i>
                        </form>
                    </div>
                    <ListTracks valide_data={listTracks} id="0"/>
                </div>
            </div>
        </div>
        <div className="footer">
            <p className="info_text">CBS Interactive © 2022 Last.fm Ltd. All rights reserved Terms of Use Privacy Policy
                Legal Policies Cookies Policy Do Not Sell My Personal Information Jobs at ViacomCBS Last.fm Music</p>
        </div>
    </div>
    );
}
