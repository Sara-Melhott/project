export function Validator(props){
    let errorMessage = "";
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
    return(
        <div>
            <p className="validaton_text">{errorMessage}</p>
        </div>
    )
}