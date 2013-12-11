var pictureSource;
var destinationType;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}

function takePhoto(){
    navigator.camera.getPicture(onPhotoDataSuccess,onError,{
        quality:50,
        destinationType: destinationType.DATA_URL
    });
}

function onPhotoDataSuccess(imageData){
    var dataImage = document.getElementById("dataImage");
    dataImage.style.display = 'block';
    dataImage.src = "data:Image/jpeg:base64," + imageData;
}

function getPhoto(source){
    navigator.camera.getPicture(onPhotoURISuccess,onError,{
        quality:50,
        destinationType: destinationType.FILE_URI
    });
}

function onPhotoURISuccess(imageURI){
    var uriImage = document.getElementById("uriImage");
    uriImage.style.display = 'block';
    uriImage.src = imageURI;
}

function onError(error){
    alert("Error : " + error);
}