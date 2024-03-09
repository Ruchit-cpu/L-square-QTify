import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import SongImage from "../../assets/Rectangle 2138.png";
import song from "../../assets/a_beautiful_day.mp3";
const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
  margin: 5,
});

export default function MusicBar() {
  const audioRef = useRef();
  //   const progressBarRef = useRef();
  const playAnimationRef = useRef(); /// reference to animation
  //   const duration = 200; // seconds
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [paused, setPaused] = useState(false);
  const [volume, setVolume] = useState(30);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const onLoadedMetadata = () => {
    setDuration(Math.floor(audioRef.current.duration));
  };

  const togglePlayPause = () => {
    const prevValue = paused;
    setPaused(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
      playAnimationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(playAnimationRef.current);
    }
  };

  const whilePlaying = () => {
    setPosition(Math.floor(audioRef.current.currentTime));
    playAnimationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeVolume = (_, value) => {
    audioRef.current.volume = value / 100;
    setVolume(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
        width: "100%",
        marginBottom: "40px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CoverImage>
          <img alt="can't win - Chilling Sunday" src={SongImage} />
        </CoverImage>
        <Box
          sx={{
            ml: 1.5,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography noWrap>
            <b>Song Name</b>
          </Typography>
          <Typography noWrap letterSpacing={-0.25}>
            Album Name
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton aria-label="previous song">
            <FastRewindRounded
              fontSize="large"
              sx={{ color: "white" }}
              onClick={() => {
                audioRef.current.currentTime = 0;
                setPosition(0);
              }}
            />
          </IconButton>
          <IconButton
            aria-label={paused ? "play" : "pause"}
            onClick={togglePlayPause}
          >
            {paused ? (
              <PauseRounded sx={{ fontSize: "3rem", color: "white" }} />
            ) : (
              <PlayArrowRounded sx={{ fontSize: "3rem", color: "white" }} />
            )}
          </IconButton>
          <IconButton aria-label="next song">
            <FastForwardRounded
              fontSize="large"
              sx={{ color: "white" }}
              onClick={() => {
                audioRef.current.currentTime = duration;
                setPosition(duration);
                togglePlayPause();
              }}
            />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 0,
            width: 600,
          }}
        >
          <TinyText>{formatDuration(position)}</TinyText>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            // defaultValue={0}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => {
              audioRef.current.currentTime = value;
              setPosition(value);
              //   console.log(value);
              //   console.log(formatDuration(audioRef.current.currentTime));
            }}
            sx={{ color: "rgba(52, 201, 75, 1)" }}
            // ref={progressBarRef}
          />
          <TinyText>-{formatDuration(duration - position)}</TinyText>
        </Box>
      </Box>
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDownRounded
            fontSize="medium"
            onClick={() => {
              setVolume((prevValue) => {
                if (prevValue > 0) {
                  audioRef.current.volume = (prevValue - 10) / 100;
                  return prevValue - 10;
                } else {
                  audioRef.current.volume = 0;
                  return 0;
                }
              });
            }}
          />
          <Slider
            aria-label="Volume"
            // defaultValue={audioRef.current.volume}
            value={volume}
            sx={{ color: "rgba(52, 201, 75, 1)" }}
            onChange={changeVolume}
          />
          <VolumeUpRounded
            fontSize="medium"
            onClick={() => {
              setVolume((prevValue) => {
                if (prevValue < 100) {
                  audioRef.current.volume = (prevValue + 10) / 100;
                  return prevValue + 10;
                } else {
                  audioRef.current.volume = 1;
                  return 100;
                }
              });
            }}
          />
        </Stack>
      </Box>
      <audio
        src={song}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        volume
      ></audio>
    </Box>
  );
}
