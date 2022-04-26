import React, {useState, useEffect, useRef} from 'react';
import { Box } from '@material-ui/core';
import { BadgeAvatar, ChatContent } from '../Sidebar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: '0 2px 10px 0 rgba(88,133,196,0.05)',
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'grab',
    },
  },
}));

const Chat = ({ conversation, setActiveChat, passChildData, activeConvo }) => {
  const classes = useStyles();
  const { otherUser } = conversation;

  const [count, setCount] = useState(0);
  const latestMessageText = conversation.id && conversation.latestMessageText;

  const handleClick = async (conversation) => {
    await setActiveChat(conversation.otherUser.username);
    setCount(0);
    passDataToSidebar(conversation.id);
  };

  const passDataToSidebar = (data) => {
    passChildData(data);
  }

  
  
  var numUnreadMessages = 0;
  conversation.messages.forEach((message) => {
    if(message.senderId == otherUser.id) {
      numUnreadMessages++; 
    }
  });

  useEffect(() => {
    setCount(numUnreadMessages);
  }, [])


  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) { 
       firstUpdate.current = false;
    }
    else {
      // if conversation is not currently open and a message is sent by other user, add to count
      if(activeConvo.current != conversation.id) {
        if(conversation.messages[conversation.messages.length-1].senderId == otherUser.id) {
          setCount(count + 1);
      }
        }
    }
  }, [latestMessageText])
  
  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} activeConvo = {activeConvo} count={count}/>
    </Box>
  );
};

export default Chat;
