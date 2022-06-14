const default_link = "https://www.last.fm/"
/**
 * агрегатор
 * @param {*} data 
 * @param {*} request 
 * @returns 
 */
 export function validate_data(data, request){
    if(request == "artist_text")
        return validate_artist(data)
    if(request == "music_text")
        return validate_track(data)
}
/**
 * Валидатор для запоса по артистам
 * @param {*} data 
 * @returns Валидный ответ.
 */
 export function validate_artist(data){
    let validated_response = [];
    for (let i=0; i<7; i++){
        const artist_name = () => {try{return data.artist[i].name}catch(e){return "Unknown"}};
        const artist_link = () => {try{return data.artist[i].url}catch(e){window.alert("No such object in Last.fm data base"); return default_link}};
        validated_response[i] = {name: artist_name(), link: artist_link()};    
    }
    return validated_response;
}
/**
 * Валидатор для запроса по треку
 * @param {*} data 
 * @returns Валидный ответ.
 */
 export function validate_track(data){
    let validated_response = [];
    for (let i=0; i<7; i++){
        const track_artist_name = () => {try{return data.track[i].artist}catch(e){return "Unknown"}};
        const track_name = () => {try{return data.track[i].name}catch(e){return ""}};
        const track_link = () => {try{return data.track[i].url}catch(e){window.alert("No such object in Last.fm data base"); return default_link}}
        validated_response[i]  = {artist: track_artist_name(), name: track_name(), link: track_link()};
    }
    return validated_response;
}