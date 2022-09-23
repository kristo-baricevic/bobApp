import Head from 'next/head'
import { connectToDatabase } from "../util/mongodb";
import React from 'react';

<script src="http://yui.yahooapis.com/3.18.1/build/yui/yui-min.js"></script>


export async function getServerSideProps() {
  
    const { db } = await connectToDatabase();

    const data = await db.collection("sample_photoApp").find({}).limit(20);
    const arrayData = await data.toArray();
    const serialData = JSON.parse(JSON.stringify(arrayData));

    return {
      props: { properties: serialData },
    }
}

export default function Home({ properties }) {

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
          <div className="pb-3">
            <div className="max-w-sm rounded  bg-slate-100 overflow-hidden shadow-lg">
              <img src={property.url}/>
              <div className="px-6 py-4">
                <div className="text-center text-white bg-black text-xl mb-2">{property.name}</div>
                  <div className="p-6">
                    {property.tags.map(tag => (
                      <>
                      <button className="pill">#{ tag } </button>          
                      </>
                    ))}
                  </div>
              </div>
            </div>
          </div>
          ))}
          </div>
        </div>
      </div>
      </main>
    </div>
  )
}



