import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookCard = ({ name, img, bookData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="text-black border-2 rounded-md flex flex-col items-center justify-center m-4 p-4">
        <div className="text-md mb-2 bg-white rounded p-2 ">
          {name.length > 10 ? name.slice(0, 9) + "..." : name}
        </div>
        <img
          className="min-w-[180px] max-w-[180px] h-[270px]"
          alt="kitap"
          src={
            img
              ? img
              : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
          }
        />
        <button onClick={handleOpen} className="text-white text-xs">
          Details
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {bookData.volumeInfo.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {bookData.volumeInfo.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BookCard;
