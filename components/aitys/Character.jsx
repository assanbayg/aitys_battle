import Image from "next/image";

const Character = ({ name, image, second = false }) => {
  return (
    <div>
      <div className="blur-box h-32 w-32 overflow-hidden rounded-full p-5 md:h-64 md:w-64">
        <Image
          src={image}
          alt={name}
          width="256"
          height="256"
          className={`${
            second && image != "/mark.png" ? "scale-x-[-1]" : ""
          } object-cover`}
        />
      </div>
      <h2 className="hidden text-center text-2xl font-bold md:block">{name}</h2>
    </div>
  );
};

export default Character;
