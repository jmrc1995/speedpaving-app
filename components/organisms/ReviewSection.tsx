"use client";

import { useState } from "react";

const hardcodedReviews = [
  {
    author_name: "Lisaj",
    source: "Google Reviews",
    time: "6 months ago",
    rating: 5,
    text: "I was very pleased with Speed Paving. Wilmer and his team was very professional and on time. Wilmer kept my husband in the loop with changes which worked out giving us more space in the driveway. I would definitely recommend them and it was fair price. Thanks again",
  },
  {
    author_name: "Tina Johnson",
    source: "Google Reviews",
    time: "11 months ago",
    rating: 5,
    text: "Wilmer was very responsive and gave a fair price. Work was done in a day and his crew did an awesome job! Thrilled with how everything turned out",
  },
  {
    author_name: "Esaias N Lockwood",
    source: "Google Reviews",
    time: "5 months ago",
    rating: 5,
    text: "Great price and very communicative, does a good job",
  },
  {
    author_name: "Jaime Santiago",
    source: "Google Reviews",
    time: "11 months ago",
    rating: 5,
    text: "Wilmer and his team did my driveway today. True masters of their craft. They did an excellent job. If you're on the fence and looking for a company that does an amazing job. Look no further than Speed Paving. Highly recommended.",
  },
  {
    author_name: "Joe Yuelling",
    source: "Google Reviews",
    time: "a year ago",
    rating: 5,
    text: "We hired Wilmer and crew to do work in our backyard, a very large job. They showed up on time when they said they would, worked long hours and the end result was beautiful. Retaining wall, pool coping and pool deck, all Cambridge.",
  },
  {
    author_name: "Karrelly Herrera",
    source: "Google Reviews",
    time: "a year ago",
    rating: 5,
    text: "This company was recommended by a friend and I have to say they did not disappoint. The owner Willmer, came out the same day we called to give us a quote and within a week of our initial meeting the job was started and complete. He went above and beyond to provide updates and suggestions through out the process. We are so pleased with the end result it is better than we expected! Will recommend to any and everyone",
  },
];

const parseTimeToMonths = (time: string): number => {
  if (time.includes("month")) {
    return parseInt(time);
  } else if (time.includes("year")) {
    return parseInt(time) * 12;
  } else {
    return Infinity; // if unknown format, push it to the end
  }
};

export const ReviewSection = () => {
  const [reviews] = useState(
    [...hardcodedReviews].sort((a, b) => parseTimeToMonths(a.time) - parseTimeToMonths(b.time))
  );

  return (
    <section className="w-full bg-white text-black px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-8xl h1-font font-extrabold mb-12 uppercase">
          REVIEWS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-6 bg-gray-50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  {r.author_name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{r.author_name}</h3>
                  <p className="text-sm text-gray-500">{r.source}</p>
                  <p className="text-sm text-gray-400">{r.time}</p>
                </div>
              </div>
              <p className="text-gray-800">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
