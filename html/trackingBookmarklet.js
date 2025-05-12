(function() {
  try {
    const pageState = JSON.parse(document.querySelector('[data-a-state=\'{"key":"page-state"}\']').innerText);
    const trackingId = pageState.trackingId.trim();
    const amazonOrderId = location.href.match(/orderId=(\d{3}-\d{7}-\d{7})/)[1];
    let statusText = '';

    try {
      statusText = pageState.promise.promiseMessage.trim();
    } catch (err) {
      ;
    }

    if (!amazonOrderId) {
      alert("Cannot retrieve Amazon Order ID.\n\nAre you on the Amazon tracking page?");
    }

    if (trackingId) {
      alert("Amazon Order ID: " + amazonOrderId + "\nTracking Number: " + trackingId);
    } else {
      alert("It looks like the package hasn't shipped (no tracking number found).\n\nTry again once it has shipped.");
    }
  } catch (error) {
    console.log('Tracking-Bookmarklet Error:', error);
    alert("Unable to retrieve Tracking Number.\n\nAre you on the Amazon tracking page?\n\nGo to the Amazon tracking page for your order, then click the bookmark.");
  }
})();
