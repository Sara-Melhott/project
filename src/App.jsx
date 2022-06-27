import { useState } from 'react';
import { start_search } from './scripts/search_module';
import {Validator} from './Validator';

function useSeracheInLastFM(api) {
    let [data, setData] = useState([])
    let [isLoading, setLoading] = useState([])
    let [error, setError] = useState([])

    let callApi = function () {
        if (isLoading != true) {
            setLoading(true)
            start_search(api).then((data) => {
                console.log(data);
                setData(data)
                setLoading(false)
            }).catch((error) =>{
                setError(error)
                setLoading(false)
            })
        }
        else{
            console.log("isLoading == true");
        }
    }

    return [data, error, callApi]
}

export function App(){

    let [listArtists, artistError, searchArtists] = useSeracheInLastFM('artist_text');
    let [listTracks, tracksError, searchTracks] = useSeracheInLastFM('music_text');

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
                            <i id="search_artist_button" className="fa fa-search" onClick={e => searchArtists()}></i>
                        </form>
                    </div>
                    <Validator valide_data={listArtists} error={artistError} api="artist_text" id="1"></Validator>
                </div>
                <div id="music_body" className="actor_music_body">
                    <p className="body_text">Music List</p>
                    <div className="search_area">
                        <form className="form" action="">
                            <input id="music_text" className="input" type="search"/>
                            <i id="search_music_button" className="fa fa-search" onClick={e => searchTracks()}></i>
                        </form>
                    </div>
                    <Validator valide_data={listTracks} error={tracksError} api="music_text" id="1"></Validator>
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
