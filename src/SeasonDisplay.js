import React from "react";

const SeasonDisplay = () => {
return <div>Season Display</div>;
window.navigator.geolocation.getCurrentPosition(
    postion => console.log(position),
    err => console.log(err)
)
};

export default SeasonDisplay;