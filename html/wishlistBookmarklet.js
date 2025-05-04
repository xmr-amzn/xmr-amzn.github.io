(function() {
  try {
    const pageState = JSON.parse(document.querySelector('ul#g-items').innerText);
//    const trackingId = pageState.trackingId.trim();
//    const amazonOrderId = location.href.match(/orderId=(\d{3}-\d{7}-\d{7})/)[1];
    let statusText = '';
console.log(pageState);
/*
try {
      statusText = pageState.promise.promiseMessage.trim();
    } catch (err) {
      ;
    }

    if (!amazonOrderId) {
      alert("Cannot retrieve amazon order ID.  are you sure you're on an Amazon tracking page");
    }

    if (trackingId) {
      alert("Amazon Order ID: " + amazonOrderId + "\nTracking Number: " + trackingId);
    } else {
      alert("It looks like the package hasn't been shipped yet.\nTry again later once it's been shipped");
    }
      */
  } catch (error) {
    console.log('Wishlist-Bookmarklet Error:', error);
    alert("Unable to retrieve Wishlist Data.\nAre you sure you're on an Amazon wishlist page?");
  }
})();
