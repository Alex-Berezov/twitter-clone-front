import { makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import blue from '@material-ui/core/colors/blue'
import teal from '@material-ui/core/colors/teal'
import pink from '@material-ui/core/colors/pink'

export const singleTweetStyles = makeStyles(() => ({
  root: {
    borderBottom: '1px solid rgb(230 233 234)',
    padding: 10,
    cursor: 'pointer',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  singleTweet: {
    marginBottom: 20,
    borderBottom: '1px solid #e6e6e6',
    '&:hover': {
      background: grey[50],
    },
  },
  singleTweetContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: '25px !important',
    wordBreak: 'break-word',
  },
  singleTweetHeader: {
    display: 'flex',
    flexDirection: 'column',
  },
  accountInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  accountName: {
    marginRight: 5,
  },
  accountShortName: {
    marginRight: 5,
    color: grey[500],
  },
  separationDot: {
    fontSize: 5,
    marginRight: 5,
    color: grey[500],
  },
  publicationTime: {
    color: grey[500],
  },
  singleTweetText: {
    marginTop: 5,
  },
  singleTweetButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  replyIcon: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      marginLeft: 5,
    },
    '&:hover': {
      backgroundColor: blue[50],
      color: blue[500],
    },
  },
  retweetIcon: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      marginLeft: 5,
    },
    '&:hover': {
      backgroundColor: teal[50],
      color: teal[500],
    },
  },
  likeIcon: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      marginLeft: 5,
    },
    '&:hover': {
      backgroundColor: pink[50],
      color: pink[500],
    },
  },
  shareIcon: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      marginLeft: 5,
    },
    '&:hover': {
      backgroundColor: blue[50],
      color: blue[500],
    },
  },
  preloader: {
    textAlign: 'center',
    marginTop: 100,
  },
}))
