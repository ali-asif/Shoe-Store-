import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
      <br />
      <h1 align="center">Top Selling Shoes</h1>
      <br />
      <hr />

      <Grid container spacing={1} justify="center">
        <Grid>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="ADIDAS YEEZY 700"
                height="140"
                image="https://hypebeast.com/image/2019/02/adidas-yeezy-boost-700-inertia-official-look-release-details-1.jpg"
                title="ADIDAS YEEZY 700"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ADIDAS YEEZY 700
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Price : 700$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Buy now
              </Button>
            </CardActions>
          </Card>
        </Grid>
        -
        <Grid>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="ADIDAS YEEZY 350"
                height="140"
                image="data:image/jpeg;base64,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"
                title="ADIDAS YEEZY 350"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ADIDAS YEEZY 350
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Price : 500$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Buy now
              </Button>
            </CardActions>
          </Card>
        </Grid>
        -
        <Grid>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="ADIDAS YEEZY 350 v3"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3yASpsNNOdxpalrEaEtRAt8GauXHQQ5pQ6w&usqp=CAU"
                title="ADIDAS YEEZY 350 v3"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ADIDAS YEEZY 350 v3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Price : 700$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Buy now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={1} justify="center">
        <Grid>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="ADIDAS YEEZY 700 v3 Arzareth"
                height="140"
                image="https://stockx-360.imgix.net//adidas-Yeezy-700-V3-Arzareth/Images/adidas-Yeezy-700-V3-Arzareth/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1599674275"
                title="ADIDAS YEEZY 700 v3 Arzareth"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ADIDAS YEEZY 700 v3 Arzareth
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Price : 500$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Buy now
              </Button>
            </CardActions>
          </Card>
        </Grid>
        -
        <Grid>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="ADIDAS YEEZY 500"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_RNWP4tSISc3afnQVH49bzueYgGF95TU95Q&usqp=CAU"
                title="ADIDAS YEEZY 500"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ADIDAS YEEZY 500
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Price : 400$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Buy now
              </Button>
            </CardActions>
          </Card>
        </Grid>
        -
        <Grid>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="ADIDAS ULTRA BOOST"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrO3QVC2yykA729JMpmqxBZGIF-N72tm9h9A&usqp=CAU"
                title="ADIDAS ULTRA BOOST"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  ADIDAS ULTRA BOOST
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Price : 300$
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Buy now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
