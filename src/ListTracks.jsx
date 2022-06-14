export function ListTracks(props){
    
    return(
        <div id="music_list_div" className="list_area">
            <ol id="music_list" className="rectangle">{props.valide_data.map((item) => {
            return <li key={Math.random()}>
                <a className="rectangle_a" href={item.link}>
                {item.artist} - {item.name}</a></li>;
            })}</ol>
        </div>
    )
}