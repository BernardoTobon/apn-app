const UserCard = ({ name, imgUrl }) => {
  return (
    <div className="flex flex-row">
      <div>
        <img
          className="rounded-full h-24 w-24 "
          src={
            imgUrl ||
            "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Pic.png"
          }
        />
      </div>
      <div className="flex justify-center">
        <input
          value={name}
          disabled
          className="border border-2 border-dark-green w-40 h-10 m-2 px-8 rounded-lg"
          placeholder="Nombre"
        />
      </div>
    </div>
  );
};

export default UserCard;
