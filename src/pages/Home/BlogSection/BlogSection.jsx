import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Tips for Hosting Successful Events',
    snippet:
      'Discover the essential tips and tricks to ensure your event runs smoothly and leaves a lasting impression.',
    imageUrl: 'https://source.unsplash.com/400x250/?conference,people',
    url: '/blog/hosting-successful-events',
  },
  {
    id: 2,
    title: 'How to Promote Your Event Effectively',
    snippet:
      'Learn proven strategies to boost attendance and create buzz for your upcoming events.',
    imageUrl: 'https://source.unsplash.com/400x250/?marketing,event',
    url: '/blog/promote-your-event',
  },
  {
    id: 3,
    title: 'Virtual vs In-Person Events: Pros and Cons',
    snippet:
      'Explore the benefits and challenges of both virtual and in-person events to choose what suits you best.',
    imageUrl: 'https://source.unsplash.com/400x250/?virtual,event',
    url: '/blog/virtual-vs-in-person',
  },
];

const BlogSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2
        className="text-3xl font-bold mb-10 text-center"
        style={{ color: '#285259' }}
      >
        From Our Blog
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map(({ id, title, snippet, imageUrl, url }) => (
          <article
            key={id}
            className="border rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: '#285259' }}
              >
                {title}
              </h3>
              <p className="text-gray-700 mb-5">{snippet}</p>
              <a
                href={url}
                className="text-[#4DBAA3] font-semibold hover:underline"
              >
                Read More &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
