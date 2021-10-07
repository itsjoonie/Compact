import {useState} from "react";
import { getHostings } from "../../store/hosting";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "./ReviewForm.css"
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css"
import { createReview } from "../../store/review";

function ReviewForm(){
    const dispatch = useDispatch();
    let history = useHistory();
    const id = useParams().id
    const hosting = useSelector((state) => state.hosting[id]) 
    const hostingId = hosting?.id
    const userId = useSelector(state => state.session.user.id);

    const [starRating, setStarRating] = useState("")
    const [reviewText, setReviewText] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const payload = {
            hostingId,
            userId,
            starRating,
            reviewText
        }

        await dispatch(createReview(payload))
        
    }

    return (
        <>
        <button>Review</button>

        <form className="review-form" id="reviewForm" onSubmit={handleSubmit}>

            <div className="review-form-inputs success error">
            <label>Select a star rating!</label>
            {/* <small>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</small> */}
            </div>
            <div className="review-form-inputs success error">
            <label>What do you think?</label>
                {/* <small>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</small> */}
            </div>
            <button className="submit-review-btn" type="submit">Submit</button>
      </form>
        </>
    )


}

export default ReviewForm