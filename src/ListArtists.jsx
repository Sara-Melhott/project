export function ListArtists(props){
    
    return(
        <div id="artist_list_div" className="list_area">
            <ol id="artist_list" className="rectangle">{props.valide_data.map((item) => {
            return <li key={Math.random()}>
                <a className="rectangle_a" href={item.link}>
                {item.name}</a></li>;
            })}</ol>
        </div>
    )
}