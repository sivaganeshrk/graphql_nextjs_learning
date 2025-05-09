import mongoose from "mongoose";
import { ulid } from "ulid";

const userReviewSchema = new mongoose.Schema({
  id: {
    type: String,
    default: ulid
  },
  book_id: {
    type: String,
    required: true
  },
  username: {
    type: String,
    default: "Anonymous"
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const userReview = mongoose.model('user_review', userReviewSchema)