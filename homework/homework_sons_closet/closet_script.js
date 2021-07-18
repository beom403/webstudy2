let orgModelUrl = null;
let topModelUrl = null;
let bottomModelUrl = null;
let shoesModelUrl = null;
let orgModelFile = './resource/model.png';
// let orgModelFile = './resource/temp_model.png';
let topModelList = ['./resource/empty_img.png', './resource/top_0.png', './resource/top_1.png', './resource/top_2.png'];
let bottomModelList = ['./resource/empty_img.png', './resource/pants_0.png', './resource/pants_1.png', './resource/pants_2.png'];
let shoesModelList = ['./resource/empty_img.png', './resource/shoe_0.png', './resource/shoe_1.png', './resource/shoe_2.png'];
let topIndex = 0;
let bottomIndex = 0;
let shoesIndex = 0;

// initialization sequence
orgModelUrl = orgModelFile;
topModelUrl = topModelList[0];
bottomModelUrl = bottomModelList[0];
shoesModelUrl = shoesModelList[0];
// show org model
showResult();
// add event listener for each buttons
// change top
$('.change_top').click(function(){
    topIndex++;
    topIndex %= topModelList.length;
    topModelUrl = topModelList[topIndex];
    $("#img_top").attr("src", topModelUrl);
});
// change bottom
$('.change_bottom').on('click', function(){
    bottomIndex++;
    bottomIndex %= bottomModelList.length;
    bottomModelUrl = bottomModelList[bottomIndex];
    $("#img_bottom").attr("src", bottomModelUrl);
});
// change shoes
$('.change_shoes').on('click', function(){
    shoesIndex++;
    shoesIndex %= 4;
    shoesModelUrl = shoesModelList[shoesIndex];
    $("#img_shoes").attr("src", shoesModelUrl);
});

// image sequence
function showResult() {
    // org model
    if (orgModelUrl) {
        var orgModelContent = "<img id='asdf' src=" + orgModelUrl + ">";
        $(".model_org").append(orgModelContent);
    }
    // model top
    if (topModelUrl) {
        var topModelContent = "<img id='img_top' src=" + topModelUrl + ">";
        $(".model_top").append(topModelContent);
    }
    // model bottom
    if (bottomModelUrl) {
        var bottomModelContent = "<img id='img_bottom' src=" + bottomModelUrl + ">";
        $(".model_bottom").append(bottomModelContent);
    }
    // model shoes
    if (shoesModelUrl) {
        var shoesModelContent = "<img id='img_shoes' src=" + shoesModelUrl + ">";
        $(".model_shoes").append(shoesModelContent);
    }
}
