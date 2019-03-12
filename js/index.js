window.onload = function () {



    //下载app移入移出效果
    // let downapp=document.querySelector(".downapp");
    // let download=document.querySelector(".download");
    let download = document.getElementsByClassName("download")[0];
    let downapp = document.getElementsByClassName("downapp")[0];
    // console.log(downapp);
    // console.log(download);
    downapp.onmouseover = function () {
        download.style.display = "block";
    }
    downapp.onmouseout = function () {
        download.style.display = "none";
    }

    //购物车移入移出效果
    let shoppingcar = document.querySelector(".shopping-car");
    let shoppingslide = document.querySelector(".shopcarslide");
    // console.log(shoppingcar);
    // console.log(shoppingslide);
    shoppingcar.onmouseenter = function () {
        shoppingslide.style.display = "block";
    }
    shoppingcar.onmouseleave = function () {
        shoppingslide.style.display = "none";
    }


    //搜索栏移入移出效果
    let flag = true
    let search_input = document.querySelector(".search-input");
    let submit_button = document.querySelector(".submit-button");
    let searchInputSlide = document.querySelector(".searchInputSlide")
    search_input.onmouseenter = function () {
        if (!flag) {
            return
        }
        this.style.borderColor = "#333"
        submit_button.style.borderColor = "#333"
    }
    search_input.onmouseleave = function () {
        if (!flag) {
            return
        }
        this.style.borderColor = ""

        submit_button.style.borderColor = ""
    }

    submit_button.onmouseenter = function () {
        if (!flag) {
            return
        }
        submit_button.style.borderColor = "#FF6700"
        submit_button.style.backgroundColor = "#FF6700"
        search_input.style.borderColor = "#333"
        submit_button.style.color = "#fff"
    }
    submit_button.onmouseleave = function () {
        if (!flag) {
            return
        }
        submit_button.style.borderColor = ""
        submit_button.style.backgroundColor = ""

        submit_button.style.color = ""
        search_input.style.borderColor = ""
    }

    search_input.onfocus = function () {
        flag = false;
        searchInputSlide.style.display = "block"
        search_input.style.borderColor = "#FF6700"
        submit_button.style.borderColor = "#FF6700"
    }
    search_input.onblur = function () {
        flag = true;
        searchInputSlide.style.display = ""
        search_input.style.borderColor = ""
        submit_button.style.borderColor = ""
    }



// 轮播图列表移入移出效果
let bannerListItem=document.querySelectorAll(".bannerList-item")
let bannerSlide=document.querySelectorAll(".bannerSlide")
// console.dir(bannerListItem)
// console.dir(bannerSlide)
bannerListItem.forEach(function(v,i){
    v.onmouseenter=function(){
        bannerSlide[i].style.display="block"
    }
    v.onmouseleave=function(){
        bannerSlide[i].style.display="none"
    }
})
}