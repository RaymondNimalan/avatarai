import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { LandingContainer } from './landing_styles';

const Landing = () => {


  useEffect(() => {
    console.log('useEffect');
  }, []);

    const getAvatar = async () => {
        console.log("INSIDE FETCH REQ")
        const request = await fetch('http://localhost:8000/image', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: "a white siamese cat",
            size: "256x256",
          }),
        })
        const message = await request.json()
        console.log('request', message)
        return message
       }



  return (
    <LandingContainer>
        <div onClick={getAvatar}>Landing</div>
    </LandingContainer>
  )
}

export default Landing