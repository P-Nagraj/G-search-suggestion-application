import { Component } from "react";
import SuggestionItem from "../SuggestionItem";
import "./index.css"
class GoogleSuggestion extends Component{

    state={searchInput:'',}

    onChangeSearchInput=event=>{
        this.setState({
            searchInput:event.target.value
        })
    }
    updateSearchInput=value=>{
        this.setState({
            searchInput:value
        })
    }



    render(){
        const {searchInput}=this.state
        const {suggestionsList}=this.props
        const searchResult=suggestionsList.filter(eachSugs=>eachSugs.suggestion.toLowerCase().includes(searchInput.toLowerCase()))

        return(
            <div className="app-container">
                <div className="google-suggestions-container">
                    <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
                         alt="google logo"
                         className="google-logo"/>
                    <div className="search-input-suggestions-container">
                        <div className="search-input-container">
                            <img
                                alt="search icon"
                                className="search-icon"
                                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                            />
                            <input
                                type="search"
                                className="search-input"
                                placeholder="Search Google"
                                onChange={this.onChangeSearchInput}
                                value={searchInput}
                            />
                        </div>
                        <ul className="suggestion-list">
                            {searchResult.map(eachSuggItem=>
                                <SuggestionItem key={eachSuggItem.id}
                                suggestionDetails={eachSuggItem}
                                updateSearchInput={this.updateSearchInput}/>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default GoogleSuggestion;