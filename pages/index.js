import Head from 'next/head'
import { connectToDatabase } from "../util/mongodb";
import React, { useState, useEffect } from 'react';
import { PhotoCard } from '../components/PhotoCard'
import { Input } from 'semantic-ui-react';

export async function getServerSideProps() {
  
    const { db } = await connectToDatabase();

    const data = await db.collection("sample_photoApp").find({}).limit(20);
    const arrayData = await data.toArray();
    const serialData = JSON.parse(JSON.stringify(arrayData));

    return {
      props: { properties: serialData },
    }
}

export default function Home( { properties } ) {
  
  const [data, setData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !=="") {
      const filteredData = properties.filter((item) => {
        return Object.values(item.tags).join("").toLowerCase().includes(searchInput.toLowerCase())
    })
    setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(data)
    }
  }

  return (
    <div>
      <Head>
        <title>Bob Photos</title>
      </Head>
      <main>
        <div>
          <h1 className="uppercase">Bob Retuer Photo Archive [Prototype]</h1>
        </div>
      <div>
      <div className="flex flex-col justify-center items-center ">
            <Input className="mt-20 mb-5 inline-block" icon='search'
                placeholder="It Don't Matter"
                term={searchInput}
                onChange={(e) => searchItems(e.target.value)}
            />
          </div>
        <div className="columns-2xs gap-4 px-3">
          <div className="">
            {searchInput.length > 1 ? (
              filteredResults.map((item) => {
              return (
                <PhotoCard property={item} />
              )
            })
          ) : (
            properties.map((item) => {
              return (
              <PhotoCard property={item} />
            )}
            ))
          }
          </div>
        </div>
      </div>
      </main>
    </div>
  )
}



