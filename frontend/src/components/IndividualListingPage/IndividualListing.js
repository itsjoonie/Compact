import "./IndividualListing.css"

function IndividualListing(){

    return (
        <div className="individual-listing">
            <div className="individual-listing-title">
                <h1>Title Goes Here</h1>
                <div className="reviews-and-location">
                    <div className="listing-star-rating">
                        star review
                    </div>
                    <div    className="listing-location">
                        Location here
                    </div>
                    <div className="listing-like">Heart
                    </div>
                </div>
               
            </div>

        </div>
    )
}

export default IndividualListing;