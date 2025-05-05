(function() {
  try {
    const elements = document.querySelectorAll('[data-add-to-cart]');

    var alertTxt='Wishlist contains...';
    elements.forEach(element => {
      const jsonString = element.getAttribute('data-add-to-cart');
      const validJsonString = jsonString.replace(/&quot;/g, '"');
      console.log('Valid JSON String:', validJsonString);
      try {
        const jsonData = JSON.parse(validJsonString);
        console.log('Parsed JSON:', jsonData);
        alertTxt=alertTxt+'ASIN:'+jsonData['asin']+' Qty:'+jsonData['quantity']+' Price:$'+jsonData['price']+"\r\n";
      } catch (error) {
        console.error('Error parsing JSON for element:', element, error);
      }
    });
    alert(alertTxt);

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
