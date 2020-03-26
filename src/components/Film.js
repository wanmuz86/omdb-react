import React from 'react';
import Navbar from './Navbar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import FilmTile from './FilmTile'

class Film extends React.Component {

    state = {
        films : [],
        searchInput:''
    }
    constructor() {
        super()
        this.inputChange = this.inputChange.bind(this);
    }
    componentDidMount() {
       
    }


    inputChange(searchText){
        console.log(searchText)
        this.setState({
            searchInput:searchText
        })
        fetch(`http://www.omdbapi.com/?s=${this.state.searchInput}&apikey=87d10179`)
        .then(res => res.json())
        .then(
            (result) => {
                if (result.Search){
                this.setState({
                    films:result.Search
                })
                console.log(this.state.films)
            }
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error)
            }
        )
    }

    render() {
        let films;
        if (this.state.films.length > 0) {
            films =  <Grid container spacing={3}>
            {this.state.films.map(film=>(
               
            <Grid item xs={3} >
                <FilmTile film={film}/>
                </Grid>
                
                 ))
            }
                 </Grid>
        }
        else {
            films =  <div>No film available</div>
        }
        return (
            <div>
                <Navbar inputChange={this.inputChange}/>   
                  {films}               
            </div>
        )
    }
}

export default Film;