import { getServerSideProps } from "../pages/index";
import React, { useState, useEffect } from 'react';

function CustomComponent () {
    const [searchInput, setSearchInput] = useState("");
    const [data, setData] = useState({});
    const [filteredResults, setFilteredResults] = [""];

    const getData = (serialData) => {
        setData(serialData.tags)
    };

    const handleData = (e) => {
        setSearchInput(e.target.value);
    };

    if (searchInput) {
        getData();
        const filteredData = data.filter((searchInput) => {
            return Object.values(data).join("").toLowerCase().includes(searchInput.toLowerCase())
        })
            setFilteredResults(filteredData)
        }

    }
    

export { CustomComponent };