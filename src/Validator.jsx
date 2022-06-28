import {validate_data } from './scripts/validator';

export function Validator(props){
    let errorMessage = "";
    if (props.error.length != 0){
        errorMessage = props.error.message;
    }    
    else{
        if (props.valide_data.length == 0){
            errorMessage = "The search field is empty. Search is not possible.";
        }
        else{
            if (props.api == "artist_text"){
                if (props.valide_data.results.artistmatches.artist.length == 0){
                    errorMessage = "No such object in Last.fm data base";
                }
            }
            else{
                if (props.valide_data.results.trackmatches.track.length == 0){
                    errorMessage = "No such object in Last.fm data base";
                }
            }
        }
    }
    if (errorMessage != ""){
        return(
            <div>
                <p className="validaton_text">{errorMessage}</p>
            </div>
        )
    }
    else{
        if (props.api == "artist_text"){
            let list = validate_data(props.valide_data.results.artistmatches,  "artist_text");
            return(
                <div id="artist_list_div" className="list_area">
                    <ol id="artist_list" className="rectangle">{list.map((item) => {
                    
                    return <li key={item.id}>
                        <a className="rectangle_a" href={item.link}>
                        {item.name}</a></li>;
                    })}</ol>
                </div>
            )
        }
        else{
            let list = validate_data(props.valide_data.results.trackmatches, "music_text");
            return(
                <div id="music_list_div" className="list_area">
                    <ol id="music_list" className="rectangle">{list.map((item) => {
                    return <li key={item.id}>
                        <a className="rectangle_a" href={item.link}>
                        {item.artist} - {item.name}</a></li>;    
                })
                    }</ol>
                </div>
            )
        }
    }
    
}