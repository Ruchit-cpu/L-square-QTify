import React from "react";
import style from "./AlbumContentPage.module.css";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle, faCircle } from "@fortawesome/free-solid-svg-icons";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

export default function AlbumContentPage({ data }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //   console.log(data);
  const totalSongs = data.songs.length;
  const totalSongsDurationInMs = data.songs.reduce(
    (total, num) => total + num.durationInMs,
    0
  );
  const convertFunction = (data) => {
    const hour = Math.floor(data / (60 * 60 * 60));
    if (hour < 1) {
      const min = Math.floor(data / (60 * 60));
      const sec = Math.floor((data - min * 60 * 60) / 60);
      return `${min} : ${sec < 10 ? `0${sec}` : sec}`;
    }
    const minute = Math.floor((data - hour * 60 * 60 * 60) / (60 * 60));
    return `${hour} hr : ${minute < 10 ? `0${minute}` : minute} min`;
  };

  const handleChangePage = (event, newPage) => {
    // console.log(newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    // console.log(event.target.value);

    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };
  const Title = (item) => {
    return (
      <div style={{ display: "flex", alignItems: "center", columnGap: 6 }}>
        <img
          src={item.image}
          alt={item.title}
          width="59px"
          height="64px"
          style={{ borderRadius: "10px" }}
        />
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "21px",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          {item.title}
        </p>
      </div>
    );
  };

  return (
    <>
      <div className={style.container}>
        <img src={data.image} alt={data.title} className={style.image} />
        <div className={style.textContainer}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div className={style.rowContainer}>
            <p>{totalSongs} Songs</p>
            <p>
              <FontAwesomeIcon
                icon={faCircle}
                style={{
                  color: "white",
                  fontSize: 6,
                  lineHeight: 6,
                  fontWeight: 900,
                  marginRight: 5,
                }}
              />
              {convertFunction(totalSongsDurationInMs)}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faCircle}
                style={{
                  color: "white",
                  fontSize: 6,
                  lineHeight: 6,
                  fontWeight: 900,
                  marginRight: 5,
                }}
              />
              {data.follows} follows
            </p>
          </div>
          <div className={style.rowContainer}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(52, 201, 75, 1)",
                color: "white",
                borderRadius: 12,
              }}
              startIcon={
                <FontAwesomeIcon icon={faShuffle} style={{ color: "white" }} />
              }
            >
              Shuffle
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "rgba(52, 201, 75, 1)",
                borderRadius: 12,
                border: "1px solid rgba(52, 201, 75, 1)",
                backgroundColor: "rgba(18, 18, 18, 1)",
              }}
              startIcon={
                <LibraryAddIcon style={{ color: "rgba(52, 201, 75, 1)" }} />
              }
            >
              Add to Library
            </Button>
          </div>
        </div>
      </div>
      <TableContainer
        sx={{ backgroundColor: "rgba(18, 18, 18, 1)" }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={style.titleFont} sx={{ width: 650 }}>
                Title
              </TableCell>
              <TableCell
                className={style.titleFont}
                align="left"
                sx={{ width: 400 }}
              >
                Artist
              </TableCell>
              <TableCell className={style.titleFont} align="right">
                Duration
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.songs
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ color: "white" }}>
                    {Title(item)}
                  </TableCell>
                  <TableCell className={style.titleFont} align="left">
                    {item.artists[0]}
                  </TableCell>
                  <TableCell align="right" className={style.titleFont}>
                    {convertFunction(item.durationInMs)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.songs.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          color: "white",
          "& .MuiSvgIcon-root": {
            color: "rgba(255, 255, 255, 1)",
          },
          backgroundColor: "rgba(18, 18, 18, 1)",
          margin: "10px",
        }}
      />
    </>
  );
}
