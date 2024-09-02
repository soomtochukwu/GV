"use client";
import Image from "next/image";
import "../globals.css";

import { useEffect, useState } from "react";

import React from "react";

const page = () => {
    const //
        [NFTID, setNFTID] = useState("3"),
        [NFTURL, setNFTURL] = useState(""),
        json = {
            html: `
            <div className="border-2 flex rounded-lg items-center justify-center text-center h-96 w-64 ngtBG font-mono font-extrabold text-9xl text-green-200">
                ${"#" + NFTID}
            </div>
            `,
            css: ".test { background-color: green; }",
        },
        username = "f97edbff-b9fe-4701-b046-ebde7882f0bd",
        password = "2f6a73e6-20e4-4cf6-b960-a40d4ccca4ad",
        options = {
            method: "POST",
            body: JSON.stringify(json),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + btoa(username + ":" + password),
            },
        },
        generateNFT = async () => {
            fetch("https://hcti.io/v1/image", options)
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        return Promise.reject(res.status);
                    }
                })
                .then((data) => {
                    // Image URL is available here
                    console.log(data.url);
                    setNFTURL(data.url)
                })
                .catch((err) => console.error(err));
        };

    /* useEffect(() => {

    }, []); */
    return (
        <div>
            <input
                type="number"
                className="p-4 bg-gray-300"
                placeholder="NFT_ID"
                onChange={(e) => {
                    String(setNFTID(e.currentTarget.value));
                }}
            />
            <div className="border-2 flex rounded-lg items-center justify-center text-center h-96 w-64 ngtBG font-mono font-extrabold text-9xl text-green-200">
                #{NFTID}
            </div>
            <br></br>
            <button onClick={generateNFT}>Get NFT</button>
            <br></br>
            <br></br>
            <div>
                {/* <Image src={NFTURL} width={350} height={500} alt="NFTURL"></Image> */}
                <img src={NFTURL} alt="NFTURL"></img>
            </div>
        </div>
    );
};

export default page;
