const handleMessage = (io, socket) => {
  socket.on("send_message", ({ room, message, user }) => {
    io.to(room).emit("receive_message", { message, user, time: Date.now() });
  });

  socket.on("join_room", (room) => {
    socket.join(room);
  });
};

module.exports = handleMessage;
