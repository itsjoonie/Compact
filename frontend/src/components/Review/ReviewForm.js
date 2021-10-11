import {useState} from "react";
import { getHostings } from "../../store/hosting";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "./ReviewForm.css"
import moment from "moment";
import Modal from 'react-modal';
import "react-datepicker/dist/react-datepicker.css"
import { createReview } from "../../store/review";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
  },
  overlay:{
    backgroundColor: 'rgba(2, 2, 2, 0.680)'
  }
};

function ReviewForm({bookingId}){
    const dispatch = useDispatch();
    let history = useHistory();
    const id = useParams().id
    const hosting = useSelector((state) => state.hosting[id]) 
    const hostingId = hosting?.id
    let bookings = Object.values(useSelector(state => state.booking));
    console.log("WHAT IS BOOKUNG", bookings)


    const userId = useSelector(state => state.session.user.id);

    
    const [starRating, setStarRating] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [reviewModal, setReviewModal] = useState(false)



  function openModal() {
    setReviewModal(true);
  }


  function closeModal() {
    setReviewModal(false);
  }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const payload = {
            userId,
            hostingId,
            bookingId,
            starRating,
            reviewText
        }

        const review = await dispatch(createReview(payload))

        if(review){
            setReviewModal(false);
        }
        
    }

    return (
        <>
        <button className="reviewBtn" onClick={openModal}> Leave a Review</button>
        <Modal
            isOpen={reviewModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Review Modal"
            id="review-modal"
      >
      <div className="login-form-page">
        <div className="closeModal">
          <i className="fas fa-times" onClick={closeModal}></i>
        </div>
        <div className="review-form-header">
          <div>
            <h2>What is your experience?</h2>
          </div>

        </div>
        <form className="review-form" id="reviewForm" onSubmit={handleSubmit}>
            <div className="review-form-inputs success error">
            <label className="rating-label">Give it a rating (required):</label>
                <div className='star-rating'>
                    <div>
                        { starRating >= 1 ? <i onClick={() => setStarRating(1)}  className="fas fa-star"></i> : <i onClick={() => setStarRating(1)} className="far fa-star"></i> }
                        { starRating>= 2 ? <i onClick={() => setStarRating(2)}  className="fas fa-star"></i> : <i onClick={() => setStarRating(2)} className="far fa-star"></i> }
                        { starRating>= 3 ? <i onClick={() => setStarRating(3)}  className="fas fa-star"></i> : <i onClick={() => setStarRating(3)} className="far fa-star"></i> }
                        { starRating >= 4 ? <i onClick={() => setStarRating(4)}  className="fas fa-star"></i> : <i onClick={() => setStarRating(4)} className="far fa-star"></i> }
                        { starRating == 5 ? <i onClick={() => setStarRating(5)}  className="fas fa-star"></i> : <i onClick={() => setStarRating(5)} className="far fa-star"></i> }
                    </div>
                </div>
            {/* <small>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</small> */}
            </div>
            <div className="review-form-inputs success error">
            <label>What do you think? (optional)</label>
                {/* <small>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</small> */}
                <div>
                <textarea className="textarea-input" rows="4" cols="29" placeholder="Start typing your thoughts here...." value={reviewText} onChange={(e)=>setReviewText(e.target.value)}/>
                </div>
            </div>
            <div className="review-form-btns">
            <button className="cancel-review-btn review-btns" onClick={closeModal}>Cancel</button>
            <button className="submit-review-btn review-btns" type="submit" >Submit</button>
            </div>
        </form>
        </div>
        </Modal>
        </>
    )


}

export default ReviewForm