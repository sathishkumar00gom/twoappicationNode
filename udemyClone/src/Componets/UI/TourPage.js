import React,{useEffect} from 'react'
import auth from '../services/auth-service'
import {Box,CardMedia,Card,CardContent,Typography,CardActions,Button} from '@mui/material'
const TourPage=()=>{
    useEffect(()=>{
        (
            async()=>{
                try{
                    let response=await auth.getallTours()
                    console.log("tours",response)
                }
                catch(e){
                    console.log("tour",e)
                }
            }
        )()
    },[])
    return (
        <Box sx={{mt:8}}>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Box>
    )
}

export default TourPage