import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image"
import * as React from "react";
import Layout from "../components/Layout/Layout";


function Users ({data}) {
    console.log("Users data", data)
    return (<Layout pageTitle="USERS">
        USERS
        {(data && data.image) && <Image width={100} height={100} alt="yesorno" src={data.image} /> || <CircularProgress disableShrink />}
    </Layout>)
};

// 'https://api.simplyrets.com/openhouses'
// getStaticProps({method: 'GET', url: 'https://yesno.wtf/api' })
export async function getStaticProps() {
    
    const res = await fetch("https://yesno.wtf/api");
    const data = await res.json();
    return {
        props: {
          data
        },
        revalidate: 10 // In seconds
      }
};

export default Users