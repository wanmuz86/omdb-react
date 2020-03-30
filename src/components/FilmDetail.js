import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import ReviewListItem from '../components/ReviewList';
// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 140,
//     },
//   });

// const classes = useStyles();
class FilmDetail extends React.Component {
   

    constructor(){
        super()
        this.state = {
            filmid:'',
            film:{}
        }
    }

    
    componentDidMount(){
     

        fetch(`http://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=87d10179`)
        .then(res => res.json())
        .then(
            (result) => {
               console.log(result)
               this.setState({
                   film:result
               })
            }
        ,
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error)
            }
        )
    }

    render(){
        let ratingList;
        console.log(this.state.film)       
        if (this.state.film.Ratings){
           ratingList =  this.state.film.Ratings.map(rating=>(
            <ReviewListItem rating={rating}></ReviewListItem>
            ))
        }
        else {
            ratingList = <div>No Rating Available</div>
        }

       const CardStyle = {
           height:500,
       }
        return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        {/* <MenuIcon /> */}
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Film Detail
                            </Typography>
                            </Toolbar>
                            </AppBar>
                            <Card >
                                <CardActionArea>
                                    <CardMedia
        //   className={classes.media}
        style={CardStyle}
          image={this.state.film.Poster}
          title={this.state.film.Title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {this.state.film.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.state.film.Plot}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="h2">
            Reviews
          </Typography>
          <List>
       {ratingList}
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </div>
    )
    }
}

export default FilmDetail;