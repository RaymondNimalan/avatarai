import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { LandingContainer } from './landing_styles';

const Landing = () => {


  useEffect(() => {
    console.log('useEffect');
    getAvatar()
  }, []);

    const getAvatar = async () => {
        console.log("INSIDE FETCH REQ")
        const request = await fetch('http://localhost:8000/image')
        const message = await request.json()
        console.log('request', message.data)
        return message
       }

       

  return (
    <LandingContainer>
        <div>Landing</div>
    </LandingContainer>
  )
}

export default Landing