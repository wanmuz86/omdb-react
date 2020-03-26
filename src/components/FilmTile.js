import React from "react"
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import {Link} from "react-router-dom"

function FilmTile(props) {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    style={{height:100, paddingTop:'56.25%'}}
                    image={props.film.Poster}
                    title={props.film.Title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.film.Title}
                        </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.film.Year}
                        </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Link to={`/films/${props.film.imdbID}`}>
                <Button size="small" color="primary">
                    Learn More
                    </Button>
            </Link>
            </CardActions>
        </Card>
    )
}

export default FilmTile;
