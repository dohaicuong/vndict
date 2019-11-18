import {
  Dialog, AppBar, Toolbar, IconButton, Typography,
  makeStyles, Theme, createStyles, Slide, Box
} from "@material-ui/core";

import React from "react";

import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions';
import { LinkInterceptor } from "components/LinkInterceptor";
import { toProperCase } from "services/util";
import WordSpeaker from "common/WordSpeaker/WordSpeaker";

interface WordPopupProps {
  word: any
  onClose: () => void
}

export const WordPopup: React.FC<WordPopupProps> = ({ word, onClose }) => {
  const classes = useStyles({});
  const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const handleClose = () => onClose();
  if (!word) return null;

  return (
    <Dialog
      fullScreen={window.innerWidth < 667}
      open={word != null}
      onClose={() => { }}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {toProperCase(word.word)} {word.pronounce && <span> - {word.pronounce}</span>}
          </Typography>
          <WordSpeaker word={word.word} accents={["us", "uk"]} noStyle={true}></WordSpeaker>
        </Toolbar>
      </AppBar>
      <Box className={classes.innerBox}>
        <LinkInterceptor
          html={word.content}
          onLinkClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
          }}></LinkInterceptor>
      </Box>
    </Dialog>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    innerBox: {
      padding: theme.spacing(2)
    }
  }),
);