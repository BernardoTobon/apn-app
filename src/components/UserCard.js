const UserCard = ({name, lastName, userId, email, imgUrl}) => {
  return (
    <div className="flex flex-col w-[20vw] h=[20vw]">
      <img
        className="m-2 rounded-full"
        src={imgUrl || "https://i.pinimg.com/236x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg"}
      />
      <div className="flex justify-center m-1">
        <input value={name} className="border border-2 w-[35vw]" placeholder="Nombre" />
      </div>
      <div className="flex justify-center m-1">
        <input value={lastName} className="border border-2 w-[35vw]" placeholder="Apellido" />
      </div>
      <div className="flex justify-center m-1">
        <input value={userId} className="border border-2 w-[35vw]" placeholder="Cedulda" />
      </div>
      <div className="flex justify-center m-1">
        <input value={email} className="border border-2 w-[35vw]" placeholder="E-mail" />
      </div>
    </div>
  );
};

export default UserCard