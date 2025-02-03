import Card from "@/app/_components/Card";

export const revalidate = 0;

export default async function ToursCards() {
  const res = await fetch(`http://localhost:8000/cards`);
  const data = await res.json();
  return (
    <>
      {data.map((element) => (
        <Card
          key={element.id}
          nome={element.nome}
          img={element.image}
          description={element.description}
          price={element.price}
        />
      ))}
    </>
  );
}
