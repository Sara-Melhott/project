/**
     * Получает json-файл через API Last.fm
     * Вызывает do_artist_list/do_music_list с полученными данными.
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
    });
    return json_answer;
}

