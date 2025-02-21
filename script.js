function revealToSpan(){
     document.querySelectorAll(".reveal")
.forEach(function(elem){
    var parent = document.createElement("span");
    var child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);
});
}
function valueSetters(){
     gsap.set("#nav a", { y: "-100%", opacity: 0 });
     gsap.set("#home .parent .child", { y: "100%" });
     gsap.set("#home .row img", { opacity: 0 });
}
function loaderAnimation (){
          var tl = gsap.timeline();

     tl.from("#loader .child span", {
          x: 100,
          duration: 1.4,
          stagger: .2,
          ease: Power3.easeInOut
     })
     .to("#loader .parent .child", {
          y: "-100%",
          duration: 1,
          ease: Circ.easeInOut
     })
     .to("#loader", {
          height: 0,
          duration: 1,
          ease: Circ.easeInOut
     })
     .to("#green", {
          height: "100%",
          top: 0,
          delay: -.8,
          duration: 1,
          ease: Circ.easeInOut
     })
     .to("#green", {
          height: 0,
          duration: 1,
          delay: -.5,
          ease: Circ.easeInOut,
          onComplete: function() {
               animateHomePage();
          }
     })
}
function animateSvg(){
     document.querySelectorAll('#Visual>g>g>path, #Visual>g>g>polyline').forEach(function (e) {
          var character = e;
          
          character.style.storkeDasharray =  character.getTotalLength() + 'px';
          character.style.storkeDashoffset =  character.getTotalLength() + 'px';
     })

     gsap.to('#Visual>g>g>path, #Visual>g>g>polyline', {
          strokeDashoffset: 0,
          duration: 2,
          ease: Expo.easeInOut
     })
}
function animateHomePage (){
     

     var tl = gsap.timeline();

     tl.to("#nav a", {
          y: 0,
          opacity: 1,
          stagger: .05,
          ease: Expo.easeInOut
     })
     .to("#home .parent .child", {
          y: 0,
          stagger: .1,
          duration: 2,
          ease: Expo.easeInOut
     })
     .to("#home .row img", {
          opacity: 1,
          ease: Expo.easeInOut,
          onComplete: function(){
               animateSvg();
          }
     })
}
function locoInitilizer(){
     const locoScroll = new LocomotiveScroll({
         el: document.querySelector('#main'),
         smooth: true
     });
}
function cardShow() {
     document.querySelectorAll('.cnt')
     .forEach(function(cnt){
          var showingCard;
          cnt.addEventListener("mousemove", function(dets){
               document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
               showingCard = dets.target;
               document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}, ${dets.clientY})`;
          })
          cnt.addEventListener("mousemove", function(dets){
               document.querySelector("#cursor").children[showingCard.dataset.index].style.opacity = 0;
               
          })
     })

}
revealToSpan ();
valueSetters();
loaderAnimation();
// locoInitilizer();
animateSvg();
// cardShow();