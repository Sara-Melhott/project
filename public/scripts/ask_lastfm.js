import { update_artist_list, update_music_list } from "./update_information.js"
/**
     * Получает json-файл через API Last.fm
     * Вызывает do_artist_list/do_music_list с полученными данными.
     * @param {string} url - ссылка без параметров
     * @param {URLSearchParams} params - параметры
     * @param {string} search_type - тип запроса
     */
 export async function ask_lastfm(url, params, search_type){
    event.preventDefault();

    let path_request = new Request(url+params);

    let json_answer = fetch(path_request)
    .then( (response) => {
      return response.json();
    }).then((data)=>{
    try
    {
        if(search_type=="artist"){
            update_artist_list(data);
            return;
        }
        if (search_type=="music"){
            update_music_list(data);
            return;
        }
    }catch(err)
    {
        console.log(err)
        window.alert("No such object in Last.fm data base")
    }
    })
    .catch((err)=>{
        window.alert(err.message)
    });
}