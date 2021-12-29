// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const CONSTS = {
  GET: {
    method: 'GET'
  }
}

export async function getStaticProps({method, url}) {
  const res = await fetch(new Request(url, CONSTS[method]));
  const data = await res.json();
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}
