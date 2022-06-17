import {validate_data } from './scripts/validator';

export function ListTracks(props){
    if (props.valide_data.length == 0){
        return null;
    }
    let list = validate_data(props.valide_data.results.trackmatches, "music_text");
    let i=1;
    return(
        <div id="music_list_div" className="list_area">
            <ol id="music_list" className="rectangle">{list.map((item) => {
            return <li key={i++}>
                <a className="rectangle_a" href={item.link}>
                {item.artist} - {item.name}</a></li>;    
        })
            }</ol>
        </div>
    )
}