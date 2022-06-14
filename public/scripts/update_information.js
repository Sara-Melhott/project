import { validate_data } from "./validator.js";

/**
 * Обновление списка артистов на странице
 * @param {*} data
 * @returns 
 */
 export function update_artist_list(data){
    var list = document.getElementById("artist_list_div");
    var ol = document.getElementById("artist_list");
    if (ol != undefined){
        ol.remove();
    };

    var elem_ol = document.createElement("ol");
    elem_ol.setAttribute("id", "artist_list");
    elem_ol.setAttribute("class", "rectangle");
    for (let i=0; i<7; i++){
        var artist = validate_data(data.results.artistmatches.artist[i], "artist");
        var elem_li = document.createElement("li");
        var elem_a = document.createElement("a");
        elem_a.setAttribute("class", "rectangle_a");
        elem_a.setAttribute("href", artist[1]);
        elem_a.innerText = artist[0];
        elem_li.prepend(elem_a);
        elem_ol.prepend(elem_li);
    };
    list.prepend(elem_ol);
}
/**
 * Обновление списка музыки на странице
 * @param {*} data
 * @returns 
 */
 export function update_music_list(data){
    var list = document.getElementById("music_list_div");
    var ol = document.getElementById("music_list");
    if (ol != undefined){
        ol.remove();
    };
    var elem_ol = document.createElement("ol");
    elem_ol.setAttribute("id", "music_list");
    elem_ol.setAttribute("class", "rectangle");
    for (let i=0; i<7; i++){
        var track = validate_data(data.results.trackmatches.track[i], "music");
        var elem_li = document.createElement("li");
        var elem_a = document.createElement("a");
        elem_a.setAttribute("class", "rectangle_a");
        elem_a.setAttribute("href", track[2])
        elem_a.innerText = track[1] + " - " + track[0];
        elem_li.prepend(elem_a);
        elem_ol.prepend(elem_li);
    };
    list.prepend(elem_ol);
}