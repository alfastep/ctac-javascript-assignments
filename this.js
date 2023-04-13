const photoSlideShow = {
  photoList: ["duck.png", "fox.png", "hound.png", "hare.png"],
  currentPhotoIndex: 0,
  nextPhoto: function () {
    if (this.currentPhotoIndex < this.photoList.length - 1) {
      this.currentPhotoIndex++;
      console.log(this.photoList[this.currentPhotoIndex]);
    } else {
      console.log("End of slideshow");
    }
  },
  prevPhoto: function () {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
      console.log(this.photoList[this.currentPhotoIndex]);
    } else {
      console.log("Beginning of slideshow");
    }
  },
  getCurrentPhoto: function () {
    return this.photoList[this.currentPhotoIndex];
  }
};

console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
console.log(photoSlideShow.getCurrentPhoto());