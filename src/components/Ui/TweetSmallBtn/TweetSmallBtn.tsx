import React from "react"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      borderRadius: "99px",
      "& span": {
        marginRight: 0,
      },
    },
  })
)

interface TweetSmallBtnProps {
  disabled: boolean
  addTweet: () => void
}

const TweetSmallBtn: React.FC<TweetSmallBtnProps> = ({
  disabled,
  addTweet,
}: TweetSmallBtnProps): React.ReactElement => {
  const classes = useStyles()

  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      disabled={disabled}
      className={classes.margin}
      onClick={addTweet}
    >
      Tweet
    </Button>
  )
}

export default TweetSmallBtn
