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
            <div class="ngtBG">
                ${"#" + NFTID}
                <span class="signature">#Governator</span>
            </div>
            `,
            css: `.ngtBG {
  background-image: url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_640.png');;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position:relative;
  color: rgb(187 247 208);

    font-size: 4rem;
    line-height: 1;

    font-weight: 800;
        font-family: monospace;


    width: 150px ;

    height: 250px ;

    text-align: center;

    justify-content: center;
align-items: center;
 border-radius: 0.5rem;
 display: flex;
 border-width: 2px;
}
 .signature {
  position:absolute;

 bottom: 0;
    font-size: 10px;
 right: 0;
 }

  `,
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
                    setNFTURL(data.url);
                })
                .catch((err) => console.error(err));
        };

    /* useEffect(() => {
  
      }, []); */
    return (
        <div className="flex space-x-6">
            <div>
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

                </div>

            </div>

            <div>
                {/* <Image src={NFTURL} width={350} height={500} alt="NFTURL"></Image> */}
                <img src={NFTURL} alt="NFTURL"></img>
            </div>
        </div>
    );
};

export default page;


/* *** PINITA 

const gateWayURL ="https://pink-major-mandrill-163.mypinata.cloud"
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const JWT = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzMWNiOWY3Ny01Y2Y2LTQzNDYtOGE1OS1jNTljNWRhNDViZmQiLCJlbWFpbCI6Im1hemlzb210b2NodWt3dUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYzU0ZTcyNzY1ZjllNDlmY2ExZmMiLCJzY29wZWRLZXlTZWNyZXQiOiIyMWM2OWJiMzdjODdjNDllZTJiYmFkZDUyNDU1ZDBjMjFlOGQ5MzdkMzg5OTk5ZDk3ZTNjZDQ4ZGQ5ZmRhMGIzIiwiaWF0IjoxNzI1MjkxNDI2fQ.w1WgfzWPinznarRsfijiID7uEsPzlWUDkbJeWNXwHH0

const pinFileToIPFS = async () => {
    const formData = new FormData();
    const src = "path/to/file.png";

    const file = fs.createReadStream(src)
    formData.append('file', file)

    const pinataMetadata = JSON.stringify({
      name: 'File name',
    });
    formData.append('pinataMetadata', pinataMetadata);

    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', pinataOptions);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          'Authorization': `Bearer ${JWT}`
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
}
pinFileToIPFS()

*/