let numberOfComments = 50;
let commentBox = document.querySelector("#add-comment");
let authorComments = document.querySelector("#author-comment");
let engagementButtons = document.querySelectorAll("#engagement-info-right");
let likeIcon = document.querySelector(".love-icon")
let liked = false;
authorComments.innerHTML = `View all ${numberOfComments} comments`
engagementButtons.forEach((button) => {
    console.log(button.children)

    button = [...button.children]
    button.forEach((btn) => {
        btn.addEventListener(("mouseover"), () => {
            let tooltip = btn.children[0];
            // Show the tootip when the user hovers over an icon
            tooltip.classList.remove("hidden");
        })
        console.log(btn.children[1])
        if (btn.children[1].classList.contains("love-icon")) {
            btn.addEventListener(("click"), () => {
                liked = !liked;
                console.log(liked ? "Liked" : "Unliked!")
                updateLikeIcon(liked)
            })
        }
        btn.addEventListener(("mouseout"), () => {
            let tooltip = btn.children[0];
            // Hide the tooltip when the user is not hovering over an icon
            tooltip.classList.add("hidden");
        })
    })

})

function updateLikeIcon(liked) {
    if (liked) {
        // Update the like icon if the user clicks the like button
        likeIcon.setAttribute("src", "https://www.nicepng.com/png/detail/778-7786050_download-instagram-like-icon-png.png")
        likeIcon.style.transform = "scale(1.35)"
        setTimeout(() => {
            likeIcon.style.transform = "scale(1.0)"
        }, 200)
    } else {
        likeIcon.style.transform = "scale(1.35)"
        likeIcon.setAttribute("src", "https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png")
        setTimeout(() => {
            likeIcon.style.transform = "scale(1.0)"
        }, 200)
    }
}
commentBox.addEventListener("keydown", (e) => {
    //If the user hits the enter key and the comment box is not empty, then the number of comment s should be updated.
    if (e.key === "Enter" && commentBox.children[0].value !== "") {
        numberOfComments++;
        authorComments.innerHTML = `View all ${numberOfComments} comments`
        commentBox.children[0].value = "";
    }
    console.log(e.key)
})
