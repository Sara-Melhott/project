const default_link = "https://www.last.fm/"
/**
 * агрегатор
 * @param {*} data 
 * @param {*} request 
 * @returns 
 */
 export function validate_data(data, request){
    if(request == "artist")
        return validate_artist(data)
    if(request == "music")
        return validate_track(data)
}
/**
 * Валидатор для запоса по артистам
 * @param {*} data 
 * @returns Валидный ответ.
 */
 export function validate_artist(artist){
    const artist_name = () => {try{return artist.name}catch(e){return "Unknown"}};
    const artist_link = () => {try{return artist.url}catch(e){window.alert("No such object in Last.fm data base"); return default_link}};
    const validated_response = [artist_name(), artist_link()];
    return validated_response;
}
/**
 * Валидатор для запоса по треку
 * @param {*} data 
 * @returns Валидный ответ.
 */
 export function validate_track(track){
    const track_artist_name = () => {try{return track.artist}catch(e){return "Unknown"}};
    const track_name = () => {try{return track.name}catch(e){return ""}};
    const track_link = () => {try{return track.url}catch(e){window.alert("No such object in Last.fm data base"); return default_link}}
    const validated_response = [track_artist_name(), track_name(), track_link()];
    return validated_response;
}