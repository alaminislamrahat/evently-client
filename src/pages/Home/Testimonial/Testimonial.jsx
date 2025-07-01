import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Event Organizer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    feedback:
      'Evently made managing my events so much easier! The platform is intuitive and the support team is fantastic.',
  },
  {
    id: 2,
    name: 'Michael Lee',
    role: 'Attendee',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    feedback:
      'I love how easy it is to find and join events on Evently. It’s become my go-to app for discovering new experiences!',
  },
  {
    id: 3,
    name: 'Jessica Brown',
    role: 'Speaker',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    feedback:
      'The notifications keep me updated about my sessions, and the platform’s community is very engaging and supportive.',
  },
  {
    id: 4,
    name: 'David Miller',
    role: 'Volunteer',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    feedback:
      'Volunteering at events became a breeze thanks to Evently’s organized system and community.',
  },
];

const Testimonial = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#285259]">
        What Our Users Say
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {testimonials.map(({ id, name, role, photo, feedback }) => (
          <SwiperSlide key={id} className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm flex flex-col items-center text-center mx-4">
              <img
                src={photo}
                alt={name}
                className="w-24 h-24 rounded-full object-cover border-4 border-[#4DBAA3] mb-6"
              />
              <p className="italic text-gray-700 mb-6">"{feedback}"</p>
              <h3 className="text-xl font-semibold text-[#285259]">{name}</h3>
              <span className="text-sm text-gray-500">{role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
