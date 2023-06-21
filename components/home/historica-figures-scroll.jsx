
const HistoricalFigures = () => {
  const figures = [
    {
      name: "Akhmet Baitursynuly",
      image: "/baitursyn.jpeg",
      description: "Akhmet Baitursynov was a prominent Kazakh poet, writer, and public figure. He played a crucial role in the development of Kazakh literature and language reform."
    },
    {
      name: "Alikhan Bokeihanov",
      image: "/bokeihan.jpg",
      description: "Alikhan Bokeihanov was a Kazakh composer and musician. He is known for his contributions to Kazakh classical music and his efforts in preserving traditional Kazakh music."
    },
    {
      name: "Birzhan Sal",
      image: "/birzhan-sal.jpeg",
      description: "Birzhan Sal was a Kazakh akyn (poet-musician) and a key figure in Kazakh oral literature. His poetry and musical performances played a significant role in shaping Kazakh cultural identity."
    },
    {
      name: "Sara",
      image: "/sara.jpeg",
      description: "Sara is  poet, musician, folk poet, musician, drummer. He came from the Atalik Kaptagai section of the Matai clan of the Naiman tribe."
    }
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h3 className="text-4xl text-center mb-8">Historical Figures</h3>
        <div className="flex overflow-x-auto space-x-4">
          {figures.map((figure, index) => (
            <div key={index} className="max-w-sm">
              <img src={figure.image} alt={figure.name} className="w-56 h-72 rounded-lg mb-2" />
              <h4 className="text-2xl font-serif mb-2">{figure.name}</h4>
              <p>{figure.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoricalFigures;
