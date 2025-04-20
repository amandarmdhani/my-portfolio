import React from 'react';
import Slider from 'react-slick';
import ProjectCard from '../components/ProjectCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'Web Toko Baju',
    date: '25 November 2024',
    description: 'Website Toko Baju yang mempunyai fitur checkout,input barang.',
    tech: ['HTML', 'PHP', 'Bootstrap'],
    image: '/web.tokobaju.png',
    link: 'https://github.com/amandarmdhani/toko.git',
  },
  {
    title: 'Web Portofolio',
    date: 'Februari 2024',
    description: 'Website portofolio ini dibuat sebagai representasi digital diri saya sebagai seorang pengembang web. Di dalamnya terdapat informasi pribadi, latar belakang pendidikan, keahlian, serta beberapa proyek yang pernah saya kerjakan.',
    tech: ['React', 'CSS Module'],
    image: '/web.portofolio.png',
    link: 'https://github.com/username/todo-app',
  },
  // kamu bisa tambahkan lebih banyak proyek di sini
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Bisa kamu ubah jadi 2 atau 3
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // untuk HP
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">My Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-2">
            <ProjectCard {...project} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
