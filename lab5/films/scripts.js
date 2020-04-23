function publishReview() {
    let name = document.new_review.urN.value;
    let text = document.new_review.review_text.value;
    let new_Div = document.createElement('div');
    //newDiv.classList = "review";
    cms.append(new_Div);

    let newB = document.createElement('b');
    let newBr = document.createElement('br');
    let newP = document.createElement('p');

    newB.innerHTML = name;
    newP.innerHTML = text;

    new_Div.appendChild(newB);
    //new_Div.appendChild(newBr);
    new_Div.appendChild(newP);
    // newB.innerHTML = name;
    // newP1.appendChild(newB);
    // newDiv.appendChild(newP1);

    // let newP2 = document.createElement('p');
    // let newStrong = document.createElement('strong');
    // newStrong.innerHTML = title;
    // newP2.appendChild(newStrong);
    // newDiv.appendChild(newP2);

    // let newP3 = document.createElement('p');
    // newP3.innerHTML = text;
    // newDiv.appendChild(newP3);
}