let leftSide = document.querySelector(".leftSide video");
let title = document.querySelector(".leftSide .title");
let videoList = document.querySelectorAll(".videoList");

videoList.forEach((ele) => {
    ele.addEventListener("click", () => {
        videoList.forEach((vid) => {
            vid.classList.remove('active');
        })
        ele.classList.add('active');

        if(ele.classList.contains('active')) {
           let src = ele.children[0].getAttribute('src');
           let newTitle = ele.children[1].innerHTML;

           leftSide.src = src;
           title.textContent = newTitle;
        }
        
        window.scrollTo(0,0);
    })
})
