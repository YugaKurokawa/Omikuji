// omikuji.js
function changeImage() {
    var shrineImage = document.getElementById('shrine-image');
    var furifuriImage = document.getElementById('furifuri-image');
    var bouImage = document.getElementById('bou-image');
    var kamiImage = document.getElementById('kami-image');
    var kamiText=document.getElementById('kami-text');
    var kamiTitle=document.getElementById('kami-title');
    shrineImage.style.display='none';
    furifuriImage.style.display='block';
    bouImage.style.display='block';
    furifuriImage.classList.add('animate'); // アニメーションクラスを追加
    bouImage.classList.add('animate');

    setTimeout(function() {
        furifuriImage.classList.remove('animate');
        furifuriImage.classList.add('rotated')
        bouImage.classList.remove('animate');
        bouImage.classList.add('rotated');
        setTimeout(function(){
            bouImage.classList.add('moved');
        },1500);
    }, 1500); // 3000ミリ秒 (1.5秒)

    setTimeout(function() {
        kamiImage.style.display = 'block';
        kamiImage.classList.add('appear');
        kamiText.classList.add('appear');
        kamiTitle.classList.add('appear');
    }, 100); // 6000ミリ秒 (6秒)
    
}
