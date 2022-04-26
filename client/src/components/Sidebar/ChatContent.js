import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  right: {
    position: "absolute",
    left: "8%",
    transform: "translate(0%, -100%)",
    fontSize: 14,
    backgroundColor: "#6495ed",
    width: "30px",
    color: "white",
    textAlign: "center",
    borderRadius: "40%",
  },
  previewText: {
    floatLeft: "left",
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  center: {
    margin: "auto",
  }
}));


const ChatContent = ({ conversation, count }) => {
  const classes = useStyles();

  const { otherUser } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;


  return (
    <Box className={classes.root}>
    <Box>
      <Typography className={classes.username}>
        {otherUser.username}
      </Typography>

      <Typography className={classes.previewText}>
        {latestMessageText}
      </Typography>

      <Badge className={classes.right}>
        <Typography className={classes.center}> 
          {count > 0 && count}

        </Typography>

      </Badge>

    </Box>
  </Box>
);
};
export default ChatContent;
