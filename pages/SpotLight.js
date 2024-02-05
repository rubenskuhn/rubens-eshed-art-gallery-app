import Image from "next/image";

export default function spotlightPage({ data }) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let randomNumber = getRandomInt(data.length);

  console.log("random art piece: ", data[randomNumber]);

  const randomArtPiece = data[randomNumber];

  return (
    <>
      <h1>Spot Light Diahrrea DASSXLEKSYA Art</h1>

      <div className="art-piece">
        <p>{randomArtPiece.artist}</p>
        <Image
          src={randomArtPiece.imageSource}
          width={500}
          height={500}
          alt="Image of the art piece"
        />
      </div>
    </>
  );
}
