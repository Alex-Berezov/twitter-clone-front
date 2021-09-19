import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';
import ReplyIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RetweetIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ShareOutlined';

import BasicAvatar from '../Ui/BasicAvatar/BasicAvatar';
import { singleTweetStyles } from './singleTweetStyles';

interface SingleTweetProps {
    user: {
        accountName: string,
        accountShortName: string,
        avatarUrl: string,
    },
    text: string,
};

const SingleTweet: React.FC<SingleTweetProps> = (
    { text, user }: SingleTweetProps
    ): React.ReactElement => {
    const classes = singleTweetStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <BasicAvatar accountName={user.accountName} avatarUrl={user.avatarUrl} />
                </Grid>
                <Grid item xs={11} className={classes.singleTweetContent}>
                    <div className={classes.singleTweetHeader}>
                        <div className={classes.accountInfo}>
                            <Typography variant="subtitle2" className={classes.accountName}>
                                {user.accountName}
                            </Typography>
                            <Typography variant="body2" className={classes.accountShortName}>
                                {user.accountShortName}
                            </Typography>
                            <FiberManualRecordIcon className={classes.separationDot} />
                            <Typography variant="body2" className={classes.publicationTime}>
                                6m
                            </Typography>
                        </div>
                    </div>
                    <Typography variant="body2" className={classes.singleTweetText}>
                        {text}
                    </Typography>
                    <div className={classes.singleTweetButtons}>
                        <IconButton aria-label="reply icon" className={classes.replyIcon}>
                            <ReplyIcon fontSize='small' />
                            <Typography variant="body2">1</Typography>
                        </IconButton>
                        <IconButton aria-label="retweet icon" className={classes.retweetIcon}>
                            <RetweetIcon fontSize='small' />
                            <Typography variant="body2">12</Typography>
                        </IconButton>
                        <IconButton aria-label="like icon" className={classes.likeIcon}>
                            <LikeIcon fontSize='small' />
                            <Typography variant="body2">123</Typography>
                        </IconButton>
                        <IconButton aria-label="share icon" className={classes.shareIcon}>
                            <ShareIcon fontSize='small' />
                            <Typography variant="body2">21</Typography>
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default SingleTweet;