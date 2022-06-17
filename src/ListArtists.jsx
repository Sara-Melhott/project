import {validate_data } from './scripts/validator';

export function ListArtists(props){
    if (props.valide_data.length == 0){
        return null;
    }
    let list = validate_data(props.valide_data.results.artistmatches,  "artist_text");
    let i=1;
    return(
        <div id="artist_list_div" className="list_area">
            <ol id="artist_list" className="rectangle">{list.map((item) => {
            
            return <li key={i++}>
                <a className="rectangle_a" href={item.link}>
                {item.name}</a></li>;
            })}</ol>
        </div>
    )
}