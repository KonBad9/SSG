import { useRouter } from "next/router";

export default function Mem({ mem: { name, url } }) {
  const { back } = useRouter();

  return (
    <>
      <h1>Mem</h1>
      <img src={url} alt={`Mem ${name}`} />
      <button onClick={() => back()}>Wróć</button>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const response = await fetch("https://api.imgflip.com/get_memes");
  const { data, success } = await response.json();

  if (!success) {
    return {
      redirect: {
        destination: `/`,
        permament: false,
      },
    };
  }

  const mem = data.memes.find((mem) => mem.id === id);

  return {
    props: {
      mem,
    },
  };
}
