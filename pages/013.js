export default () => (
  <div>
  <style jsx>{`

                    @font-face {
  font-family: 'Cinzel';
  font-style: normal;
  font-weight: 700;
  src: local('Cinzel-Bold'), url(../font/cinzel_bold.woff) format('woff');
}

@font-face {
  font-family: 'PT Mono';
  font-style: normal;
  font-weight: 400;
  src: local('PT Mono'), local('PTMono-Regular'), url(../font/pt_mono.woff) format('woff');
}


.body {
  font-family: Georgia, 'Nimbus Roman No9 L', 'Century Schoolbook L', serif;
  font-size: 20px;
  line-height: 1.45;
  color: black;
  background: white;
  padding: 0;
margin-top: auto;
margin-right: auto;
margin-bottom: auto;
margin-left: auto;
  max-width: 900px;
}
.it {
  color: #BAB7B7;
  font-style: italic;

}

/*!
 *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */@font-face{font-family:'FontAwesome';src:url('https://maxcdn.bootstrapcdn.com/font-awesome/latest/fonts/fontawesome-webfont.eot?v=4.7.0');src:url('https://maxcdn.bootstrapcdn.com/font-awesome/latest/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'),url('https://maxcdn.bootstrapcdn.com/font-awesome/latest/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'),url('https://maxcdn.bootstrapcdn.com/font-awesome/latest/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'),url('https://maxcdn.bootstrapcdn.com/font-awesome/latest/fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'),url('https://maxcdn.bootstrapcdn.com/font-awesome/latest/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\f000"}.fa-music:before{content:"\f001"}.fa-search:before{content:"\f002"}.fa-envelope-o:before{content:"\f003"}.fa-heart:before{content:"\f004"}.fa-star:before{content:"\f005"}.fa-star-o:before{content:"\f006"}.fa-user:before{content:"\f007"}.fa-film:before{content:"\f008"}.fa-th-large:before{content:"\f009"}.fa-th:before{content:"\f00a"}.fa-th-list:before{content:"\f00b"}.fa-check:before{content:"\f00c"}.fa-remove:before,.fa-close:before,.fa-times:before{content:"\f00d"}.fa-search-plus:before{content:"\f00e"}.fa-search-minus:before{content:"\f010"}.fa-power-off:before{content:"\f011"}.fa-signal:before{content:"\f012"}.fa-gear:before,.fa-cog:before{content:"\f013"}.fa-trash-o:before{content:"\f014"}.fa-home:before{content:"\f015"}.fa-file-o:before{content:"\f016"}.fa-clock-o:before{content:"\f017"}.fa-road:before{content:"\f018"}.fa-download:before{content:"\f019"}.fa-arrow-circle-o-down:before{content:"\f01a"}.fa-arrow-circle-o-up:before{content:"\f01b"}.fa-inbox:before{content:"\f01c"}.fa-play-circle-o:before{content:"\f01d"}.fa-rotate-right:before,.fa-repeat:before{content:"\f01e"}.fa-refresh:before{content:"\f021"}.fa-list-alt:before{content:"\f022"}.fa-lock:before{content:"\f023"}.fa-flag:before{content:"\f024"}.fa-headphones:before{content:"\f025"}.fa-volume-off:before{content:"\f026"}.fa-volume-down:before{content:"\f027"}.fa-volume-up:before{content:"\f028"}.fa-qrcode:before{content:"\f029"}.fa-barcode:before{content:"\f02a"}.fa-tag:before{content:"\f02b"}.fa-tags:before{content:"\f02c"}.fa-book:before{content:"\f02d"}.fa-bookmark:before{content:"\f02e"}.fa-print:before{content:"\f02f"}.fa-camera:before{content:"\f030"}.fa-font:before{content:"\f031"}.fa-bold:before{content:"\f032"}.fa-italic:before{content:"\f033"}.fa-text-height:before{content:"\f034"}.fa-text-width:before{content:"\f035"}.fa-align-left:before{content:"\f036"}.fa-align-center:before{content:"\f037"}.fa-align-right:before{content:"\f038"}.fa-align-justify:before{content:"\f039"}.fa-list:before{content:"\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\f03b"}.fa-indent:before{content:"\f03c"}.fa-video-camera:before{content:"\f03d"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\f03e"}.fa-pencil:before{content:"\f040"}.fa-map-marker:before{content:"\f041"}.fa-adjust:before{content:"\f042"}.fa-tint:before{content:"\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\f044"}.fa-share-square-o:before{content:"\f045"}.fa-check-square-o:before{content:"\f046"}.fa-arrows:before{content:"\f047"}.fa-step-backward:before{content:"\f048"}.fa-fast-backward:before{content:"\f049"}.fa-backward:before{content:"\f04a"}.fa-play:before{content:"\f04b"}.fa-pause:before{content:"\f04c"}.fa-stop:before{content:"\f04d"}.fa-forward:before{content:"\f04e"}.fa-fast-forward:before{content:"\f050"}.fa-step-forward:before{content:"\f051"}.fa-eject:before{content:"\f052"}.fa-chevron-left:before{content:"\f053"}.fa-chevron-right:before{content:"\f054"}.fa-plus-circle:before{content:"\f055"}.fa-minus-circle:before{content:"\f056"}.fa-times-circle:before{content:"\f057"}.fa-check-circle:before{content:"\f058"}.fa-question-circle:before{content:"\f059"}.fa-info-circle:before{content:"\f05a"}.fa-crosshairs:before{content:"\f05b"}.fa-times-circle-o:before{content:"\f05c"}.fa-check-circle-o:before{content:"\f05d"}.fa-ban:before{content:"\f05e"}.fa-arrow-left:before{content:"\f060"}.fa-arrow-right:before{content:"\f061"}.fa-arrow-up:before{content:"\f062"}.fa-arrow-down:before{content:"\f063"}.fa-mail-forward:before,.fa-share:before{content:"\f064"}.fa-expand:before{content:"\f065"}.fa-compress:before{content:"\f066"}.fa-plus:before{content:"\f067"}.fa-minus:before{content:"\f068"}.fa-asterisk:before{content:"\f069"}.fa-exclamation-circle:before{content:"\f06a"}.fa-gift:before{content:"\f06b"}.fa-leaf:before{content:"\f06c"}.fa-fire:before{content:"\f06d"}.fa-eye:before{content:"\f06e"}.fa-eye-slash:before{content:"\f070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\f071"}.fa-plane:before{content:"\f072"}.fa-calendar:before{content:"\f073"}.fa-random:before{content:"\f074"}.fa-comment:before{content:"\f075"}.fa-magnet:before{content:"\f076"}.fa-chevron-up:before{content:"\f077"}.fa-chevron-down:before{content:"\f078"}.fa-retweet:before{content:"\f079"}.fa-shopping-cart:before{content:"\f07a"}.fa-folder:before{content:"\f07b"}.fa-folder-open:before{content:"\f07c"}.fa-arrows-v:before{content:"\f07d"}.fa-arrows-h:before{content:"\f07e"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\f080"}.fa-twitter-square:before{content:"\f081"}.fa-facebook-square:before{content:"\f082"}.fa-camera-retro:before{content:"\f083"}.fa-key:before{content:"\f084"}.fa-gears:before,.fa-cogs:before{content:"\f085"}.fa-comments:before{content:"\f086"}.fa-thumbs-o-up:before{content:"\f087"}.fa-thumbs-o-down:before{content:"\f088"}.fa-star-half:before{content:"\f089"}.fa-heart-o:before{content:"\f08a"}.fa-sign-out:before{content:"\f08b"}.fa-linkedin-square:before{content:"\f08c"}.fa-thumb-tack:before{content:"\f08d"}.fa-external-link:before{content:"\f08e"}.fa-sign-in:before{content:"\f090"}.fa-trophy:before{content:"\f091"}.fa-github-square:before{content:"\f092"}.fa-upload:before{content:"\f093"}.fa-lemon-o:before{content:"\f094"}.fa-phone:before{content:"\f095"}.fa-square-o:before{content:"\f096"}.fa-bookmark-o:before{content:"\f097"}.fa-phone-square:before{content:"\f098"}.fa-twitter:before{content:"\f099"}.fa-facebook-f:before,.fa-facebook:before{content:"\f09a"}.fa-github:before{content:"\f09b"}.fa-unlock:before{content:"\f09c"}.fa-credit-card:before{content:"\f09d"}.fa-feed:before,.fa-rss:before{content:"\f09e"}.fa-hdd-o:before{content:"\f0a0"}.fa-bullhorn:before{content:"\f0a1"}.fa-bell:before{content:"\f0f3"}.fa-certificate:before{content:"\f0a3"}.fa-hand-o-right:before{content:"\f0a4"}.fa-hand-o-left:before{content:"\f0a5"}.fa-hand-o-up:before{content:"\f0a6"}.fa-hand-o-down:before{content:"\f0a7"}.fa-arrow-circle-left:before{content:"\f0a8"}.fa-arrow-circle-right:before{content:"\f0a9"}.fa-arrow-circle-up:before{content:"\f0aa"}.fa-arrow-circle-down:before{content:"\f0ab"}.fa-globe:before{content:"\f0ac"}.fa-wrench:before{content:"\f0ad"}.fa-tasks:before{content:"\f0ae"}.fa-filter:before{content:"\f0b0"}.fa-briefcase:before{content:"\f0b1"}.fa-arrows-alt:before{content:"\f0b2"}.fa-group:before,.fa-users:before{content:"\f0c0"}.fa-chain:before,.fa-link:before{content:"\f0c1"}.fa-cloud:before{content:"\f0c2"}.fa-flask:before{content:"\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\f0c5"}.fa-paperclip:before{content:"\f0c6"}.fa-save:before,.fa-floppy-o:before{content:"\f0c7"}.fa-square:before{content:"\f0c8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\f0c9"}.fa-list-ul:before{content:"\f0ca"}.fa-list-ol:before{content:"\f0cb"}.fa-strikethrough:before{content:"\f0cc"}.fa-underline:before{content:"\f0cd"}.fa-table:before{content:"\f0ce"}.fa-magic:before{content:"\f0d0"}.fa-truck:before{content:"\f0d1"}.fa-pinterest:before{content:"\f0d2"}.fa-pinterest-square:before{content:"\f0d3"}.fa-google-plus-square:before{content:"\f0d4"}.fa-google-plus:before{content:"\f0d5"}.fa-money:before{content:"\f0d6"}.fa-caret-down:before{content:"\f0d7"}.fa-caret-up:before{content:"\f0d8"}.fa-caret-left:before{content:"\f0d9"}.fa-caret-right:before{content:"\f0da"}.fa-columns:before{content:"\f0db"}.fa-unsorted:before,.fa-sort:before{content:"\f0dc"}.fa-sort-down:before,.fa-sort-desc:before{content:"\f0dd"}.fa-sort-up:before,.fa-sort-asc:before{content:"\f0de"}.fa-envelope:before{content:"\f0e0"}.fa-linkedin:before{content:"\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\f0e2"}.fa-legal:before,.fa-gavel:before{content:"\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\f0e4"}.fa-comment-o:before{content:"\f0e5"}.fa-comments-o:before{content:"\f0e6"}.fa-flash:before,.fa-bolt:before{content:"\f0e7"}.fa-sitemap:before{content:"\f0e8"}.fa-umbrella:before{content:"\f0e9"}.fa-paste:before,.fa-clipboard:before{content:"\f0ea"}.fa-lightbulb-o:before{content:"\f0eb"}.fa-exchange:before{content:"\f0ec"}.fa-cloud-download:before{content:"\f0ed"}.fa-cloud-upload:before{content:"\f0ee"}.fa-user-md:before{content:"\f0f0"}.fa-stethoscope:before{content:"\f0f1"}.fa-suitcase:before{content:"\f0f2"}.fa-bell-o:before{content:"\f0a2"}.fa-coffee:before{content:"\f0f4"}.fa-cutlery:before{content:"\f0f5"}.fa-file-text-o:before{content:"\f0f6"}.fa-building-o:before{content:"\f0f7"}.fa-hospital-o:before{content:"\f0f8"}.fa-ambulance:before{content:"\f0f9"}.fa-medkit:before{content:"\f0fa"}.fa-fighter-jet:before{content:"\f0fb"}.fa-beer:before{content:"\f0fc"}.fa-h-square:before{content:"\f0fd"}.fa-plus-square:before{content:"\f0fe"}.fa-angle-double-left:before{content:"\f100"}.fa-angle-double-right:before{content:"\f101"}.fa-angle-double-up:before{content:"\f102"}.fa-angle-double-down:before{content:"\f103"}.fa-angle-left:before{content:"\f104"}.fa-angle-right:before{content:"\f105"}.fa-angle-up:before{content:"\f106"}.fa-angle-down:before{content:"\f107"}.fa-desktop:before{content:"\f108"}.fa-laptop:before{content:"\f109"}.fa-tablet:before{content:"\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\f10b"}.fa-circle-o:before{content:"\f10c"}.fa-quote-left:before{content:"\f10d"}.fa-quote-right:before{content:"\f10e"}.fa-spinner:before{content:"\f110"}.fa-circle:before{content:"\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\f112"}.fa-github-alt:before{content:"\f113"}.fa-folder-o:before{content:"\f114"}.fa-folder-open-o:before{content:"\f115"}.fa-smile-o:before{content:"\f118"}.fa-frown-o:before{content:"\f119"}.fa-meh-o:before{content:"\f11a"}.fa-gamepad:before{content:"\f11b"}.fa-keyboard-o:before{content:"\f11c"}.fa-flag-o:before{content:"\f11d"}.fa-flag-checkered:before{content:"\f11e"}.fa-terminal:before{content:"\f120"}.fa-code:before{content:"\f121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\f123"}.fa-location-arrow:before{content:"\f124"}.fa-crop:before{content:"\f125"}.fa-code-fork:before{content:"\f126"}.fa-unlink:before,.fa-chain-broken:before{content:"\f127"}.fa-question:before{content:"\f128"}.fa-info:before{content:"\f129"}.fa-exclamation:before{content:"\f12a"}.fa-superscript:before{content:"\f12b"}.fa-subscript:before{content:"\f12c"}.fa-eraser:before{content:"\f12d"}.fa-puzzle-piece:before{content:"\f12e"}.fa-microphone:before{content:"\f130"}.fa-microphone-slash:before{content:"\f131"}.fa-shield:before{content:"\f132"}.fa-calendar-o:before{content:"\f133"}.fa-fire-extinguisher:before{content:"\f134"}.fa-rocket:before{content:"\f135"}.fa-maxcdn:before{content:"\f136"}.fa-chevron-circle-left:before{content:"\f137"}.fa-chevron-circle-right:before{content:"\f138"}.fa-chevron-circle-up:before{content:"\f139"}.fa-chevron-circle-down:before{content:"\f13a"}.fa-html5:before{content:"\f13b"}.fa-css3:before{content:"\f13c"}.fa-anchor:before{content:"\f13d"}.fa-unlock-alt:before{content:"\f13e"}.fa-bullseye:before{content:"\f140"}.fa-ellipsis-h:before{content:"\f141"}.fa-ellipsis-v:before{content:"\f142"}.fa-rss-square:before{content:"\f143"}.fa-play-circle:before{content:"\f144"}.fa-ticket:before{content:"\f145"}.fa-minus-square:before{content:"\f146"}.fa-minus-square-o:before{content:"\f147"}.fa-level-up:before{content:"\f148"}.fa-level-down:before{content:"\f149"}.fa-check-square:before{content:"\f14a"}.fa-pencil-square:before{content:"\f14b"}.fa-external-link-square:before{content:"\f14c"}.fa-share-square:before{content:"\f14d"}.fa-compass:before{content:"\f14e"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\f150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\f151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\f152"}.fa-euro:before,.fa-eur:before{content:"\f153"}.fa-gbp:before{content:"\f154"}.fa-dollar:before,.fa-usd:before{content:"\f155"}.fa-rupee:before,.fa-inr:before{content:"\f156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\f157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\f158"}.fa-won:before,.fa-krw:before{content:"\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\f15a"}.fa-file:before{content:"\f15b"}.fa-file-text:before{content:"\f15c"}.fa-sort-alpha-asc:before{content:"\f15d"}.fa-sort-alpha-desc:before{content:"\f15e"}.fa-sort-amount-asc:before{content:"\f160"}.fa-sort-amount-desc:before{content:"\f161"}.fa-sort-numeric-asc:before{content:"\f162"}.fa-sort-numeric-desc:before{content:"\f163"}.fa-thumbs-up:before{content:"\f164"}.fa-thumbs-down:before{content:"\f165"}.fa-youtube-square:before{content:"\f166"}.fa-youtube:before{content:"\f167"}.fa-xing:before{content:"\f168"}.fa-xing-square:before{content:"\f169"}.fa-youtube-play:before{content:"\f16a"}.fa-dropbox:before{content:"\f16b"}.fa-stack-overflow:before{content:"\f16c"}.fa-instagram:before{content:"\f16d"}.fa-flickr:before{content:"\f16e"}.fa-adn:before{content:"\f170"}.fa-bitbucket:before{content:"\f171"}.fa-bitbucket-square:before{content:"\f172"}.fa-tumblr:before{content:"\f173"}.fa-tumblr-square:before{content:"\f174"}.fa-long-arrow-down:before{content:"\f175"}.fa-long-arrow-up:before{content:"\f176"}.fa-long-arrow-left:before{content:"\f177"}.fa-long-arrow-right:before{content:"\f178"}.fa-apple:before{content:"\f179"}.fa-windows:before{content:"\f17a"}.fa-android:before{content:"\f17b"}.fa-linux:before{content:"\f17c"}.fa-dribbble:before{content:"\f17d"}.fa-skype:before{content:"\f17e"}.fa-foursquare:before{content:"\f180"}.fa-trello:before{content:"\f181"}.fa-female:before{content:"\f182"}.fa-male:before{content:"\f183"}.fa-gittip:before,.fa-gratipay:before{content:"\f184"}.fa-sun-o:before{content:"\f185"}.fa-moon-o:before{content:"\f186"}.fa-archive:before{content:"\f187"}.fa-bug:before{content:"\f188"}.fa-vk:before{content:"\f189"}.fa-weibo:before{content:"\f18a"}.fa-renren:before{content:"\f18b"}.fa-pagelines:before{content:"\f18c"}.fa-stack-exchange:before{content:"\f18d"}.fa-arrow-circle-o-right:before{content:"\f18e"}.fa-arrow-circle-o-left:before{content:"\f190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\f191"}.fa-dot-circle-o:before{content:"\f192"}.fa-wheelchair:before{content:"\f193"}.fa-vimeo-square:before{content:"\f194"}.fa-turkish-lira:before,.fa-try:before{content:"\f195"}.fa-plus-square-o:before{content:"\f196"}.fa-space-shuttle:before{content:"\f197"}.fa-slack:before{content:"\f198"}.fa-envelope-square:before{content:"\f199"}.fa-wordpress:before{content:"\f19a"}.fa-openid:before{content:"\f19b"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\f19c"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\f19d"}.fa-yahoo:before{content:"\f19e"}.fa-google:before{content:"\f1a0"}.fa-reddit:before{content:"\f1a1"}.fa-reddit-square:before{content:"\f1a2"}.fa-stumbleupon-circle:before{content:"\f1a3"}.fa-stumbleupon:before{content:"\f1a4"}.fa-delicious:before{content:"\f1a5"}.fa-digg:before{content:"\f1a6"}.fa-pied-piper-pp:before{content:"\f1a7"}.fa-pied-piper-alt:before{content:"\f1a8"}.fa-drupal:before{content:"\f1a9"}.fa-joomla:before{content:"\f1aa"}.fa-language:before{content:"\f1ab"}.fa-fax:before{content:"\f1ac"}.fa-building:before{content:"\f1ad"}.fa-child:before{content:"\f1ae"}.fa-paw:before{content:"\f1b0"}.fa-spoon:before{content:"\f1b1"}.fa-cube:before{content:"\f1b2"}.fa-cubes:before{content:"\f1b3"}.fa-behance:before{content:"\f1b4"}.fa-behance-square:before{content:"\f1b5"}.fa-steam:before{content:"\f1b6"}.fa-steam-square:before{content:"\f1b7"}.fa-recycle:before{content:"\f1b8"}.fa-automobile:before,.fa-car:before{content:"\f1b9"}.fa-cab:before,.fa-taxi:before{content:"\f1ba"}.fa-tree:before{content:"\f1bb"}.fa-spotify:before{content:"\f1bc"}.fa-deviantart:before{content:"\f1bd"}.fa-soundcloud:before{content:"\f1be"}.fa-database:before{content:"\f1c0"}.fa-file-pdf-o:before{content:"\f1c1"}.fa-file-word-o:before{content:"\f1c2"}.fa-file-excel-o:before{content:"\f1c3"}.fa-file-powerpoint-o:before{content:"\f1c4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\f1c5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\f1c6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\f1c7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\f1c8"}.fa-file-code-o:before{content:"\f1c9"}.fa-vine:before{content:"\f1ca"}.fa-codepen:before{content:"\f1cb"}.fa-jsfiddle:before{content:"\f1cc"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\f1cd"}.fa-circle-o-notch:before{content:"\f1ce"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:"\f1d0"}.fa-ge:before,.fa-empire:before{content:"\f1d1"}.fa-git-square:before{content:"\f1d2"}.fa-git:before{content:"\f1d3"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:"\f1d4"}.fa-tencent-weibo:before{content:"\f1d5"}.fa-qq:before{content:"\f1d6"}.fa-wechat:before,.fa-weixin:before{content:"\f1d7"}.fa-send:before,.fa-paper-plane:before{content:"\f1d8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\f1d9"}.fa-history:before{content:"\f1da"}.fa-circle-thin:before{content:"\f1db"}.fa-header:before{content:"\f1dc"}.fa-paragraph:before{content:"\f1dd"}.fa-sliders:before{content:"\f1de"}.fa-share-alt:before{content:"\f1e0"}.fa-share-alt-square:before{content:"\f1e1"}.fa-bomb:before{content:"\f1e2"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:"\f1e3"}.fa-tty:before{content:"\f1e4"}.fa-binoculars:before{content:"\f1e5"}.fa-plug:before{content:"\f1e6"}.fa-slideshare:before{content:"\f1e7"}.fa-twitch:before{content:"\f1e8"}.fa-yelp:before{content:"\f1e9"}.fa-newspaper-o:before{content:"\f1ea"}.fa-wifi:before{content:"\f1eb"}.fa-calculator:before{content:"\f1ec"}.fa-paypal:before{content:"\f1ed"}.fa-google-wallet:before{content:"\f1ee"}.fa-cc-visa:before{content:"\f1f0"}.fa-cc-mastercard:before{content:"\f1f1"}.fa-cc-discover:before{content:"\f1f2"}.fa-cc-amex:before{content:"\f1f3"}.fa-cc-paypal:before{content:"\f1f4"}.fa-cc-stripe:before{content:"\f1f5"}.fa-bell-slash:before{content:"\f1f6"}.fa-bell-slash-o:before{content:"\f1f7"}.fa-trash:before{content:"\f1f8"}.fa-copyright:before{content:"\f1f9"}.fa-at:before{content:"\f1fa"}.fa-eyedropper:before{content:"\f1fb"}.fa-paint-brush:before{content:"\f1fc"}.fa-birthday-cake:before{content:"\f1fd"}.fa-area-chart:before{content:"\f1fe"}.fa-pie-chart:before{content:"\f200"}.fa-line-chart:before{content:"\f201"}.fa-lastfm:before{content:"\f202"}.fa-lastfm-square:before{content:"\f203"}.fa-toggle-off:before{content:"\f204"}.fa-toggle-on:before{content:"\f205"}.fa-bicycle:before{content:"\f206"}.fa-bus:before{content:"\f207"}.fa-ioxhost:before{content:"\f208"}.fa-angellist:before{content:"\f209"}.fa-cc:before{content:"\f20a"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:"\f20b"}.fa-meanpath:before{content:"\f20c"}.fa-buysellads:before{content:"\f20d"}.fa-connectdevelop:before{content:"\f20e"}.fa-dashcube:before{content:"\f210"}.fa-forumbee:before{content:"\f211"}.fa-leanpub:before{content:"\f212"}.fa-sellsy:before{content:"\f213"}.fa-shirtsinbulk:before{content:"\f214"}.fa-simplybuilt:before{content:"\f215"}.fa-skyatlas:before{content:"\f216"}.fa-cart-plus:before{content:"\f217"}.fa-cart-arrow-down:before{content:"\f218"}.fa-diamond:before{content:"\f219"}.fa-ship:before{content:"\f21a"}.fa-user-secret:before{content:"\f21b"}.fa-motorcycle:before{content:"\f21c"}.fa-street-view:before{content:"\f21d"}.fa-heartbeat:before{content:"\f21e"}.fa-venus:before{content:"\f221"}.fa-mars:before{content:"\f222"}.fa-mercury:before{content:"\f223"}.fa-intersex:before,.fa-transgender:before{content:"\f224"}.fa-transgender-alt:before{content:"\f225"}.fa-venus-double:before{content:"\f226"}.fa-mars-double:before{content:"\f227"}.fa-venus-mars:before{content:"\f228"}.fa-mars-stroke:before{content:"\f229"}.fa-mars-stroke-v:before{content:"\f22a"}.fa-mars-stroke-h:before{content:"\f22b"}.fa-neuter:before{content:"\f22c"}.fa-genderless:before{content:"\f22d"}.fa-facebook-official:before{content:"\f230"}.fa-pinterest-p:before{content:"\f231"}.fa-whatsapp:before{content:"\f232"}.fa-server:before{content:"\f233"}.fa-user-plus:before{content:"\f234"}.fa-user-times:before{content:"\f235"}.fa-hotel:before,.fa-bed:before{content:"\f236"}.fa-viacoin:before{content:"\f237"}.fa-train:before{content:"\f238"}.fa-subway:before{content:"\f239"}.fa-medium:before{content:"\f23a"}.fa-yc:before,.fa-y-combinator:before{content:"\f23b"}.fa-optin-monster:before{content:"\f23c"}.fa-opencart:before{content:"\f23d"}.fa-expeditedssl:before{content:"\f23e"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:"\f240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\f241"}.fa-battery-2:before,.fa-battery-half:before{content:"\f242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\f243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\f244"}.fa-mouse-pointer:before{content:"\f245"}.fa-i-cursor:before{content:"\f246"}.fa-object-group:before{content:"\f247"}.fa-object-ungroup:before{content:"\f248"}.fa-sticky-note:before{content:"\f249"}.fa-sticky-note-o:before{content:"\f24a"}.fa-cc-jcb:before{content:"\f24b"}.fa-cc-diners-club:before{content:"\f24c"}.fa-clone:before{content:"\f24d"}.fa-balance-scale:before{content:"\f24e"}.fa-hourglass-o:before{content:"\f250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\f251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\f252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\f253"}.fa-hourglass:before{content:"\f254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\f255"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:"\f256"}.fa-hand-scissors-o:before{content:"\f257"}.fa-hand-lizard-o:before{content:"\f258"}.fa-hand-spock-o:before{content:"\f259"}.fa-hand-pointer-o:before{content:"\f25a"}.fa-hand-peace-o:before{content:"\f25b"}.fa-trademark:before{content:"\f25c"}.fa-registered:before{content:"\f25d"}.fa-creative-commons:before{content:"\f25e"}.fa-gg:before{content:"\f260"}.fa-gg-circle:before{content:"\f261"}.fa-tripadvisor:before{content:"\f262"}.fa-odnoklassniki:before{content:"\f263"}.fa-odnoklassniki-square:before{content:"\f264"}.fa-get-pocket:before{content:"\f265"}.fa-wikipedia-w:before{content:"\f266"}.fa-safari:before{content:"\f267"}.fa-chrome:before{content:"\f268"}.fa-firefox:before{content:"\f269"}.fa-opera:before{content:"\f26a"}.fa-internet-explorer:before{content:"\f26b"}.fa-tv:before,.fa-television:before{content:"\f26c"}.fa-contao:before{content:"\f26d"}.fa-500px:before{content:"\f26e"}.fa-amazon:before{content:"\f270"}.fa-calendar-plus-o:before{content:"\f271"}.fa-calendar-minus-o:before{content:"\f272"}.fa-calendar-times-o:before{content:"\f273"}.fa-calendar-check-o:before{content:"\f274"}.fa-industry:before{content:"\f275"}.fa-map-pin:before{content:"\f276"}.fa-map-signs:before{content:"\f277"}.fa-map-o:before{content:"\f278"}.fa-map:before{content:"\f279"}.fa-commenting:before{content:"\f27a"}.fa-commenting-o:before{content:"\f27b"}.fa-houzz:before{content:"\f27c"}.fa-vimeo:before{content:"\f27d"}.fa-black-tie:before{content:"\f27e"}.fa-fonticons:before{content:"\f280"}.fa-reddit-alien:before{content:"\f281"}.fa-edge:before{content:"\f282"}.fa-credit-card-alt:before{content:"\f283"}.fa-codiepie:before{content:"\f284"}.fa-modx:before{content:"\f285"}.fa-fort-awesome:before{content:"\f286"}.fa-usb:before{content:"\f287"}.fa-product-hunt:before{content:"\f288"}.fa-mixcloud:before{content:"\f289"}.fa-scribd:before{content:"\f28a"}.fa-pause-circle:before{content:"\f28b"}.fa-pause-circle-o:before{content:"\f28c"}.fa-stop-circle:before{content:"\f28d"}.fa-stop-circle-o:before{content:"\f28e"}.fa-shopping-bag:before{content:"\f290"}.fa-shopping-basket:before{content:"\f291"}.fa-hashtag:before{content:"\f292"}.fa-bluetooth:before{content:"\f293"}.fa-bluetooth-b:before{content:"\f294"}.fa-percent:before{content:"\f295"}.fa-gitlab:before{content:"\f296"}.fa-wpbeginner:before{content:"\f297"}.fa-wpforms:before{content:"\f298"}.fa-envira:before{content:"\f299"}.fa-universal-access:before{content:"\f29a"}.fa-wheelchair-alt:before{content:"\f29b"}.fa-question-circle-o:before{content:"\f29c"}.fa-blind:before{content:"\f29d"}.fa-audio-description:before{content:"\f29e"}.fa-volume-control-phone:before{content:"\f2a0"}.fa-braille:before{content:"\f2a1"}.fa-assistive-listening-systems:before{content:"\f2a2"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:"\f2a3"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:"\f2a4"}.fa-glide:before{content:"\f2a5"}.fa-glide-g:before{content:"\f2a6"}.fa-signing:before,.fa-sign-language:before{content:"\f2a7"}.fa-low-vision:before{content:"\f2a8"}.fa-viadeo:before{content:"\f2a9"}.fa-viadeo-square:before{content:"\f2aa"}.fa-snapchat:before{content:"\f2ab"}.fa-snapchat-ghost:before{content:"\f2ac"}.fa-snapchat-square:before{content:"\f2ad"}.fa-pied-piper:before{content:"\f2ae"}.fa-first-order:before{content:"\f2b0"}.fa-yoast:before{content:"\f2b1"}.fa-themeisle:before{content:"\f2b2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\f2b3"}.fa-fa:before,.fa-font-awesome:before{content:"\f2b4"}.fa-handshake-o:before{content:"\f2b5"}.fa-envelope-open:before{content:"\f2b6"}.fa-envelope-open-o:before{content:"\f2b7"}.fa-linode:before{content:"\f2b8"}.fa-address-book:before{content:"\f2b9"}.fa-address-book-o:before{content:"\f2ba"}.fa-vcard:before,.fa-address-card:before{content:"\f2bb"}.fa-vcard-o:before,.fa-address-card-o:before{content:"\f2bc"}.fa-user-circle:before{content:"\f2bd"}.fa-user-circle-o:before{content:"\f2be"}.fa-user-o:before{content:"\f2c0"}.fa-id-badge:before{content:"\f2c1"}.fa-drivers-license:before,.fa-id-card:before{content:"\f2c2"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:"\f2c3"}.fa-quora:before{content:"\f2c4"}.fa-free-code-camp:before{content:"\f2c5"}.fa-telegram:before{content:"\f2c6"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:"\f2c7"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\f2c8"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\f2c9"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\f2ca"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\f2cb"}.fa-shower:before{content:"\f2cc"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:"\f2cd"}.fa-podcast:before{content:"\f2ce"}.fa-window-maximize:before{content:"\f2d0"}.fa-window-minimize:before{content:"\f2d1"}.fa-window-restore:before{content:"\f2d2"}.fa-times-rectangle:before,.fa-window-close:before{content:"\f2d3"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:"\f2d4"}.fa-bandcamp:before{content:"\f2d5"}.fa-grav:before{content:"\f2d6"}.fa-etsy:before{content:"\f2d7"}.fa-imdb:before{content:"\f2d8"}.fa-ravelry:before{content:"\f2d9"}.fa-eercast:before{content:"\f2da"}.fa-microchip:before{content:"\f2db"}.fa-snowflake-o:before{content:"\f2dc"}.fa-superpowers:before{content:"\f2dd"}.fa-wpexplorer:before{content:"\f2de"}.fa-meetup:before{content:"\f2e0"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}
/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript+bash+django+docker+git+handlebars+jade+json+less+python+jsx+sass+sql+stylus+typescript+yaml&plugins=line-numbers */
/**
 * okaidia theme for JavaScript, CSS and HTML
 * Loosely based on Monokai textmate theme by http://www.monokai.nl/
 * @author ocodia
 */

code[class*="language-"],
pre[class*="language-"] {
	color: #f8f8f2;
	background: none;
	text-shadow: 0 1px rgba(0, 0, 0, 0.3);
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #272822;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: slategray;
}

.token.punctuation {
	color: #f8f8f2;
}

.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
	color: #f92672;
}

.token.boolean,
.token.number {
	color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
	color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function {
	color: #e6db74;
}

.token.keyword {
	color: #66d9ef;
}

.token.regex,
.token.important {
	color: #fd971f;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

pre.line-numbers {
	position: relative;
	padding-left: 3.8em;
	counter-reset: linenumber;
}

pre.line-numbers > code {
	position: relative;
}

.line-numbers .line-numbers-rows {
	position: absolute;
	pointer-events: none;
	top: 0;
	font-size: 100%;
	left: -3.8em;
	width: 3em; /* works for line-numbers below 1000 lines */
	letter-spacing: -1px;
	border-right: 1px solid #999;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

}

	.line-numbers-rows > span {
		pointer-events: none;
		display: block;
		counter-increment: linenumber;
	}

		.line-numbers-rows > span:before {
			content: counter(linenumber);
			color: #999;
			display: block;
			padding-right: 0.8em;
			text-align: right;
		}
		.it {
  color: #BAB7B7;
  font-style: italic;

}
                    `}</style>

    <div className="body">
        <header className="postheader_purus no-cover">
            <div className="vertical_purus">
                <div className="inner_purus">
                    <h1 className="posttitle_purus">Sequelize CRUD 102</h1>
                    <ul>
                        <li><time className="date_purus"> Oct 16 2016</time></li>
                    </ul>
                </div>
            </div>
        </header>
        <div className="wrapper_purus">
            <div className="postcontent_purus">
                <p className="it">Mi post anterior, <a href="http://lorenstewart.me/2016/10/03/sequelize-crud-101/" target="_blank">Sequelize CRUD 101</a> , cubrió los fundamentos de CRUD usando el ORM del nodo, <a href="http://docs.sequelizejs.com/en/latest/" target="_blank">Sequelize</a> . Este post cubrirá dos conjuntos intermedios de conceptos:</p>

                <p>My previous post, <a href="http://lorenstewart.me/2016/10/03/sequelize-crud-101/" target="_blank">Sequelize CRUD 101</a>, covered the very basics of CRUD using the Node ORM, <a href="http://docs.sequelizejs.com/en/latest/" target="_blank">Sequelize</a>. This post will cover two intermediate sets of concepts:</p>

<ol>
<li className="it">Consultar varias columnas utilizando un objeto de consulta.</li>

<li>Querying multiple columns using a query object.</li>
<li className="it">Crear, actualizar y eliminar varios registros.</li>

<li>Creating, updating and deleting multiple records.</li>
</ol>

<p className="it">Usted se beneficiará de tener una base de datos SQL ejecutándose localmente (preferiblemente PostgreSQL), y la clonación <a href="https://github.com/lorenseanstewart/sequelize-crud-102" target="_blank">del repo que va con esta publicación</a> .</p>

<p>You'll benefit from having an SQL database running locally (preferably PostgreSQL), and cloning <a href="https://github.com/lorenseanstewart/sequelize-crud-102" target="_blank">the repo that goes with this post</a>.</p>

<p className="it">El repo para este puesto se extiende que de mi <a href="http://lorenstewart.me/2016/10/03/sequelize-crud-101/" target="_blank">puesto de 101 Sequelize</a> , por lo que consulte mi post anterior para una caminata a través de la estructura de la carpeta y el código.</p>

<p>The repo for this post extends that of my <a href="http://lorenstewart.me/2016/10/03/sequelize-crud-101/" target="_blank">Sequelize 101 post</a>, so please refer to my prior post for a walk through of the folder structure and code.</p>

<h5 id="readreturningasubsetofdata">READ: Returning a subset of data</h5>

<p className="it">Antes de entrar en la consulta compleja, vamos a facilitar en Sequelize con algo bastante básico - devolver un subconjunto de datos.</p>

<p>Before getting into complex querying, let's ease into Sequelize with something fairly basic - returning a subset of data.</p>

<p className="it">Por ejemplo, imagínese que tenemos una tabla de información para mascotas: nombres de propietario, identificadores, direcciones, historial médico, etc., pero sólo queremos devolver nombres y tipos de nuestra consulta. Sequelize tiene una <code>attributes</code>opción que nos permite declarar qué columnas queremos devolver.</p>

<p>For example, imagine we have a table of pet information - owner names, ids, addresses, medical history, etc. - but we only want to return names and types from our query. Sequelize has an <code>attributes</code> option that allows us to declare which columns we want returned.</p>

<pre className=" language-javascript line-numbers"><code className="language-javascript">db<span className="token punctuation">.</span>pets<span className="token punctuation">.</span><span className="token function">findAll</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span>  <br></br>
  attributes<span className="token punctuation">:</span> <span className="token punctuation">[</span><span className="token string">'name'</span><span className="token punctuation">,</span> <span className="token string">'type'</span><span className="token punctuation">]</span><span className="token punctuation">,</span><br></br>
  where<span className="token punctuation">:</span> <span className="token punctuation">&#123;</span> city<span className="token punctuation">:</span> <span className="token string">'Los Angeles'</span> <span className="token punctuation">&#125;</span><br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">)</span><br></br>
<span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span>pets <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>
  console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>pets<span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it">La consulta anterior devolverá todas las mascotas con la ciudad 'Los Ángeles', pero sólo devolverá el nombre y la raza o cada mascota. Suponiendo que sólo hay dos mascotas con 'Los Ángeles' como su ciudad, la respuesta JSON sería algo como esto:</p>

<p>The above query will return all pets with the city 'Los Angeles', but will only return the name and breed or each pet. Supposing there only two pets with 'Los Angeles' as their city, the JSON response would look something like this:</p>

<pre className=" language-json line-numbers"><code className="language-json"><span className="token punctuation">[</span><br></br>
  <span className="token punctuation">&#123;</span><br></br>
    <span className="token property">"name"</span><span className="token operator">:</span> <span className="token string">"Max"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"type"</span><span className="token operator">:</span> <span className="token string">"cat"</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">,</span><br></br>
  <span className="token punctuation">&#123;</span><br></br>
    <span className="token property">"name"</span><span className="token operator">:</span> <span className="token string">"Penelope"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"type"</span><span className="token operator">:</span> <span className="token string">"dog"</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
<span className="token punctuation">]</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<h5 id="readqueryingmultiplecolumns">READ: Querying multiple columns</h5>

<p className="it">La funcionalidad básica de búsqueda es una característica común de las API, así que construimos un punto final de búsqueda para nuestra API. El siguiente es un ejemplo de consulta que nos permite buscar gatos en Los Angeles.</p>

<p>Basic search functionality is a common feature of APIs, so let's build a search endpoint for our API. The following is an example of query that lets us search for cats in Los Angeles. </p>

<p className="it">El código es simple, aquí está:  </p>

<p>The code is simple, here it is:  </p>

<pre className=" language-javascript line-numbers"><code className="language-javascript">db<span className="token punctuation">.</span>pets<span className="token punctuation">.</span><span className="token function">findAll</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span> <br></br> 
  where<span className="token punctuation">:</span> <span className="token punctuation">&#123;</span><br></br>
    city<span className="token punctuation">:</span> <span className="token string">'Los Angeles'</span><span className="token punctuation">,</span> <br></br>
    type<span className="token punctuation">:</span> <span className="token string">'cat'</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it">Si estábamos buscando <em>sólo una columna</em> , por ejemplo ciudad, podríamos enviar una sola variable como una carga útil del cliente (este ejemplo utiliza la popular biblioteca <a href="https://visionmedia.github.io/superagent/" target="_blank">SuperAgent</a> ):  </p>

<p>If we were searching <em>only one column</em>, e.g. city, we could send a single variable as a payload from the client (this example uses the popular <a href="https://visionmedia.github.io/superagent/" target="_blank">SuperAgent</a> library):  </p>

<pre className=" language-javascript line-numbers"><code className="language-javascript"><span className="token keyword">import</span> superagent <span className="token keyword">from</span> <span className="token string">'superagent'</span><span className="token punctuation">;</span><br></br>
<br></br>
<span className="token keyword">const</span> petCity <span className="token operator">=</span> <span className="token string">'Los Angeles'</span><span className="token punctuation">;</span><br></br>
<br></br>
superagent <br></br> 
  <span className="token punctuation">.</span><span className="token function">post</span><span className="token punctuation">(</span><span className="token string">'/search'</span><span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span> city<span className="token punctuation">:</span> petCity <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token keyword">set</span><span className="token punctuation">(</span><span className="token string">'Accept'</span><span className="token punctuation">,</span> <span className="token string">'application/json'</span><span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token function">end</span><span className="token punctuation">(</span><span className="token keyword">function</span><span className="token punctuation">(</span>err<span className="token punctuation">,</span> res<span className="token punctuation">)</span><span className="token punctuation">&#123;</span><br></br>
    <span className="token keyword">if</span> <span className="token punctuation">(</span>err <span className="token operator">||</span> <span className="token operator">!</span>res<span className="token punctuation">.</span>ok<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
      <span className="token comment" spellcheck="true">// handle error</span><br></br>
    <span className="token punctuation">&#125;</span> <span className="token keyword">else</span> <span className="token punctuation">&#123;</span><br></br>
      <span className="token comment" spellcheck="true">// handle success</span><br></br>
    <span className="token punctuation">&#125;</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it">Como siempre, nuestra API está construida con Express.js. El punto final para recibir nuestra consulta sería así:  </p>

<p>As always, our API is built with Express.js. The endpoint to receive our query would look like this:  </p>

<pre className=" language-javascript line-numbers"><code className="language-javascript">app<span className="token punctuation">.</span><span className="token function">post</span><span className="token punctuation">(</span><span className="token string">'/search'</span><span className="token punctuation">,</span> <span className="token punctuation">(</span>req<span className="token punctuation">,</span> res<span className="token punctuation">)</span> <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>
<br></br>
  <span className="token keyword">const</span> citySearch <span className="token operator">=</span> req<span className="token punctuation">.</span><br></br>body<span className="token punctuation">.</span>city<span className="token punctuation">;</span><br></br>
<br></br>
  db<span className="token punctuation">.</span>pets<span className="token punctuation">.</span><span className="token function">findAll</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span><br></br>
    where<span className="token punctuation">:</span> citySearch
  <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span>pets <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>
    res<span className="token punctuation">.</span><span className="token function">json</span><span className="token punctuation">(</span>pets<span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it"><strong>NOTA:</strong> Aunque estamos obteniendo datos, y el método Sequelize que estamos utilizando es <code>findAll</code>, nuestro punto final <em>no</em> es un punto final GET. Puesto que estamos enviando / publicando un objeto desde el cliente, necesitamos hacer de este punto final una ruta POST.</p>

<p><strong>NOTE:</strong> Although we are 'getting' data, and the Sequelize method we are using is <code>findAll</code>, our endpoint is <em>not</em> a GET endpoint. Since we are sending/posting an object from the client, we need to make this endpoint a POST route.</p>

<p className="it">Pero, ¿cómo buscamos <em>múltiples columnas</em> , por ejemplo, ciudad <em>y</em> tipo, a través de nuestra API Express? Tendremos que pasar un objeto a Sequelize, y este objeto contendrá nuestros parámetros de consulta.</p>

<p>But how do we search <em>multiple columns</em>, e.g. city <em>and</em> type, via our Express API? We'll have to pass an object to Sequelize, and this object will contain our query parameters.</p>

<p className="it">Nuestro código de cliente se vería así:  </p>

<p>Our client code would look something like this:  </p>

<pre className=" language-javascript line-numbers"><code className="language-javascript"><span className="token keyword">import</span> superagent <span className="token keyword">from</span> <span className="token string">'superagent'</span><span className="token punctuation">;</span><br></br>
<br></br>
<span className="token keyword">const</span> myQuery <span className="token operator">=</span> <span className="token punctuation">&#123;</span> <br></br> 
  city<span className="token punctuation">:</span> <span className="token string">'Los Angeles'</span><span className="token punctuation">,</span><br></br>
  type<span className="token punctuation">:</span> <span className="token string">'cat'</span><br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">;</span><br></br>
<br></br>
superagent  <br></br>
  <span className="token punctuation">.</span><span className="token function">post</span><span className="token punctuation">(</span><span className="token string">'/search'</span><span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span> query<span className="token punctuation">:</span> myQuery <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token keyword">set</span><span className="token punctuation">(</span><span className="token string">'Accept'</span><span className="token punctuation">,</span> <span className="token string">'application/json'</span><span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token function">end</span><span className="token punctuation">(</span><span className="token keyword">function</span><span className="token punctuation">(</span>err<span className="token punctuation">,</span> res<span className="token punctuation">)</span><span className="token punctuation">&#123;</span><br></br>
    <span className="token keyword">if</span> <span className="token punctuation">(</span>err <span className="token operator">||</span> <span className="token operator">!</span>res<span className="token punctuation">.</span>ok<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
      <span className="token comment" spellcheck="true">// handle error</span><br></br>
    <span className="token punctuation">&#125;</span> <span className="token keyword">else</span> <span className="token punctuation">&#123;</span><br></br>
      <span className="token comment" spellcheck="true">// handle success</span><br></br>
    <span className="token punctuation">&#125;</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it">Nuestro punto final de API lo recibiría así:  </p>

<p>Our API endpoint would receive it like so:  </p>

<pre className=" language-javascript line-numbers"><code className="language-javascript">app<span className="token punctuation">.</span><span className="token function">post</span><span className="token punctuation">(</span><span className="token string">'/search'</span><span className="token punctuation">,</span> <span className="token punctuation">(</span>req<span className="token punctuation">,</span> res<span className="token punctuation">)</span> <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>
<br></br>
  <span className="token keyword">const</span> multipleSearch <span className="token operator">=</span> req<span className="token punctuation">.</span>body<span className="token punctuation">.</span>query<span className="token punctuation">;</span><br></br>
<br></br>
  db<span className="token punctuation">.</span>pets<span className="token punctuation">.</span><span className="token function">findAll</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span><br></br>
    where<span className="token punctuation">:</span> multipleSearch<br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span>pets <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>
    res<span className="token punctuation">.</span><span className="token function">json</span><span className="token punctuation">(</span>pets<span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<h5 id="createbulkcreation">CREATE: Bulk creation</h5>

<p className="it">La creación de registros múltiples es la más directa de las operaciones masivas, ya que Sequelize tiene un <code>bulkCreate</code>método que acepta una matriz de objetos.</p>

<p>Creating multiple records is the most straightforward of the bulk operations, because Sequelize has a <code>bulkCreate</code> method that accepts an array of objects.</p>

<p className="it">Para crear dos usuarios a la vez, necesitamos enviar a nuestra API una matriz que contenga dos objetos de usuario. Aquí está el objeto junto con el código SuperAgent el cliente debe enviar el punto final de creación.</p>

<p>To create two users at once, we need to send our API an array containing two user objects. Here is the object along with the SuperAgent code the client should send the creation endpoint.</p>

<pre className=" language-javascript line-numbers"><code className="language-javascript"><span className="token keyword">const</span> owners <span className="token operator">=</span> <span className="token punctuation">[</span> <br></br> 
  <span className="token punctuation">&#123;</span><br></br>
    name<span className="token punctuation">:</span> <span className="token string">"John"</span><span className="token punctuation">,</span><br></br>
    role<span className="token punctuation">:</span> <span className="token string">"user"</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">,</span><br></br>
  <span className="token punctuation">&#123;</span>
    name<span className="token punctuation">:</span> <span className="token string">"Sean"</span><span className="token punctuation">,</span>
    role<span className="token punctuation">:</span> <span className="token string">"user"</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
<span className="token punctuation">]</span><span className="token punctuation">;</span><br></br>
superagent  <br></br>
  <span className="token punctuation">.</span><span className="token function">post</span><span className="token punctuation">(</span><span className="token string">'/owners/bulk'</span><span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span>owners<span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token keyword">set</span><span className="token punctuation">(</span><span className="token string">'Accept'</span><span className="token punctuation">,</span> <span className="token string">'application/json'</span><span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token function">end</span><span className="token punctuation">(</span><span className="token keyword">function</span><span className="token punctuation">(</span>err<span className="token punctuation">,</span> res<span className="token punctuation">)</span><span className="token punctuation">&#123;</span><br></br>
    <span className="token keyword">if</span> <span className="token punctuation">(</span>err <span className="token operator">||</span> <span className="token operator">!</span>res<span className="token punctuation">.</span>ok<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
      <span className="token comment" spellcheck="true">// handle error</span><br></br>
    <span className="token punctuation">&#125;</span> <span className="token keyword">else</span> <span className="token punctuation">&#123;</span><br></br>
      <span className="token comment" spellcheck="true">// handle success</span><br></br>
    <span className="token punctuation">&#125;</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it">Aquí está el punto final que recibe esta solicitud POST.</p>

<p>Here is the endpoint that receives this POST request.</p>

<pre className=" language-javascript line-numbers"><code className="language-javascript">app<span className="token punctuation">.</span><span className="token function">post</span><span className="token punctuation">(</span><span className="token string">'/owners/bulk'</span><span className="token punctuation">,</span> <span className="token punctuation">(</span>req<span className="token punctuation">,</span> res<span className="token punctuation">)</span> <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span>  <br></br>
  <span className="token keyword">const</span> ownerList <span className="token operator">=</span> req<span className="token punctuation">.</span>body<span className="token punctuation">.</span>owners<span className="token punctuation">;</span><br></br>
  db<span className="token punctuation">.</span>owners<span className="token punctuation">.</span><span className="token function">bulkCreate</span><span className="token punctuation">(</span>ownerList<span className="token punctuation">)</span><br></br>
    <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span>newOwners <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>
      res<span className="token punctuation">.</span><span className="token function">json</span><span className="token punctuation">(</span><br></br>newOwners<span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
    <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it">El <code>bulkCreate</code>método de Sequelize devuelve los usuarios recién creados. Aquí está la respuesta de JSON nuestra petición de creación masiva produce:</p>

<p>Sequelize's <code>bulkCreate</code> method returns the the newly created users. Here is the JSON response our bulk create request produces:</p>

<pre className=" language-json line-numbers"><code className="language-json"><span className="token punctuation">[</span><br></br>
  <span className="token punctuation">&#123;</span><br></br>
    <span className="token property">"id"</span><span className="token operator">:</span> <span className="token string">"1c9fa4db-3499-43ed-8378-47c8f53e900a"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"name"</span><span className="token operator">:</span> <span className="token string">"John"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"role"</span><span className="token operator">:</span> <span className="token string">"user"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"created_at"</span><span className="token operator">:</span> <span className="token string">"2016-10-15T20:23:05.020Z"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"updated_at"</span><span className="token operator">:</span> <span className="token string">"2016-10-15T20:23:05.020Z"</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">,</span><br></br>
  <span className="token punctuation">&#123;</span><br></br>
    <span className="token property">"id"</span><span className="token operator">:</span> <span className="token string">"b292ff23-9f56-4f15-84ca-68dae355da11"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"name"</span><span className="token operator">:</span> <span className="token string">"Sean"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"role"</span><span className="token operator">:</span> <span className="token string">"user"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"created_at"</span><span className="token operator">:</span> <span className="token string">"2016-10-15T20:23:05.020Z"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"updated_at"</span><span className="token operator">:</span> <span className="token string">"2016-10-15T20:23:05.020Z"</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
<span className="token punctuation">]</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<h5 id="updateupdatingmultiplerecords">UPDATE: Updating multiple records</h5>

<p className="it">La actualización y eliminación de varios registros requiere más esfuerzo por parte del desarrollador, porque Sequelize no tiene un método específico para estas operaciones. Sin embargo, esto nos da la oportunidad de aprovechar la funcionalidad de promesa de Javascript incorporada en Sequelize.</p>

<p>Updating and deleting multiple records requires more effort on the part of the developer, because Sequelize doesn't have a method specifically for these operations. However, this gives us an opportunity to take advantage of the Javascript promise functionality built into Sequelize.</p>

<p className="it">Existen dos pasos para actualizar (o eliminar) varios registros. Primero, consulta los registros. En segundo lugar, actualizar los registros. El segundo paso es el más complicado de los dos.</p>

<p>There are two steps for updating (or deleting) multiple records. First, you query the records. Second, you update the records. The second step is the trickier of the two.</p>

<p className="it"><strong>Paso 1:</strong> Vamos a mantener esta parte tan simple como sea posible. Para nuestra API, el cliente tendrá que enviar una matriz de ids correspondientes a los registros que se van a actualizar. Utilizaremos esta matriz para recuperar los registros de la base de datos. También necesitaremos un objeto que contenga las columnas y los valores de la actualización.</p>

<p><strong>Step 1:</strong> We are going to keep this part as simple as possible. For our API, the client will have to send an array of ids corresponding to the records to be updated. We'll use this array to retrieve the records from the database. We will also need an object containing the columns and values for the update. </p>

<p className="it">Si cambiamos el papel de los propietarios John y Sean de 'usuario' a 'admin', enviaríamos el siguiente código al cliente:  </p>

<p>If we were to change the role of owners John and Sean from 'user' to 'admin', we would send the following code from the client:  </p>

<pre className=" language-javascript line-numbers"><code className="language-javascript"><span className="token keyword">const</span> updateObj <span className="token operator">=</span> <span className="token punctuation">&#123;</span><br></br>  
  ids<span className="token punctuation">:</span> <span className="token punctuation">[</span><br></br>
    <span className="token string">"1c9fa4db-3499-43ed-8378-47c8f53e900a"</span><span className="token punctuation">,</span><br></br>
    <span className="token string">"b292ff23-9f56-4f15-84ca-68dae355da11"</span><br></br>
  <span className="token punctuation">]</span><span className="token punctuation">,</span><br></br>
  updates<span className="token punctuation">:</span> <span className="token punctuation">&#123;</span><br></br>
    role<span className="token punctuation">:</span> <span className="token string">'admin'</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">;</span><br></br>
superagent  <br></br>
  <span className="token punctuation">.</span><span className="token function">patch</span><span className="token punctuation">(</span><span className="token string">'/owners/bulk'</span><span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token function">send</span><span className="token punctuation">(</span>updateObj<span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token keyword">set</span><span className="token punctuation">(</span><span className="token string">'Accept'</span><span className="token punctuation">,</span> <span className="token string">'application/json'</span><span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token function">end</span><span className="token punctuation">(</span><span className="token keyword">function</span><span className="token punctuation">(</span>err<span className="token punctuation">,</span> res<span className="token punctuation">)</span><span className="token punctuation">&#123;</span><br></br>
    <span className="token keyword">if</span> <span className="token punctuation">(</span>err <span className="token operator">||</span> <span className="token operator">!</span>res<span className="token punctuation">.</span>ok<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
      <span className="token comment" spellcheck="true">// handle error</span><br></br>
    <span className="token punctuation">&#125;</span> <span className="token keyword">else</span> <span className="token punctuation">&#123;</span><br></br>
      <span className="token comment" spellcheck="true">// handle success</span><br></br>
    <span className="token punctuation">&#125;</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it"><strong>Paso 2:</strong> Ya que estamos actualizando registros existentes, necesitamos crear una ruta PATCH (nota la línea 11 en nuestro código SuperAgent, también). La primera pieza de la lógica que necesitamos codificar es una consulta que buscará varios identificadores. Podemos hacerlo usando el <code>$in</code>operador de Sequelize (ver línea 6 a continuación). Este operador leerá cada elemento en una matriz.</p>

<p><strong>Step 2:</strong> Since we are updating existing records, we need to create a PATCH route (note line 11 in our SuperAgent code, too). The first piece of logic we need to code is a query that will search for multiple ids. We can do this by using Sequelize's <code>$in</code> operator (see line 6 below). This operator will read each item in an array.</p>

<pre className=" language-javascript line-numbers"><code className="language-javascript">app<span className="token punctuation">.</span><span className="token function">patch</span><span className="token punctuation">(</span><span className="token string">'/owners/bulk'</span><span className="token punctuation">,</span> <span className="token punctuation">(</span>req<span className="token punctuation">,</span> res<span className="token punctuation">)</span> <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>  
  <span className="token keyword">const</span> ids <span className="token operator">=</span> req<span className="token punctuation">.</span>body<span className="token punctuation">.</span>ids<span className="token punctuation">;</span><br></br>
  <span className="token keyword">const</span> updates <span className="token operator">=</span> req<span className="token punctuation">.</span><br></br>body<span className="token punctuation">.</span>updates<span className="token punctuation">;</span><br></br>
<br></br>
  db<span className="token punctuation">.</span>owners<span className="token punctuation">.</span><span className="token function">findAll</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span><br></br>
    where<span className="token punctuation">:</span> <span className="token punctuation">&#123;</span> id<span className="token punctuation">:</span> <span className="token punctuation">&#123;</span> $<span className="token keyword">in</span><span className="token punctuation">:</span> ids <span className="token punctuation">&#125;</span> <span className="token punctuation">&#125;</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token comment" spellcheck="true">// update logic goes here</span><br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">)</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it">En el código anterior, primero tomamos los ids y las actualizaciones de <code>req.body</code>. Entonces consultamos las tablas de propietarios usando el <code>$in</code>operador y la matriz de ids. Esta consulta devolverá todos los propietarios de la <code>ids</code>matriz. Ahora tenemos que aplicar las actualizaciones.</p>

<p>In the code above, first we grab the ids and the updates from <code>req.body</code>. Then we query the owners tables using the <code>$in</code> operator and the array of ids. This query will return all the owners in the <code>ids</code> array. Now we need to apply the updates.</p>

<p className="it">Para asegurarnos de que todas nuestras actualizaciones se realicen antes de enviar una respuesta al cliente, necesitamos usarla <code>Promise.all()</code>. Hemos estado usando promesas constantemente, como lo demuestra nuestro uso de <code>.then()</code>, pero hemos estado lidiando con una promesa a la vez.</p>

<p>To make sure all of our updates are made before we send a response to the client, we need to use <code>Promise.all()</code>. We've been using promises constantly, as shown by our use of <code>.then()</code>, but we've been dealing with one promise at a time. </p>

<p className="it">La forma general de la lógica que hemos estado usando es "primero haz X, entonces haz Y, luego haz Z". En concreto, la lógica ha sido "consultar la base de datos, a continuación, enviar de vuelta una respuesta" o "consultar la base de datos, a continuación, actualizar el registro, a continuación, enviar de vuelta la respuesta". En estos casos, las promesas nos permiten esperar hasta que se complete una operación antes de pasar al siguiente paso.</p>

<p>The general form of the logic we have been using is "first do X, then do Y, then do Z". Specifically, the logic has been "query the database, then send back a response" or "query the database, then update the record, then send back the response". In these cases, promises allow us to wait until an operation is complete before moving on to the next step. </p>

<p className="it">En la lógica descrita anteriormente, se trata de una operación a la vez; hacer <em>esto</em> , a continuación, hacer <em>que</em> . Ahora que estamos actualizando múltiples registros, la lógica es diferente. En lugar de "hacer esto, entonces hacer eso", necesitamos la lógica de la forma "Hacer <em>muchas operaciones</em> , una vez que están <em>todos</em> resueltos, a continuación, hacer X". Aquí es donde <code>Promise.all()</code>entra.</p>

<p>In the logic outlined above, we are dealing with one operations at a time; do <em>this</em>, then do <em>that</em>. Now that we are updating multiple records, the logic is different. Rather than "do this, then do that", we need logic of the form "Do <em>many operations</em>, once they are <em>all</em> resolved, then do X". This is where <code>Promise.all()</code> comes in. </p>

<p className="it">Veamos los detalles de nuestra implementación.  </p>

<p>Let's look at the specifics of our implementation.  </p>

<pre className=" language-javascript line-numbers"><code className="language-javascript">app<span className="token punctuation">.</span><span className="token function">patch</span><span className="token punctuation">(</span><span className="token string">'/owners/bulk'</span><span className="token punctuation">,</span> <span className="token punctuation">(</span>req<span className="token punctuation">,</span> res<span className="token punctuation">)</span> <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span> <br></br> 
  <span className="token keyword">const</span> ids <span className="token operator">=</span> req<span className="token punctuation">.</span>body<span className="token punctuation">.</span>ids<span className="token punctuation">;</span><br></br>
  <span className="token keyword">const</span> updates <span className="token operator">=</span> req<span className="token punctuation">.</span>body<span className="token punctuation">.</span>updates<span className="token punctuation">;</span><br></br>
<br></br>
  db<span className="token punctuation">.</span>owners<span className="token punctuation">.</span><span className="token function">findAll</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span><br></br>
    where<span className="token punctuation">:</span> <span className="token punctuation">&#123;</span> id<span className="token punctuation">:</span> <span className="token punctuation">&#123;</span> $<span className="token keyword">in</span><span className="token punctuation">:</span> ids <span className="token punctuation">&#125;</span> <span className="token punctuation">&#125;</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span>owners <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>
    <span className="token keyword">const</span> updatePromises <span className="token operator">=</span> owners<span className="token punctuation">.</span><span className="token function">map</span><span className="token punctuation">(</span>owner <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>
      <span className="token comment" spellcheck="true">// the line below creates a new item/promise for</span><br></br>
      <span className="token comment" spellcheck="true">// the updatePromises array</span><br></br>
      <span className="token keyword">return</span> owner<span className="token punctuation">.</span><span className="token function">updateAttributes</span><span className="token punctuation">(</span>updates<span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
    <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
    <span className="token keyword">return</span> db<span className="token punctuation">.</span>Sequelize<span className="token punctuation">.</span>Promise<span className="token punctuation">.</span><span className="token function">all</span><span className="token punctuation">(</span>updatePromises<span className="token punctuation">)</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><br></br>
  <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span><br></br>updatedOwners <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>
    res<span className="token punctuation">.</span><span className="token function">json</span><span className="token punctuation">(</span><br></br>updatedOwners<span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">)</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it">Después de recuperar la matriz de registros de propietario de la base de datos, tomamos la matriz y la utilizamos para crear una nueva matriz de promesas. El <code>.map()</code>método Javascript toma una matriz (en este caso <code>owners</code>) y crea una <em>nueva</em> matriz a partir de ella.</p>

<p>After retrieving the array of owner records from the database, we take the array and use it to create a new array of promises. The Javascript <code>.map()</code> method takes an array (in this case <code>owners</code>) and creates an <em>new</em> array from it. </p>

<p className="it">En las líneas 9 - 13, tomamos la <code>owners</code>matriz y la utilizamos como material para crear una matriz llamada <code>updatePromises</code>. Este último contiene una <code>updateAttributes</code>promesa para cada elemento de la <code>owners</code>matriz. A continuación, pasamos la <code>updatePromises</code>matriz recién creada a <code>Promise.all()</code>. <code>Promise.all()</code>espera que todas las promesas de la <code>updatePromises</code>matriz se resuelvan antes de pasar a la siguiente operación; en este caso, enviar una respuesta al cliente.</p>

<p>On lines 9 - 13, we take the <code>owners</code> array and use it as material for creating an array called <code>updatePromises</code>. The latter contains one <code>updateAttributes</code> promise for every item in the <code>owners</code> array. We then pass the newly created <code>updatePromises</code> array to <code>Promise.all()</code>. <code>Promise.all()</code> waits for every promise in the <code>updatePromises</code> array to resolve before moving on to the next operation; in this case, sending a response back to the client.</p>

<p className="it"><strong>NOTA:</strong> La declaración de devolución en <code>.map()</code>es muy importante. Si lo dejas fuera, producirás una nueva matriz de <code>null</code>valores. Para obtener más información sobre los métodos de matriz Javascript (que son esenciales para la programación funcional), echa un vistazo a <a href="http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/" target="_blank">esta publicación informativa</a> .</p>

<p><strong>NOTE:</strong> The return statement in <code>.map()</code> is very important. If you leave it out, you'll produce a new array of <code>null</code> values. For more on Javascript array methods (which are essential for functional programming), check out <a href="http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/" target="_blank">this informative post</a>.</p>

<h5 id="deletedeletingmultiplerecords">DELETE: Deleting multiple records</h5>

<p className="it">La eliminación de varios registros es similar a la actualización. De hecho, es un poco más simple porque no necesitamos un objeto de actualización - una matriz de ids es todo lo que se requiere.</p>

<p>Deleting multiple records is similar to updating. In fact, it's slightly simpler because we don't need an update object - an array of ids is all that's required.</p>

<pre className=" language-javascript line-numbers"><code className="language-javascript">app<span className="token punctuation">.</span><span className="token keyword">delete</span><span className="token punctuation">(</span><span className="token string">'/owners/bulk'</span><span className="token punctuation">,</span> <span className="token punctuation">(</span>req<span className="token punctuation">,</span> res<span className="token punctuation">)</span> <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span> <br></br> 
  <span className="token keyword">const</span> ids <span className="token operator">=</span> req<span className="token punctuation">.</span>body<span className="token punctuation">.</span>ids<span className="token punctuation">;</span><br></br>
  db<span className="token punctuation">.</span>owners<span className="token punctuation">.</span><span className="token function">findAll</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span><br></br>
    where<span className="token punctuation">:</span> <span className="token punctuation">&#123;</span> id<span className="token punctuation">:</span> <span className="token punctuation">&#123;</span> $<span className="token keyword">in</span><span className="token punctuation">:</span> ids <span className="token punctuation">&#125;</span> <span className="token punctuation">&#125;</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><br></br>
    <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span>owners <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>
      <span className="token keyword">const</span> deletePromises <span className="token operator">=</span> owners<span className="token punctuation">.</span><span className="token function">map</span><span className="token punctuation">(</span>owner <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>
        <span className="token keyword">return</span> owner<span className="token punctuation">.</span><span className="token function">destroy</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
      <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
      <span className="token keyword">return</span> db<span className="token punctuation">.</span>Sequelize<span className="token punctuation">.</span>Promise<span className="token punctuation">.</span><span className="token function">all</span><span className="token punctuation">(</span>deletePromises<span className="token punctuation">)</span><br></br>
    <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><br></br>
    <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span><br></br>deletedOwners <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>
      res<span className="token punctuation">.</span><span className="token function">json</span><span className="token punctuation">(</span>deletedOwners<span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
    <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it">En la línea 8 vemos el <code>.destroy()</code>método en funcionamiento. Si el modelo de Sequelize está configurado <code>paranoid: true</code>, el <code>.destroy()</code>método insertará una marca de tiempo que indica cuándo ocurrió la "supresión de software" y el registro ya no se devolverá en las consultas. Si el modelo es <code>paranoid: false</code>, entonces el registro continuará siendo devuelto en las consultas, pero habrá una marca de tiempo que indica cuando el registro fue "eliminado".</p>

<p>On line 8, we see the <code>.destroy()</code> method at work. If your Sequelize model is set to <code>paranoid: true</code>, the <code>.destroy()</code> method will insert a timestamp indicating when the 'soft deletion' happened and the record will no longer be returned in queries. If the model is <code>paranoid: false</code>, then the record will continue to be returned in queries, but there will be a timestamp indicating when the record was 'deleted'.</p>

<p className="it">La respuesta que envía esta ruta es una matriz de los registros eliminados, pero contendrá la <code>deleted_at</code>columna. Dado que nuestro modelo está ajustado a <code>paranoid: true</code>, estos registros no serán incluidos en consultas futuras.</p>

<p>The response this route sends is an array of the deleted records, but it will contain the <code>deleted_at</code> column. Since our model is set to <code>paranoid: true</code>, these records will not be included in future queries.</p>

<pre className=" language-json line-numbers"><code className="language-json"><span className="token punctuation">[</span><br></br>
  <span className="token punctuation">&#123;</span><br></br>
    <span className="token property">"id"</span><span className="token operator">:</span> <span className="token string">"1c9fa4db-3499-43ed-8378-47c8f53e900a"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"name"</span><span className="token operator">:</span> <span className="token string">"John"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"role"</span><span className="token operator">:</span> <span className="token string">"admin"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"created_at"</span><span className="token operator">:</span> <span className="token string">"2016-10-15T20:23:05.020Z"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"updated_at"</span><span className="token operator">:</span> <span className="token string">"2016-10-15T20:23:05.020Z"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"deleted_at"</span><span className="token operator">:</span> <span className="token string">"2016-10-16T16:16:22.365Z"</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">,</span>
  <span className="token punctuation">&#123;</span><br></br>
    <span className="token property">"id"</span><span className="token operator">:</span> <span className="token string">"b292ff23-9f56-4f15-84ca-68dae355da11"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"name"</span><span className="token operator">:</span> <span className="token string">"Sean"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"role"</span><span className="token operator">:</span> <span className="token string">"admin"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"created_at"</span><span className="token operator">:</span> <span className="token string">"2016-10-15T20:23:05.020Z"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"updated_at"</span><span className="token operator">:</span> <span className="token string">"2016-10-15T20:23:05.020Z"</span><span className="token punctuation">,</span><br></br>
    <span className="token property">"deleted_at"</span><span className="token operator">:</span> <span className="token string">"2016-10-16T16:16:22.365Z"</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
<span className="token punctuation">]</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it"><em>Si desea recibir una notificación cuando publique un nuevo contenido, puede inscribirse en mi lista de correo en la barra de navegación.</em></p>

<p><em>If you'd like to be notified when I publish new content, you can sign up for my mailing list in the navbar.</em></p>
            </div>

           
        </div>
  </div>
 </div>

)
