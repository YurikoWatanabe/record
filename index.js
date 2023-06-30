'use strict';
//文章クリックイベント
$(document).ready(function() {
    $('.backdrop, .consideration').on('click', function() {
        //data属性から値取得（表示、非表示したい要素と同じ値にしておく）
        const targetId = $(this).data('target');
        toggleTextVisibility(targetId);
    });
});

//表示、非表示させるファンクション
function toggleTextVisibility(targetId) {
    //表示、非表示したい要素のid取得（クリックイベントに設定したい要素のdata属性と同じ値にしておく）
    const targetElement = $('#' + targetId);
    //表示、非表示切り替えメソッド使用
    targetElement.slideToggle();
}

//画像切り替え用・JavaScriot学んだことまとめ
const left1 = document.querySelector('.left1');
const right1 = document.querySelector('.right1');
const main_first_image = document.getElementById('main_first_image');
const images1 = ['img/first_top.png', 'img/first_code.png', 'img/first_brain.png'];
let current1 = 0;

//画像切り替え用・こんな漢字
const left2 = document.querySelector('.left2');
const right2 = document.querySelector('.right2');
const main_kanji_image = document.getElementById('main_kanji_image');
const images2 = ['img/kanji_q1.png', 'img/kanji_q2.png', 'img/kanji_a1.png', 'img/kanji_a2.png', 'img/kanji_a3.png'];
let current2 = 0;

//画像切り替え用・JSおさらい
const left3 = document.querySelector('.left3');
const right3 = document.querySelector('.right3');
const main_summarize_image = document.getElementById('main_summarize_image');
const images3 = ['img/summarize_top1.png', 'img/summarize_top2.png', 'img/summarize_top3.png', 'img/summarize_top4.png', 'img/summarize_code.png', 'img/summarize_sample.png', 'img/summarize_comp.png'];
let current3 = 0;

//画像切り替えのファンクション
function changeImage(current, num, images) {
    if(current + num >= 0 && current + num < images.length) {
        current += num;        
    }    
    return current;
};

/*画像切り替え用・JavaScriot学んだことまとめクリックイベント*/
left1.addEventListener('click', function() {
    current1 = changeImage(current1, -1, images1);
    main_first_image.src = images1[current1];
});

right1.addEventListener('click', function() {
    current1 = changeImage(current1, 1, images1);
    main_first_image.src = images1[current1];
});

/*画像切り替え用・こんな漢字クリックイベント*/
left2.addEventListener('click', function() {
    current2 = changeImage(current2, -1, images2);
    main_kanji_image.src = images2[current2];
});

right2.addEventListener('click', function() {
    current2 = changeImage(current2, 1, images2);
    main_kanji_image.src = images2[current2];
});

//画像切り替え用・JSおさらいクリックイベント
left3.addEventListener('click', function() {
    current3 = changeImage(current3, -1, images3);
    main_summarize_image.src = images3[current3];
});

right3.addEventListener('click', function() {
    current3 = changeImage(current3, 1, images3);
    main_summarize_image.src = images3[current3];
});
//ハンバーガーメニュー///////////////////////////////////////////// 
(function($) {
    let $nav   = $('#hamb-area');
    let $btn   = $('.toggle_btn');
    let $mask  = $('#mask');
    let open   = 'open'; // class
    // menu open close
    $btn.on('click', function() {
      if (!$nav.hasClass(open)) {
        $nav.addClass(open);
      } else {
        $nav.removeClass(open);
      }
    });
    // mask close
    $mask.on('click', function() {
      $nav.removeClass(open);
    });
  })(jQuery);
  
  
  
  
  
  
  