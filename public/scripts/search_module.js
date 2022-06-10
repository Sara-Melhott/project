import { ask_lastfm } from "./ask_lastfm.js";

let el = document.getElementById('search_artist_button');
el.addEventListener('click', () => {start_search('actor_text')});
el = document.getElementById('search_music_button');
el.addEventListener('click', () => {start_search('music_text')});


/**
     * Получает данные из полей поиска.
     * Вызывает lastfm_search.
     * @param {*} type
     */
export function start_search(type){
    let text = document.getElementById(type).value;
    lastfm_search(text, type);
}
/**
 * Подготавливает запрос к last.fm
 * Вызывает ask_lastfm.
 * @param {*} text
 * @param {*} type
 * @returns 
 */
 export async function lastfm_search(text, search_type){
    let key = "4f3492b85c1020e8035036d6f10727bb"
    let url_starter = "http://ws.audioscrobbler.com/2.0/?";
    let params = new URLSearchParams(url_starter.search);
    
    params.append('autocorrect',1);
    params.append('api_key', key);
    params.append('format','json');
    
    if(text != ''){
        let ans;
        if (search_type == "actor_text"){
            params.append('method','artist.search');
            params.append('artist', text);
            ans = ask_lastfm(url_starter, params,"artist");
        }else{
            params.append('method','track.search');
            params.append('track', text);
            ans = ask_lastfm(url_starter, params,"music");
        }
        return;
    }
    window.alert("The search field is empty. Search is not possible.")
}

