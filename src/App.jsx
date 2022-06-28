import { useEffect, useState } from 'react';
import { lastfm_search } from './scripts/search_module';
import {Validator} from './Validator';

function useSeracheInLastFM(api, text) {
    let [data, setData] = useState([])
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState([])

    useEffect(()=> {
        console.log (api);
        let isCancelled = false;
        setLoading(true);
        lastfm_search(api, text).then((data) => {
            if (isCancelled){
                return;
            }
            console.log(data);
            setData(data);
        }).catch((error) =>{
            if (isCancelled){
                return;
            }
            setError(error);
        }).finally(()=>{
            if (isCancelled){
                return;
            }
            setLoading(false);
        });
        return () => {
            isCancelled = true;
        }
    }, [text]);
    
    return [data, error]
}

export function App(){
    let [artisrText, setArtistText] = useState("");
    let [musicText, setMusicText] = useState("");
    let [listArtists, artistError] = useSeracheInLastFM('artist_text', artisrText);
    let [listTracks, tracksError] = useSeracheInLastFM('music_text', musicText);
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
                            <input id="artist_text" className="input" type="search" onChange={(e) => {setArtistText(e.target.value)}}/>
                            <i id="search_artist_button" className="fa fa-search" ></i>
                        </form>
                    </div>
                    <Validator valide_data={listArtists} error={artistError} api="artist_text" id="1"></Validator>
                </div>
                <div id="music_body" className="actor_music_body">
                    <p className="body_text">Music List</p>
                    <div className="search_area">
                        <form className="form" action="">
                            <input id="music_text" className="input" type="search" onChange={(e) => setMusicText(e.target.value)}/>
                            <i id="search_music_button" className="fa fa-search" ></i>
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
