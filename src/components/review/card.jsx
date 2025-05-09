import React from 'react'
import ReactStars from 'react-stars'

const ReviewCard = ({review}) => {
  return (
    <div className='bg-gray-50 rounded-xl shadow mb-5 p-5'>
      <h3 className='font-semibold text-l'>{review.username}</h3>
      <div className="flex items-center gap-x-1 text-sm font-medium text-gray-900 pt-1.5 pb-1.5">
          <ReactStars
            className="overflow-visible"
            count={5}
            value={review.rating}
            edit={false}
          />
        </div>
      <p className='text-gray-700'>{review.comment}</p>
    </div>
  )
}

export default ReviewCard