import Head from 'next/head'
import { connectToDatabase } from "../util/mongodb";
import React from 'react';
import { PhotoCard } from '../components/PhotoCard'

export async function getServerSideProps() {
  
    const { db } = await connectToDatabase();

    const data = await db.collection("sample_photoApp").find({}).limit(20);
    const arrayData = await data.toArray();
    const serialData = JSON.parse(JSON.stringify(arrayData));

    return {
      props: { properties: serialData },
    }
}

export default function Home(  { properties }  ) {
  return (
    <div>
      <Head>
        <title>Bob Photo's</title>
      </Head>
      <main>
        <div>
          <h1 className="uppercase">Bob Photo Archive Prototype</h1>
        </div>
      <div>
      <div className="columns-2xs gap-4 px-3">
        <div className="">
        {properties && properties.map(property => (
          <PhotoCard property={property} />
          ))}
          </div>
        </div>
      </div>
      </main>
    </div>
  )
}



