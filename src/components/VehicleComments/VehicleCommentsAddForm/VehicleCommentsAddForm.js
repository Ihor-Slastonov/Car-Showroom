import { useState } from 'react';

import toast from 'react-hot-toast';

import VehicleCommentsAddRating from '../VehicleCommentsAddRating/VehicleCommentsAddRating';

import {
  StyledForm,
  StyledFormInputWrapper,
  StyledFormInput,
  StyledFormTextarea,
  StyledFormSubmitButton,
  StyledFormInfoWrapper,
} from './VehicleCommentsAddForm.styled';

const VehicleCommentsAddForm = ({ onSubmit }) => {
  const [newComment, setNewComment] = useState({
    reviewerName: '',
    reviewerEmail: '',
    rating: 0,
    comment: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    const formattedValue = name === 'rating' ? Number(value) : value;

    setNewComment(prev => ({ ...prev, [name]: formattedValue }));
  };

  const handleRatingChange = rating => {
    setNewComment(prev => ({ ...prev, rating }));
  };

  const validateEmail = email => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    const { reviewerName, reviewerEmail, comment, rating } = newComment;

    if (!reviewerName || !reviewerEmail || !comment) {
      toast.error('All fields must be filled in', {
        position: 'bottom-center',
      });
      return false;
    }

    if (reviewerName.length > 50 || comment.length > 300) {
      toast.error(
        'The name should not exceed 50 characters, and the comment should not exceed 300 characters',
        {
          position: 'bottom-center',
        }
      );
      return false;
    }

    if (!validateEmail(reviewerEmail)) {
      toast.error('Please enter a valid email address', {
        position: 'bottom-center',
      });
      return false;
    }

    if (rating < 0 || rating > 5 || typeof rating !== 'number') {
      toast.error('The rating should be in the range from 0 to 5', {
        position: 'bottom-center',
      });
      return false;
    }
    return true;
  };

  const clearForm = () =>
    setNewComment({
      reviewerName: '',
      reviewerEmail: '',
      rating: 0,
      comment: '',
    });

  const handleSubmit = e => {
    e.preventDefault();

    //clean spaces
    const trimmedComment = {
      ...newComment,
      reviewerName: newComment.reviewerName.trim(),
      reviewerEmail: newComment.reviewerEmail.trim(),
      comment: newComment.comment.trim(),
    };
    //check validation
    if (!validateForm()) return;

    //send and clear form
    onSubmit({ ...trimmedComment, date: new Date().toISOString() });
    clearForm();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormInfoWrapper>
        <StyledFormInputWrapper>
          <label htmlFor="reviewerName">Name:</label>
          <StyledFormInput
            type="text"
            name="reviewerName"
            id="reviewerName"
            placeholder="Herry Fingerson"
            minLength="3"
            maxLength="50"
            onChange={handleInputChange}
            value={newComment.reviewerName}
            required
          />
        </StyledFormInputWrapper>

        <StyledFormInputWrapper>
          <label htmlFor="reviewerEmail">Email:</label>
          <StyledFormInput
            type="email"
            name="reviewerEmail"
            id="reviewerEmail"
            placeholder="herry.fingerson@gmail.com"
            value={newComment.reviewerEmail}
            onChange={handleInputChange}
            required
          />
        </StyledFormInputWrapper>
      </StyledFormInfoWrapper>

      <StyledFormInputWrapper>
        <label>Rating:</label>
        <VehicleCommentsAddRating
          value={newComment.rating}
          onChange={handleRatingChange}
        />
      </StyledFormInputWrapper>

      <StyledFormInputWrapper>
        <label htmlFor="comment">Comment:</label>
        <StyledFormTextarea
          as="textarea"
          name="comment"
          id="comment"
          rows="5"
          cols="33"
          placeholder="Your comment"
          value={newComment.comment}
          onChange={handleInputChange}
          minLength={2}
          maxLength={300}
          required
        />
      </StyledFormInputWrapper>

      <StyledFormSubmitButton type="submit" onClick={handleSubmit}>
        submit
      </StyledFormSubmitButton>
    </StyledForm>
  );
};

export default VehicleCommentsAddForm;
