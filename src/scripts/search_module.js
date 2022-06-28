/**
     * Получает json-файл через API Last.fm
     * @param {string} url - ссылка без параметров
     * @param {URLSearchParams} params - параметры
     */
 export async function ask_lastfm(url, params){
    
    const json_answer = fetch(url+params)
    .then( (response) => {
      return response.json();
    })
    .catch((err)=>{
        window.alert(err.message)
        throw Error(err);
    });
    return json_answer;
}
/**
 * Подготавливает запрос к last.fm
 * Вызывает ask_lastfm.
 * @param {*} text - текст сроки поиска
 * @param {*} type - тип поиска (артист/трек)
 * @returns 
 */
 export async function lastfm_search(search_type, text){
    const key = "4f3492b85c1020e8035036d6f10727bb"
    const url_starter = "http://ws.audioscrobbler.com/2.0/?";
    let params = new URLSearchParams(url_starter.search);
    
    params.append('autocorrect',1);
    params.append('api_key', key);
    params.append('format','json');
    
    if(text != ""){
        let ans;
        if (search_type == "artist_text"){
            params.append('method','artist.search');
            params.append('artist', text);
            ans = ask_lastfm(url_starter, params);
        }else{
            params.append('method','track.search');
            params.append('track', text);
            ans = ask_lastfm(url_starter, params);
        }
        return ans;
    }
    return [];
}

