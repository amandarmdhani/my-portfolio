import React from 'react';
import Slider from 'react-slick';
import ProjectCard from '../components/ProjectCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'Web Toko Baju',
    date: '25 November 2024',
    description: 'Website Toko Baju yang mempunyai fitur checkout, input barang.',
    tech: ['HTML', 'PHP', 'Bootstrap'],
    image: '/web.tokobaju.png',
    link: 'https://github.com/amandarmdhani/toko.git',
  },
  {
    title: 'Web Portofolio',
    date: '20 April 2024',
    description:
      'Website portofolio ini dibuat sebagai representasi digital diri saya sebagai seorang pengembang web. Di dalamnya terdapat informasi pribadi, latar belakang pendidikan, keahlian, serta beberapa proyek yang pernah saya kerjakan.',
    tech: ['React', 'Tailwind CSS atau CSS Module'],
    image: '/web.portofolio.png',
    link: 'https://github.com/amandarmdhani/my-portfolio.git',
  },
  // kamu bisa tambahkan lebih banyak proyek di sini
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-rose-100 px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-rose-700 mb-10 drop-shadow-sm">
        ✨ My Projects ✨
      </h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
