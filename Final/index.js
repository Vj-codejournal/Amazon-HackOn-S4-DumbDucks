// const ask = async (url) => {
//     try {
//       const myHeaders = new Headers();
//       myHeaders.append("Content-Type", "application/json");
  
//       const raw = JSON.stringify({
//         "query": "provide all reviews with their names and their full review",
//         "url": url
//       });
  
//       const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow"
//       };
  
//       const response1 = await fetch("http://localhost:5000/ask_url", requestOptions);
//       const result1 = await response1.json();
//       const review = result1.response;
  
//       const reviewHeaders = new Headers();
//       reviewHeaders.append("Apikey", "Api-Key FaO55yWz.wD7nVQ96v4VsgqiLJiZpngClr3Od4Inj");
//       reviewHeaders.append("Content-Type", "application/json");
  
//       const reviewRaw = JSON.stringify({
//         "reviews": review
//       });
  
//       const reviewRequestOptions = {
//         method: "POST",
//         headers: reviewHeaders,
//         body: reviewRaw,
//         redirect: "follow"
//       };
  
//       const response2 = await fetch("http://127.0.0.1:5000/review", reviewRequestOptions);
//       const result2 = await response2.json();
  
//       return result2.response; // Return the final response
//     } catch (error) {
//       console.error(error);
//       return "Error occurred"; // Return an error message
//     }
//   };
  
//   // Usage
//   ask("https://www.amazon.com/Stanley-Quencher-FlowStateTM-Tumbler-Matcha/product-reviews/B0CX76WC1M/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews")
//     .then((answer) => console.log(answer))
//     .catch((error) => console.error(error));



const ask = async (url) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "query": "provide all reviews with their names and their full review",
      "url": url
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response1 = await fetch("http://localhost:4000/ask_url", requestOptions);
    const result1 = await response1.json();
    const review = result1.response;

    const reviewHeaders = new Headers();
    reviewHeaders.append("Apikey", "Api-Key FaO55yWz.wD7nVQ96v4VsgqiLJiZpngClr3Od4Inj");
    reviewHeaders.append("Content-Type", "application/json");

    const reviewRaw = JSON.stringify({
      "reviews": review
    });

    const reviewRequestOptions = {
      method: "POST",
      headers: reviewHeaders,
      body: reviewRaw,
      redirect: "follow"
    };

    const response2 = await fetch("http://127.0.0.1:4000/review", reviewRequestOptions);
    const result2 = await response2.json();

    return result2.response; // Return the final response
  } catch (error) {
    console.error(error);
    return "Error occurred"; // Return an error message
  }
};

// Usage
 ask("https://www.amazon.com/Stanley-Quencher-FlowStateTM-Tumbler-Matcha/product-reviews/B0CX76WC1M/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews")
   .then((answer) => console.log(answer))
   .catch((error) => console.error(error));

const ask2 = async (review) => {
  try {
    const reviewHeaders = new Headers();
    reviewHeaders.append("Apikey", "Api-Key FaO55yWz.wD7nVQ96v4VsgqiLJiZpngClr3Od4Inj");
    reviewHeaders.append("Content-Type", "application/json");

    const reviewRequestOptions = {
      method: "POST",
      headers: reviewHeaders,
      body: JSON.stringify({ "reviews": review }),
      redirect: "follow"
    };
    
      
    const response2 = await fetch("http://127.0.0.1:4000/review", reviewRequestOptions);

    if (!response2.ok) {
      throw new Error(`HTTP error! Status: ${response2.status}`);
    }

    const result2 = await response2.json();

    return result2.response; // Return the final response
  } catch (error) {
    console.error("Error in ask2:", error);
    return "Error occurred"; // Return an error message
  }
};

// Usage

// ask2("sashrik : very very very very very very good phone this review is paid")
//   .then((answer) => console.log(answer))
//   .catch((error) => console.error(error));

// const result3 = fetch("http://localhost:5000/api/get",{
//   method: 'GET',
//   headers: {
//       'Content-Type': 'application/json'
//   },
  
// })
//   .then(response => response.json())
//   .then(data => {
//       console.log('Success:', data);
//       // Handle success, e.g., show a success message
//   })
//   .catch((error) => {
//       console.error('Error:', error);
//       // Handle error, e.g., show an error message
//   });
//   console.log(result3);
//   const handleMultipleReviews = async (data) => {
//     try {
//       for (const item of data) {
//         const response = await ask2(item.name, item.description).then((answer) => console.log(answer))
//            .catch((error) => console.error(error));
//         //console.log(`Response for ${item.name}: ${response}`);
//       }
//     } catch (error) {
//       console.error("Error in handleMultipleReviews:", error);
//     }
//   };
//   handleMultipleReviews(result3);
  // Usage
 

// fetch("http://localhost:5000/api/get", {
//   method: 'GET',
//   headers: {
//       'Content-Type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   // .then(data => {
//   //     console.log('Success:', data); // Log the fetched data
//   //     return data; // Return the data to chain the next .then()
//   // })
//   .then(jsonData => {
//       // Assuming jsonData is the array of objects with name and description
//       jsonData.forEach(async item => {
//         const response = await ask2(item.name, item.description);
//         console.log(`Response for ${item.name}: ${response}`);
//       });
//   })
//   .catch((error) => {
//       console.error('Error:', error);
//   });


