import Image from "next/image";

const Character = ({ name, image, i }) => {
  return (
    <div>
      <Image src={image} alt={name} width={256} height={256} />
      <h2 className="text-2xl font-bold ">{name}</h2>
    </div>
  );
};

export default Character;
