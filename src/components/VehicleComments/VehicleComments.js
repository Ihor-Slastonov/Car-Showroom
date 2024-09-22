import { useEffect, useState } from 'react';

import RatingStars from '../RatingStars/RatingStars';
import VehicleCommentsAddForm from './VehicleCommentsAddForm/VehicleCommentsAddForm';

import { getLocalStoredData, setLocalStoredData } from '../../utils/storage';

import {
  StyledTitle,
  VehicleCommentsList,
  CommentsDate,
  CommentsInfoWrapper,
  CommentsInfoName,
} from './VehicleComments.styled';

const VehicleComments = ({ reviews, vehicleId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = getLocalStoredData(`comments-${vehicleId}`);
    const allComments = [...(reviews || []), ...storedComments];

    // sort by date
    const sortedComments = allComments.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    setComments(sortedComments);
  }, [vehicleId, reviews]);

  const reviewDate = date => new Date(date).toLocaleString();

  const onSubmit = newComment => {
    const updatedComments = [...comments, newComment];

    // sort by date
    const sortedComments = updatedComments.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    setComments(sortedComments);
    setLocalStoredData(`comments-${vehicleId}`, newComment);
  };
  return (
    <>
      <StyledTitle>
        Reviews <span>{`(${comments?.length} comments)`}</span>
      </StyledTitle>
      {comments?.length === 0 ? (
        <p>Add your first comment</p>
      ) : (
        <VehicleCommentsList>
          {comments?.map((review, idx) => (
            <li key={idx}>
              <CommentsInfoWrapper>
                <CommentsDate>{reviewDate(review.date)}</CommentsDate>
                <RatingStars rating={review.rating} />
                <CommentsInfoName>{review.reviewerName}</CommentsInfoName>
              </CommentsInfoWrapper>
              <p>{review.comment}</p>
            </li>
          ))}
        </VehicleCommentsList>
      )}

      <StyledTitle>Add your comment</StyledTitle>
      <VehicleCommentsAddForm onSubmit={onSubmit} />
    </>
  );
};

export default VehicleComments;
