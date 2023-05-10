import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import itemData from './itemData';

import logoShmura from "../Pictures-Video/logoShmura.png";
import a from "../Pictures-Video/a.jpg";
import d from "../Pictures-Video/d.JPG";
import j from "../Pictures-Video/j.JPG";
import m from "../Pictures-Video/m.JPG";
import p from "../Pictures-Video/p.jpg";
import map from "../Pictures-Video/map.png";
import AddNewRecordEvents from "./AddNewRecordEvents";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const itemData = [
  {
    img: p,
    title: "מלווה מלכה",
    author: "author",
  },
  {
    img: a,
    title: "מגזין שמורה - דף הבית",
    author: "author",
  },
  {
    img: d,
    title: "שבת גיבוש",
    author: "author",
  },
  {
    img: j,
    title: "טיול לצפון תשפ",
    author: "author",
  },
  {
    img: m,
    title: "מחנה חורף",
    author: "author",
  },
  {
    img: logoShmura,
    title: "Image",
    author: "author",
  },
  {
    img: map,
    title: "Image",
    author: "author",
  },
];

export default function MyImageList() {
  const classes = useStyles();

  return (
    <div className="w-6 h-12rem ml-0 l-0 m-0 " style={{}}>
      <ImageList
        className={classes.imageList}
        cols={4.5}
        style={{
          left: "0px",
          width: "66%",
          position: "absolute",
          width: "64%",
          marginTop: "0",
          marginRight: "0px",
          left: "0px",
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              onClick={() => {
                alert("here i need to render the big images");
              }}
            />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  {/* <StarBorderIcon className={classes.title} /> */}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
