const Review = require("../models/Review");
const Company = require("../models/Company");

exports.createReview = async (req, res) => {
  try {
    const { company, alumni, review } = req.body;

    const reviews = new Review({
      company,
      alumni,
      review,
    });

    const savedReviews = await reviews.save();

    const updatedCompany = Company.findByIdAndUpdate(
      company,
      { $push: { createReview: savedReviews._id } },
      { new: true }
    )
      .populate("reviews")
      .exec();

    res.json({ company:updatedCompany });
  } catch (error) {
    res.status(500).json({ message: "Error while adding Review " });
  }
};
