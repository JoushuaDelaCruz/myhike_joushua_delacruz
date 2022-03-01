function read_display_quote() {
    // console.log("Inside the function")

    // Get into the right collection
    db.collection("qoutes").doc("TUESDAY")

    // checks for updates in the data
    .onSnapshot(TUESDAYDoc => {
        console.log(TUESDAYDoc.data());
        document.getElementById("quote-goes-here").innerHTML=TUESDAYDoc.data().qoute;
    })
}

read_display_quote()