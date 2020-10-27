// university.mongodb.com, usando airbnb.listingAndReviews
db.listingsAndReviews.find(
  {
    $and: [
      { $expr: { $gt: ["$accommodates", 6] } },
      { reviews: { $size: 50 } },
    ],
  },
  { name: 1 },
);

