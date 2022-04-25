import React, {useState} from "react";
import './SearchBar.css';


const SearchBar = ({onSubmitApiCall, vidList}) => {
    const [query, setQuery] = useState('');

    const onSearchSubmit = async (e) => {
        e.preventDefault();
        const vids = await onSubmitApiCall(query);
        console.log('form submitted');
        }
    
    return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={onSearchSubmit}>
                    <div className="field">
                        <label htmlFor="searchBar">Search Vids</label>
                        <input 
                            value={query} 
                            onChange={(e) => setQuery(e.target.value)} 
                            type="text" 
                            name="searchBar" 
                        /> 
                    </div>
                </form>
                <div>
                    {vidList}
                </div>
            </div>
        )
}



// class SearchBar extends React.Component{
//     state = {query: ''};

//     onInputChange = (e) => {
//         this.setState({query: e.target.value});
//     }

//     onSearchSubmit = async (e) => {
//         e.preventDefault();
//         const vids = await this.props.onSubmitApiCall(this.state.query);
//         console.log('form submitted'); 
//         // const vid = vids.data.items.map(v => {
//         //     return <div key={v.id.videoId}>{v.snippet.channelTitle}</div>
//         // })
//         // this.setState({vidList: vid});
//     }


//     render(){


//         return(
//             <div className="search-bar ui segment">
//                 <form className="ui form" onSubmit={this.onSearchSubmit}>
//                     <div className="field">
//                         <label htmlFor="searchBar">Search Vids</label>
//                         <input value={this.state.query} onChange={this.onInputChange} type="text" name="searchBar" /> 
//                     </div>
//                 </form>
//                 <div>
//                     {this.state.vidList}
//                 </div>
//             </div>
//         )
//     }
// }

export default SearchBar;

