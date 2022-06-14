/**
     * Получает json-файл через API Last.fm
     * Вызывает do_artist_list/do_music_list с полученными данными.
     * @param {string} url - ссылка без параметров
     * @param {URLSearchParams} params - параметры
     * @param {string} search_type - тип запроса
     */
 export async function ask_lastfm(e, url, params, search_type){
    e.stopPropagation();

    const path_request = new Request(url+params);

    const json_answer = fetch(path_request)
    .then( (response) => {
      return response.json();
    })
    .catch((err)=>{
        window.alert(err.message)
    });
    return json_answer;
}