import React from 'react'
import Subjects from './subjects';
import AttendanceStats from './attendance';
import LogFeed from './logfeed';

const student = {
    name: 'John Doe',
    age: '17',
    href: '#',
   
    subjects: [
      {
        id: 1,
        subject: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
        imageAlt: "Back of women's Basic Tee in black.",
        primary: true,
      },
      {
        id: 2,
        subject: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
        imageAlt: "Side profile of women's Basic Tee in black.",
        primary: false,
      },
      {
        id: 3,
        subject: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
        imageAlt: "Front of women's Basic Tee in black.",
        primary: false,
      },
    ],
};


const Profile = () => {
  return (
    <>
    <AttendanceStats />

    <Subjects />
    <LogFeed />
    </>
  )
}

export default Profile



