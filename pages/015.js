import Link from 'next/link'
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
                    <h1 className="posttitle_purus">React.js Forms: Controlled Components</h1>
                    <ul>
                        <li><time className="date_purus"> Oct 31 2016</time></li>
                    </ul>
                </div>
            </div>
        </header>
        <div className="wrapper_purus">
            <div className="postcontent_purus">
                <p className="it">Esta publicación cubre los siguientes componentes controlados:</p>

                <p>This post covers the following controlled components:</p>

<ul>
<li className="it">entradas de texto</li>

<li>text inputs</li>
<li className="it">entradas numéricas</li>

<li>number inputs</li>
<li className="it">entradas de radio</li>

<li>radio inputs</li>
<li className="it">entradas de casilla de verificación</li>

<li>checkbox inputs</li>
<li className="it">áreas de texto</li>

<li>textareas</li>
<li className="it">selecciona</li>

<li>selects</li>
</ul>

<p className="it">También están cubiertos:</p>

<p>Also covered are:</p>

<ul>
<li className="it">Borrado / restablecimiento de los datos del formulario</li>

<li>Clearing/resetting the form's data</li>
<li className="it">Envío de datos</li>

<li>Submitting data</li>
<li className="it">Validación</li>

<li>Validation</li>
</ul>

<blockquote>
  <h5>Just want the code? <a href="https://github.com/lorenseanstewart/react-controlled-form-components" target="_blank">Here it is!</a></h5>
  
  

  <p><br></br></p>
  
  <p className="it"></p>

  <p></p><h5>Check out the  <a href="http://lorenstewart.me/react-controlled-form-components/" target="_blank">Demo</a>.</h5><p className="it">Asegúrese de tener abierta la consola de su navegador mientras utiliza la demostración.</p>

  <p>Be sure to have your browser's console open as you use the demo.</p>
  <br></br><p className="it"></p>

  <p></p>
</blockquote>

<h4 id="introduction">Introduction</h4>

<p className="it">El problema que me encontré al aprender <a href="https://facebook.github.io/react/" target="_blank">React.js</a>  fue encontrar ejemplos del mundo real de componentes form controlados. Ejemplos de entradas de texto controladas son abundantes, pero ¿qué pasa con los checkboxes? ¿Radios? ¿Selects?</p>

<p>The problem I came across when learning <a href="https://facebook.github.io/react/" target="_blank">React.js</a> was finding real-world examples of controlled form components. Examples of controlled text inputs are plentiful, but what about checkboxes? Radios? Selects?</p>

<p className="it">Aquí hay una lista de ejemplos del mundo real de componentes form controlados; es la lista que desearía haber encontrado pronto en mi educación React. Todos los elementos del form están representados aquí, excepto las entradas de fecha y hora, que necesitan un post propio.</p>

<p>Here is a list of real-world examples of controlled form components; it's the list I wish I found early on in my React education. All form elements are represented here except for date and time inputs, which need a post of their own. </p>

<blockquote>
  <p className="it">Para aprender sobre el uso de <code>refs</code> con elementos de formulario, echa un vistazo a mi <a href="http://lorenstewart.me/2017/06/10/react-js-forms-using-refs/" target="_blank">blog</a> o a mi traducción <Link href='/016'><a>React.js Forms: Using Refs</a></Link> sobre el tema.</p>

  <p>To learn about using <code>refs</code> with form elements, check out my <a href="http://lorenstewart.me/2017/06/10/react-js-forms-using-refs/" target="_blank">blog post</a> on the topic.</p>
  


  <p><br></br></p>
</blockquote>

<p className="it">Para acelerar el tiempo de desarrollo, a veces es tentador importar una biblioteca para elementos de form. Cuando se trata de algo como forms, he encontrado que el uso de la biblioteca sólo hace la vida más difícil cuando necesito añadir comportamiento personalizado o validación. Una vez que conozca los patrones de React apropiados, crear componentes de form no es difícil y es algo que debemos hacer nosotros mismos. Utilice el código de esta publicación como inspiración o como punto de partida para sus propios componentes de form.</p>

<p>To speed up development time, sometimes it's tempting to import a library for something like form elements. When it comes to something like forms, I've found that using library just makes life more difficult when I need to add custom behavior or validation. Once you know proper React patterns, creating form components isn't difficult and it's something we should all probably do ourselves. Please use the code in this post as inspiration or as a starting point for your own form components.</p>

<p className="it">Además del código de los componentes individuales, los he puesto todos juntos en un form (adopción de mascota!) Para que pueda ver cómo los componentes secundarios actualizan el state del componente principal y cómo el parent actualiza el componente secundario a través de los props (<em>flujo de datos unidireccional</em>).</p>

<p>In addition to the code for individual components, I've put them all together in a (pet adoption!) form so you can see how child components update the parent component's state, and how the parent then updates the child component via props (<em>unidirectional data flow</em>).</p>

<p className="it"><strong>Nota: </strong> <a href="http://lorenstewart.me/react-controlled-form-components/" target="_blank">Este formulario </a> se construye con la maravillosa configuración de <a href="https://github.com/facebookincubator/create-react-app" target="_blank">creación de create-react-app</a> . Si todavía no lo ha instalado, le recomiendo hacerlo (<code>npm install -g create-react-app</code>). Es, con mucho, la forma más fácil de configurarlo para crear aplicaciones React.</p>

<p><strong>Note:</strong> <a href="http://lorenstewart.me/react-controlled-form-components/" target="_blank">This form</a> is built with the wonderful <a href="https://github.com/facebookincubator/create-react-app" target="_blank">create-react-app</a> build configuration. If you haven't installed it yet, I strongly recommend doing so (<code>npm install -g create-react-app</code>). It's by far the easiest way to get set-up to build React apps.</p>

<h4 id="whatisacontrolledcomponent">What is a controlled component?</h4>

<p className="it">Un componente controlado tiene dos aspectos:</p>

<p>A controlled component has two aspects:</p>

<ol>
<li className="it">Los componentes controlados tienen funciones para gobernar los datos que entran en ellos en cada evento <code>onChange</code>, en lugar de tomar los datos sólo una vez, por ejemplo, cuando un usuario hace clic en un botón de envío. Estos datos "gobernados" se guardan entonces en state (en este caso, el state del componente parent/contenedor).  </li>

<li>Controlled components have functions to govern the data going into them on every <code>onChange</code> event, rather than grabbing the data only once, e.g. when a user clicks a submit button. This 'governed' data is then saved to state (in this case, the parent/container component's state).  </li>
<li className="it">Los datos mostrados por un componente controlado se reciben a través de elementos pasados ​​de su componente parent/contenedor.</li>

<li>Data displayed by a controlled component is received through props passed down from it's parent/container component.</li>
</ol>

<p className="it">Esto es un bucle unidireccional - desde (1) entrada de componente secundario (2) al state de componente parent y (3) de vuelta al componente secundario a través de props - es lo que se entiende por <strong>flujo de datos unidireccional</strong> en la arquitectura de la aplicación React.js.</p>

<p>This is a one-way loop – from (1) child component input (2) to parent component state and (3) back down to the child component via props – is what is meant by <em>unidirectional data flow</em> in React.js application architecture. </p>

<h4 id="architectureoftheform">Architecture of the form</h4>

<p className="it">Nuestro componente de nivel más alto, se llama <code>App</code>, y aquí está:</p>

<p>Our highest level component, is named <code>App</code>, and here it is:</p>

<pre className=" language-jsx line-numbers"><code className="language-jsx"><span className="token keyword">import</span> React<span className="token punctuation">,</span> <span className="token punctuation">&#123;</span> Component <span className="token punctuation">&#125;</span> <span className="token keyword">from</span> <span className="token string">'react'</span><span className="token punctuation">;</span> <br></br> 
<span className="token keyword">import</span> <span className="token string">'../node_modules/spectre.css/dist/spectre.min.css'</span><span className="token punctuation">;</span> <br></br> 
<span className="token keyword">import</span> <span className="token string">'./styles.css'</span><span className="token punctuation">;</span> <br></br> 
<span className="token keyword">import</span> FormContainer <span className="token keyword">from</span> <span className="token string">'./containers/FormContainer'</span><span className="token punctuation">;</span><br></br>
<br></br>
<span className="token keyword">class</span> <span className="token class-name">App</span> <span className="token keyword">extends</span> <span className="token class-name">Component</span> <span className="token punctuation">&#123;</span><br></br>  
  <span className="token function">render</span><span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token punctuation">&#123;</span>
    <span className="token keyword">return</span> <span className="token punctuation">(</span>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>container<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>columns<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br></br>
          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>col-md-9</span> <span className="token attr-name">centered"</span><span className="token punctuation">&gt;</span></span><br></br>
            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h3</span><span className="token punctuation">&gt;</span></span>React<span className="token punctuation">.</span>js Controlled Form Components<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h3</span><span className="token punctuation">&gt;</span></span><br></br>
            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>FormContainer</span> <span className="token punctuation">/&gt;</span></span><br></br>
          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
    <span className="token punctuation">)</span><span className="token punctuation">;</span>
  <span className="token punctuation">&#125;</span><br></br>
<span className="token punctuation">&#125;</span><br></br>
<br></br>
<span className="token keyword">export</span> <span className="token keyword">default</span> App<span className="token punctuation">;</span> <br></br> 
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it"><code>App</code> no hace nada, pero renderiza nuestra página <code>index.html</code>. La parte interesante de <code>App</code> está en la línea 13, el <code>FormContainer</code>.</p>

<p><code>App</code> doesn't do anything but render on our <code>index.html</code> page. The interesting part of <code>App</code> is on line 13, the <code>FormContainer</code>. </p>

<h5 id="interludecontainersmartcomponentsvsdumbcomponents">Interlude: container (smart) components vs (dumb) components</h5>

<p className="it">Este es un buen momento para mencionar componentes de contenedores (smart) vs componentes (dumb). Los componentes del contenedor alojan lógica de negocios, realizan llamadas de datos, etc. Los componentes regulares o dumb reciben datos de su componente principal (contenedor). Los componentes dumb pueden activar la lógica, como actualizar el state, pero sólo mediante funciones transmitidas desde el componente parent (contenedor).</p>

<p>This is a good time to mention container (smart) components vs (dumb) components. Container components house business logic, make data calls, etc. Regular, or dumb, components receive data from their parent (container) component. Dumb components may trigger logic, like updating state, but only by means of functions passed down from the parent (container) component.</p>

<p className="it"><strong>Nota:</strong> Debo señalar que no todos los componentes parent son componentes de contenedor, pero así es como se configura nuestro form. Está perfectamente bien tener una jerarquía de componentes dumb dentro de los componentes dumb.</p>

<p><strong>Note:</strong> I should point out that not all parent components are container components, but that's how our form is set up. It's perfectly fine to have a hierarchy of dumb components within dumb components.</p>

<h4 id="backtoarchitecture">Back to Architecture</h4>

<p className="it">Las casas <code>FormContainer</code> de los componentes del elemento de form, llama a los datos en el gancho del ciclo de vida <code>componentDidMount</code>, y contiene la lógica para actualizar el state del form. Por razones de simplicidad, he dejado fuera los props y los change handlers de los componentes del elemento de form en el esquema siguiente. (Desplácese hasta el final de la publicación para ver el código completo.)</p>

<p>The <code>FormContainer</code> houses the form element components, calls data in the <code>componentDidMount</code> lifecycle hook, and contains the logic for updating the state of the form. For the sake of simplicity, I've left out the props and change handlers of the form element components in the outline below. (Scroll to the end of the post for the complete code.)</p>

<pre className=" language-jsx line-numbers"><code className="language-jsx"><span className="token keyword">import</span> React<span className="token punctuation">,</span> <span className="token punctuation">&#123;</span>Component<span className="token punctuation">&#125;</span> <span className="token keyword">from</span> <span className="token string">'react'</span><span className="token punctuation">;</span>  <br></br>
<span className="token keyword">import</span> CheckboxOrRadioGroup <span className="token keyword">from</span> <span className="token string">'../components/CheckboxOrRadioGroup'</span><span className="token punctuation">;</span>  <br></br>
<span className="token keyword">import</span> SingleInput <span className="token keyword">from</span> <span className="token string">'../components/SingleInput'</span><span className="token punctuation">;</span>  <br></br>
<span className="token keyword">import</span> TextArea <span className="token keyword">from</span> <span className="token string">'../components/TextArea'</span><span className="token punctuation">;</span>  <br></br>
<span className="token keyword">import</span> Select <span className="token keyword">from</span> <span className="token string">'../components/Select'</span><span className="token punctuation">;</span><br></br>
<br></br>
<span className="token keyword">class</span> <span className="token class-name">FormContainer</span> <span className="token keyword">extends</span> <span className="token class-name">Component</span> <span className="token punctuation">&#123;</span> <br></br> 
  <span className="token function">constructor</span><span className="token punctuation">(</span>props<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
    <span className="token keyword">super</span><span className="token punctuation">(</span>props<span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span><br></br>handleFormSubmit <span className="token operator">=</span> <span className="token keyword">this</span><span className="token punctuation">.</span>handleFormSubmit<span className="token punctuation">.</span><span className="token function">bind</span><span className="token punctuation">(</span><span className="token keyword">this</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span>handleClearForm <span className="token operator">=</span> <span className="token keyword">this</span><span className="token punctuation">.</span>handleClearForm<span className="token punctuation">.</span><span className="token function">bind</span><span className="token punctuation">(</span><span className="token keyword">this</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
  <span className="token function">componentDidMount</span><span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
    <span className="token function">fetch</span><span className="token punctuation">(</span><span className="token string">'./fake_db.json'</span><span className="token punctuation">)</span>
      <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span>res <span className="token operator">=</span><span className="token operator">&gt;</span> res<span className="token punctuation">.</span><span className="token function">json</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">)</span><br></br>
      <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span>data <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span>
        <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">setState</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span><br></br>
          ownerName<span className="token punctuation">:</span> data<span className="token punctuation">.</span>ownerName<span className="token punctuation">,</span><br></br>
          petSelections<span className="token punctuation">:</span> data<span className="token punctuation">.</span>petSelections<span className="token punctuation">,</span><br></br>
          selectedPets<span className="token punctuation">:</span> data<span className="token punctuation">.</span>selectedPets<span className="token punctuation">,</span><br></br>
          ageOptions<span className="token punctuation">:</span> data<span className="token punctuation">.</span>ageOptions<span className="token punctuation">,</span><br></br>
          ownerAgeRangeSelection<span className="token punctuation">:</span> data<span className="token punctuation">.</span>ownerAgeRangeSelection<span className="token punctuation">,</span><br></br>
          siblingOptions<span className="token punctuation">:</span> data<span className="token punctuation">.</span>siblingOptions<span className="token punctuation">,</span><br></br>
          siblingSelection<span className="token punctuation">:</span> data<span className="token punctuation">.</span>siblingSelection<span className="token punctuation">,</span><br></br>
          currentPetCount<span className="token punctuation">:</span> data<span className="token punctuation">.</span>currentPetCount<span className="token punctuation">,</span><br></br>
          description<span className="token punctuation">:</span> data<span className="token punctuation">.</span>description<br></br>
        <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
    <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
  <span className="token function">handleFormSubmit</span><span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
    <span className="token comment" spellcheck="true">// submit logic goes here</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
  <span className="token function">handleClearForm</span><span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
    <span className="token comment" spellcheck="true">// clear form logic goes here</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
  <span className="token function">render</span><span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
    <span className="token keyword">return</span> <span className="token punctuation">(</span><br></br>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>form</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>container<span className="token punctuation">"</span></span> <span className="token attr-name">onSubmit</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>handleFormSubmit<span className="token punctuation">&#125;</span></span><span className="token punctuation">&gt;</span></span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span><span className="token punctuation">&gt;</span></span>Pet Adoption Form<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>SingleInput</span> <span className="token punctuation">/&gt;</span></span> <span className="token punctuation">&#123;</span><span className="token comment" spellcheck="true">/* Full name text input */</span><span className="token punctuation">&#125;</span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>Select</span> <span className="token punctuation">/&gt;</span></span> <span className="token punctuation">&#123;</span><span className="token comment" spellcheck="true">/* Owner age range select */</span><span className="token punctuation">&#125;</span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>CheckboxOrRadioGroup</span> <span className="token punctuation">/&gt;</span></span> <span className="token punctuation">&#123;</span><span className="token comment" spellcheck="true">/* Pet type checkboxes */</span><span className="token punctuation">&#125;</span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>CheckboxOrRadioGroup</span> <span className="token punctuation">/&gt;</span></span> <span className="token punctuation">&#123;</span><span className="token comment" spellcheck="true">/* Will you adopt siblings? radios */</span><span className="token punctuation">&#125;</span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>SingleInput</span> <span className="token punctuation">/&gt;</span></span> <span className="token punctuation">&#123;</span><span className="token comment" spellcheck="true">/* Number of current pets number input */</span><span className="token punctuation">&#125;</span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>TextArea</span> <span className="token punctuation">/&gt;</span></span> <span className="token punctuation">&#123;</span><span className="token comment" spellcheck="true">/* Descriptions of current pets textarea */</span><span className="token punctuation">&#125;</span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span><br></br>
          <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>submit<span className="token punctuation">"</span></span><br></br>
          <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn</span> <span className="token attr-name">btn-primary</span> <span className="token attr-name">float-right"</span><br></br>
          <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>Submit<span className="token punctuation">"</span>/</span><span className="token punctuation">&gt;</span></span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span><br></br>
          <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn</span> <span className="token attr-name">btn-link</span> <span className="token attr-name">float-left"</span><br></br>
          <span className="token attr-name">onClick</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>handleClearForm<span className="token punctuation">&#125;</span></span><span className="token punctuation">&gt;</span></span>Clear form<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br></br>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>form</span><span className="token punctuation">&gt;</span></span><br></br>
  <span className="token punctuation">)</span><span className="token punctuation">;</span>
<span className="token punctuation">&#125;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span><br></br></code></pre>

<p className="it">Ahora que la arquitectura básica está establecida, echemos un vistazo a cada elemento secundario.</p>

<p>Now that the basic architecture is laid out, let's take a look at each child element.</p>

<h3 id="singleinput"><code>&lt;SingleInput /&gt;</code></h3>

<p className="it">Este componente puede ser una entrada <code>text</code> o una entrada de <code>number</code>, dependiendo de los props que se pasan. Una gran manera de documentar los props que toma un componente es a través de PropTypes de React. Si faltan props o si el prop es el tipo de datos incorrecto, aparecerá una advertencia en la consola del navegador.</p>

<p>This component can be either a <code>text</code> or a <code>number</code> input, depending on the props you pass it. A great way to document the props a component takes is via React's PropTypes. If any props are missing, or if the prop is the wrong data type, a warning will appear in the browser console.</p>

<p className="it">A continuación se enumeran los propTypes para el <code>&lt;SingleInput /&gt;</code>component.  </p>

<p>Listed below are the PropTypes for the <code>&lt;SingleInput /&gt;</code> component.  </p>

<pre className=" language-javascript line-numbers"><code className="language-javascript">SingleInput<span className="token punctuation">.</span>propTypes <span className="token operator">=</span> <span className="token punctuation">&#123;</span>  <br></br>
  inputType<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span><span className="token function">oneOf</span><span className="token punctuation">(</span><span className="token punctuation">[</span><span className="token string">'text'</span><span className="token punctuation">,</span> <span className="token string">'number'</span><span className="token punctuation">]</span><span className="token punctuation">)</span><span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  title<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  name<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  controlFunc<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>func<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  content<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span><span className="token function">oneOfType</span><span className="token punctuation">(</span><span className="token punctuation">[</span><br></br>
    React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">,</span><br></br>
    React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>number<span className="token punctuation">,</span><br></br>
  <span className="token punctuation">]</span><span className="token punctuation">)</span><span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span>
  placeholder<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">,</span><br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">;</span>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it">Los PropTypes indican el tipo de la propiedad (string, number, array, object, etc.), si es necesario ( <code>isRequired</code>), y mucho más. (Consulte la <a href="https://facebook.github.io/react/docs/typechecking-with-proptypes.html" target="_blank">documentación React</a> para más detalles).</p>

<p>PropTypes indicate the type of the prop(string, number, array, object, etc.), whether it is required (<code>isRequired</code>), and much more. (See the <a href="https://facebook.github.io/react/docs/typechecking-with-proptypes.html" target="_blank">React docs</a> for more details).</p>

<p className="it">Vamos a pasar por estos uno por uno.</p>

<p>Let's go through these one by one.</p>

<ol>
<li className="it"><code>inputType</code> acepta dos cadenas diferentes: <code>'text'</code> o <code>'number'</code>. Estas opciones determinan si un <code>&lt;input type="text" /&gt;</code> o un <code>&lt;input type="number" /&gt;</code> se renderizarán.</li>

<li><code>inputType</code> accepts two different strings:  <code>'text'</code> or <code>'number'</code>. These options determine whether a <code>&lt;input type="text" /&gt;</code> or an <code>&lt;input type="number" /&gt;</code> is rendered.  </li>
<li className="it"><code>title</code>: acepta una cadena que se renderizará en la etiqueta de la entrada.  </li>

<li><code>title</code>: accepts a string that will be rendered in the input's label.  </li>
<li className="it"><code>name</code>: el atributo del nombre para la entrada.  </li>

<li><code>name</code>: the name attribute for the input.  </li>

<li className="it"><code>controlFunc</code>: es la función transmitida desde el componente parent / contenedor. Esta función actualizará el state del componente parent / contenedor cada vez que se produzca un cambio porque está conectado al controlador <code>onChange</code> de React.  </li>

<li><code>controlFunc</code>: is the function passed down from the parent/container component. This function will update the parent/container component's state every time there is a change because it is attached to React's <code>onChange</code> handler.  </li>

<li className="it"><code>content</code>: el contenido de la entrada. Una entrada controlada sólo mostrará los datos pasados ​​en ella a través de props.  </li>

<li><code>content</code>: the content of the input. A controlled input will only display the data passed into it via props.  </li>

<li className="it"><code>placeholder</code>: una string que será el texto del input's placeholder.</li>

<li><code>placeholder</code>: a string that will be the input's placeholder text.</li>
</ol>

<p className="it">Puesto que no necesitamos ninguna lógica o state interno para nuestra entrada, puede ser un componente funcional puro. Los componentes funcionales puros se unen a una <code>const</code>. Aquí está todo el código para el <code>&lt;SingleInput /&gt;</code>. Todos los componentes del elemento de form en esta publicación son componentes funcionales puros.</p>

<p>Since we don't need any logic or internal state for our input, it can be a pure functional component. Pure functional components are attached to a <code>const</code>. Here is all the code for the <code>&lt;SingleInput /&gt;</code>. All of the form element components in this post are pure functional components.</p>

<pre className=" language-jsx line-numbers"><code className="language-jsx"><span className="token keyword">import</span> React <span className="token keyword">from</span> <span className="token string">'react'</span><span className="token punctuation">;</span><br></br>
<br></br>
<span className="token keyword">const</span> SingleInput <span className="token operator">=</span> <span className="token punctuation">(</span>props<span className="token punctuation">)</span> <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">(</span> <br></br> 
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>form-group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br></br>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>title<span className="token punctuation">&#125;</span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span><br></br>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span><br></br>
      <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>form-input<span className="token punctuation">"</span></span><br></br>
      <span className="token attr-name">name</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>name<span className="token punctuation">&#125;</span></span><br></br>
      <span className="token attr-name">type</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>inputType<span className="token punctuation">&#125;</span></span><br></br>
      <span className="token attr-name">value</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>content<span className="token punctuation">&#125;</span></span><br></br>
      <span className="token attr-name">onChange</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>controlFunc<span className="token punctuation">&#125;</span></span><br></br>
      <span className="token attr-name">placeholder</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>placeholder<span className="token punctuation">&#125;</span></span> <span className="token punctuation">/&gt;</span></span><br></br>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
<span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<br></br>
SingleInput<span className="token punctuation">.</span>propTypes <span className="token operator">=</span> <span className="token punctuation">&#123;</span>  <br></br>
  inputType<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span><span className="token function">oneOf</span><span className="token punctuation">(</span><span className="token punctuation">[</span><span className="token string">'text'</span><span className="token punctuation">,</span> <span className="token string">'number'</span><span className="token punctuation">]</span><span className="token punctuation">)</span><span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  title<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  name<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  controlFunc<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>func<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  content<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span><span className="token function">oneOfType</span><span className="token punctuation">(</span><span className="token punctuation">[</span><br></br>
    React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">,</span><br></br>
    React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>number<span className="token punctuation">,</span><br></br>
  <span className="token punctuation">]</span><span className="token punctuation">)</span><span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span>
  placeholder<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">,</span><br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">;</span><br></br>
<br></br>
<span className="token keyword">export</span> <span className="token keyword">default</span><br></br> SingleInput<span className="token punctuation">;</span>  <br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it">Y la función <code>handleFullNameChange</code> (pasada en el <code>controlFunc</code>prop) actualiza el state de <code>&lt;FormContainer /&gt;</code>.</p>

<p>And the <code>handleFullNameChange</code> function (passed into the <code>controlFunc</code> prop) updates the <code>&lt;FormContainer /&gt;</code>'s state. </p>

<pre className=" language-javascript line-numbers"><code className="language-javascript"><span className="token comment" spellcheck="true">// FormContainer.js</span><br></br>
<br></br>
<span className="token function">handleFullNameChange</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span>  <br></br>
  <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">setState</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span> ownerName<span className="token punctuation">:</span> e<span className="token punctuation">.</span>target<span className="token punctuation">.</span>value <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span className="token punctuation">&#125;</span><br></br>
<span className="token comment" spellcheck="true">// make sure to have:</span><br></br>
<span className="token comment" spellcheck="true">// this.handleFullNameChange = this.handleFullNameChange.bind(this);</span><br></br>
<span className="token comment" spellcheck="true">// in the constructor</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it">El state del nuevo contenedor es entonces devuelto a la vía <code>&lt;SingleInput /&gt;</code> del <code>content</code> prop.</p>

<p>The new container's state is then passed back into the <code>&lt;SingleInput /&gt;</code> via the <code>content</code> prop.</p>

<h3 id="select"><code>&lt;Select /&gt;</code></h3>

<p className="it">El componente select (es decir, una <strong>lista desplegable</strong>), toma los siguientes props:  </p>

<p>The select component (i.e. a <strong>dropdown</strong>), takes the following props:  </p>

<pre className=" language-javascript line-numbers"><code className="language-javascript">Select<span className="token punctuation">.</span>propTypes <span className="token operator">=</span> <span className="token punctuation">&#123;</span><br></br>  
  name<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  options<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>array<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  selectedOption<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">,</span><br></br>
  controlFunc<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>func<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  placeholder<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<ol>
<li className="it"><code>name</code>: una string que llenará el atributo <code>name</code> de nuestro elemento form.  </li>

<li><code>name</code>: a string that will populate the <code>name</code> attribute of our form element.  </li>
<li className="it"><code>options</code>: una array (de strings en nuestro caso) en la que cada elemento se convertirá en una opción utilizando <code>props.options.map()</code> en el método de renderizado del componente.  </li>

<li><code>options</code>: an array (of strings in our case) in which each item will become an option by using <code>props.options.map()</code> in the component's render method.  </li>
<li className="it"><code>selectedOption</code>: si estamos prepopulando el formulario con datos predeterminados o con datos que un usuario agregó en el pasado (por ejemplo, esto se utiliza cuando un usuario edita datos que ha enviado en una ocasión anterior).  </li>

<li><code>selectedOption</code>: if we are prepopulating the form with either default data, or with data a user added in the past (e.g. this is used when a user edits data they have submitted on a prior occasion).  </li>
<li className="it"><code>controlFunc</code>: es la función transmitida desde el componente parent / contenedor. Esta función actualizará el state del componente parent / contenedor cada vez que se produzca un cambio porque está conectado al controlador <code>onChange</code> de React.  </li>

<li><code>controlFunc</code>: is the function passed down from the parent/container component. This function will update the parent/container component's state every time there is an change because it is attached to React's <code>onChange</code> handler.  </li>
<li className="it"><code>placeholder</code>: una string que rellena la primera etiqueta <code>&lt;option&gt;</code> y actúa como texto de marcador de posición. Establecemos el valor de esta opción en una string vacía en el componente (véase la línea 10 a continuación).</li>

<li><code>placeholder</code>: a string that populates the first <code>&lt;option&gt;</code> tag, and acts as placeholder text. We set the value of this option to an empty string in the component (see line 10 below).</li>
</ol>

<pre className=" language-jsx line-numbers"><code className="language-jsx"><span className="token keyword">import</span> React <span className="token keyword">from</span> <span className="token string">'react'</span><span className="token punctuation">;</span>

<span className="token keyword">const</span> Select <span className="token operator">=</span> <span className="token punctuation">(</span>props<span className="token punctuation">)</span> <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">(</span> <br></br> 
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>form-group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br></br>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>select</span><br></br>
      <span className="token attr-name">name</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>name<span className="token punctuation">&#125;</span></span><br></br>
      <span className="token attr-name">value</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>selectedOption<span className="token punctuation">&#125;</span></span>
      <span className="token attr-name">onChange</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>controlFunc<span className="token punctuation">&#125;</span></span><br></br>
      <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>form-select<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br></br>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>option</span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span><span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>placeholder<span className="token punctuation">&#125;</span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>option</span><span className="token punctuation">&gt;</span></span><br></br>
      <span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>options<span className="token punctuation">.</span><span className="token function">map</span><span className="token punctuation">(</span>opt <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>
        <span className="token keyword">return</span> <span className="token punctuation">(</span>
          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>option</span><br></br>
            <span className="token attr-name">key</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>opt<span className="token punctuation">&#125;</span></span><br></br>
            <span className="token attr-name">value</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>opt<span className="token punctuation">&#125;</span></span><span className="token punctuation">&gt;</span></span><span className="token punctuation">&#123;</span>opt<span className="token punctuation">&#125;</span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>option</span><span className="token punctuation">&gt;</span></span>
        <span className="token punctuation">)</span><span className="token punctuation">;</span>
      <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">&#125;</span><br></br>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>select</span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span><br></br>
<span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<br></br>
Select<span className="token punctuation">.</span>propTypes <span className="token operator">=</span> <span className="token punctuation">&#123;</span><br></br>  
  name<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  options<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>array<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  selectedOption<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">,</span><br></br>
  controlFunc<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>func<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  placeholder<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">;</span><br></br>
<br></br>
<span className="token keyword">export</span> <span className="token keyword">default</span> Select<span className="token punctuation">;</span> <br></br> 
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span><br></br></code></pre>

<p className="it">Tenga en cuenta el atributo <code>key</code> en nuestras etiquetas de opción (línea 14). React requiere una clave única para cada elemento que se procesa a través de una operación de repetidor como nuestra función <code>.map()</code>. Dado que cada elemento de nuestra array de opciones es único, podemos usarlo como el prop <code>key</code>. Este <code>key</code> ayuda a React a realizar un seguimiento de los cambios del DOM. Su aplicación no se romperá si omite el atributo <code>key</code> en su función repeater/mapping (repetidor/asignación, pero tendrá advertencias en la consola del navegador y el rendimiento del renderizado se verá comprometido.</p>

<p>Note the <code>key</code> attribute in our option tags (line 14). React requires a unique key for every element that is rendered through a repeater operation like our <code>.map()</code> function. Since each element in our options array is unique, we can use it as the <code>key</code> prop. This <code>key</code> helps React keep track of DOM changes. Your app won't break if leave out the <code>key</code> attribute in your repeater/mapping function, but you'll have warnings in your browser console and rendering performance will be compromised.</p>

<p className="it">A continuación se muestra la handler function (que se pasa al prop <code>controlFun</code> desde <code>&lt;FormContainer /&gt;</code>) que controla nuestro select (<strong>reminder</strong>: el vive en <code>&lt;FormContainer /&gt;</code>).  </p>

<p>Below is the handler function (that is passed into the <code>controlFun</code> prop from <code>&lt;FormContainer /&gt;</code>) that controls our select (<em>reminder</em>: it lives in <code>&lt;FormContainer /&gt;</code>).  </p>

<pre className=" language-javascript line-numbers"><code className="language-javascript"><span className="token comment" spellcheck="true">// FormContainer.js</span>
<br></br>
<span className="token function">handleAgeRangeSelect</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span>  <br></br>
  <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">setState</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span> ownerAgeRangeSelection<span className="token punctuation">:</span> e<span className="token punctuation">.</span>target<span className="token punctuation">.</span>value <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span>
<span className="token punctuation">&#125;</span><br></br>
<span className="token comment" spellcheck="true">// make sure to have:</span><br></br>
<span className="token comment" spellcheck="true">// this.handleAgeRangeSelect = this.handleAgeRangeSelect.bind(this);</span><br></br>
<span className="token comment" spellcheck="true">// in the constructor</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span><br></br></code></pre>

<h3 id="checkboxorradiogroup"><code>&lt;CheckboxOrRadioGroup /&gt;</code></h3>

<p className="it">A diferencia de los otros componentes, el componente <code>&lt;CheckboxOrRadioGroup /&gt;</code> toma una array a través de sus props, mapas sobre la array (al igual que las opciones del componente anterior <code>&lt;Select /&gt;</code>) y procesa un conjunto de elementos de form, ya sea un conjunto de casillas de verificación o un conjunto o radios.</p>

<p>Unlike the other components, the <code>&lt;CheckboxOrRadioGroup /&gt;</code> component takes in an array through its props, maps over the array (just like the options of the <code>&lt;Select /&gt;</code> component above), and renders a set of form elements – either a set of checkboxes or a set or radios.</p>

<p className="it">Vamos a bucear en PropTypes para entender mejor al <code>&lt;CheckboxOrRadioGroup /&gt;</code>.</p>

<p>Let's dive into the PropTypes to better understand <code>&lt;CheckboxOrRadioGroup /&gt;</code>.</p>

<pre className=" language-javascript line-numbers"><code className="language-javascript">CheckboxGroup<span className="token punctuation">.</span>propTypes <span className="token operator">=</span> <span className="token punctuation">&#123;</span> <br></br> 
  title<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  type<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span><span className="token function">oneOf</span><span className="token punctuation">(</span><span className="token punctuation">[</span><span className="token string">'checkbox'</span><span className="token punctuation">,</span> <span className="token string">'radio'</span><span className="token punctuation">]</span><span className="token punctuation">)</span><span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  setName<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  options<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>array<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  selectedOptions<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>array<span className="token punctuation">,</span><br></br>
  controlFunc<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>func<span className="token punctuation">.</span>isRequired<br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span><br></br></code></pre>

<ol>
<li className="it"><code>title</code>: una string que rellena la etiqueta del conjunto de checkboxes/radios  </li>

<li><code>title</code>: a string that populates the label for the set of checkboxes/radios  </li>
<li className="it"><code>type</code>: toma una de las dos opciones posibles, <code>'checkbox'</code>o <code>'radio'</code>, y hace entradas del tipo indicado.  </li>

<li><code>type</code>: takes one of two possible options, <code>'checkbox'</code> or <code>'radio'</code>, and renders inputs of the indicated type.  </li>
<li className="it"><code>setName</code>: una string que rellena los atributos <code>name</code> de cada casilla de checkbox/radio.  </li>

<li><code>setName</code>: a string that will populate the <code>name</code> attributes of each checkbox/radio.  </li>
<li className="it"><code>options</code>: una array, en nuestro caso una array de strings, que determina la etiqueta y el valor de cada casilla de checkbox/radio. Por ejemplo, <code>['dog', 'cat', 'pony']</code> renderizará tres casillas de checkbox/radio, una para cada elemento de la array.  </li>

<li><code>options</code>: an array, in our case an array of strings, that determines the label and value for each checkbox/radio. E.g., <code>['dog', 'cat', 'pony']</code> will render three checkboxes/radios, one for each item in the array.  </li>
<li className="it"><code>selectedOptions</code>: una array, en nuestro caso una array de strings, de opciones pre-seleccionadas. En el ejemplo utilizado en el #4 anterior, si este contenido <code>selectedOptions</code> <code>'dog'</code> y, a continuación <code>'pony'</code>, estas dos opciones se renderizarían como marcadas y <code>'cat'</code> se desmarcaría. Esta es la array que se enviará como las opciones del usuario.  </li>

<li><code>selectedOptions</code>: an array, in our case an array of strings, of pre-selected options. In the example used in #4 above, if <code>selectedOptions</code> contained <code>'dog'</code> and <code>'pony'</code> then these two options would render as checked and <code>'cat'</code> would render unchecked. This is the array that will be submitted as the user's choices.  </li>
<li className="it"><code>controlFunc</code>: la función que se encarga de agregar y quitar strings utilizado como prop <code>selectedOptions</code>.</li>

<li><code>controlFunc</code>: the function that handles adding and removing strings from the used as <code>selectedOptions</code> prop.</li>
</ol>

<p className="it">Este es el componente más interesante de nuestro form. Aquí está el código:</p>

<p>This is the most interesting component in our form. Here's the code:</p>

<pre className=" language-jsx line-numbers"><code className="language-jsx"><span className="token keyword">import</span> React <span className="token keyword">from</span> <span className="token string">'react'</span><span className="token punctuation">;</span>

<span className="token keyword">const</span> CheckboxOrRadioGroup <span className="token operator">=</span> <span className="token punctuation">(</span>props<span className="token punctuation">)</span> <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">(</span> <br></br> 
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span><br></br>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>title<span className="token punctuation">&#125;</span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span><br></br>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>checkbox-group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br></br>
      <span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>options<span className="token punctuation">.</span><span className="token function">map</span><span className="token punctuation">(</span>opt <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span><br></br>
        <span className="token keyword">return</span> <span className="token punctuation">(</span>
          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">key</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>opt<span className="token punctuation">&#125;</span></span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>form-label</span> <span className="token attr-name">capitalize"</span><span className="token punctuation">&gt;</span></span>
            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span><br></br>
              <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>form-checkbox<span className="token punctuation">"</span></span><br></br>
              <span className="token attr-name">name</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>setName<span className="token punctuation">&#125;</span></span><br></br>
              <span className="token attr-name">onChange</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>controlFunc<span className="token punctuation">&#125;</span></span><br></br>
              <span className="token attr-name">value</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>opt<span className="token punctuation">&#125;</span></span><br></br>
              <span className="token attr-name">checked</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span> props<span className="token punctuation">.</span>selectedOptions<span className="token punctuation">.</span><span className="token function">indexOf</span><span className="token punctuation">(</span>opt<span className="token punctuation">)</span> <span className="token operator">&gt;</span> <span className="token operator">-</span><span className="token number">1</span> <span className="token punctuation">&#125;</span></span><br></br>
              <span className="token attr-name">type</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>type<span className="token punctuation">&#125;</span></span> <span className="token punctuation">/&gt;</span></span> <span className="token punctuation">&#123;</span>opt<span className="token punctuation">&#125;</span><br></br>
          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span><br></br>
        <span className="token punctuation">)</span><span className="token punctuation">;</span>
      <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">&#125;</span><br></br>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span><br></br>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span><br></br>
<span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<br></br>
CheckboxOrRadioGroup<span className="token punctuation">.</span>propTypes <span className="token operator">=</span> <span className="token punctuation">&#123;</span> <br></br> 
  title<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  type<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span><span className="token function">oneOf</span><span className="token punctuation">(</span><span className="token punctuation">[</span><span className="token string">'checkbox'</span><span className="token punctuation">,</span> <span className="token string">'radio'</span><span className="token punctuation">]</span><span className="token punctuation">)</span><span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  setName<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  options<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>array<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  selectedOptions<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>array<span className="token punctuation">,</span><br></br>
  controlFunc<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>func<span className="token punctuation">.</span>isRequired<br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">;</span><br></br>
<br></br>
<span className="token keyword">export</span> <span className="token keyword">default</span> <br></br>CheckboxOrRadioGroup<span className="token punctuation">;</span><br></br>  
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span><br></br></code></pre>

<p className="it">La lógica que determina si se checkea radio/checkbox, se encuentra en la línea: <code>checked=&#123; props.selectedOptions.indexOf(option) &gt; -1 &#125;</code>.</p>

<p>The logic that determines if a radio/checkbox is checked, is found in the line: <code>checked=&#123; props.selectedOptions.indexOf(option) &gt; -1 &#125;</code>. </p>

<p className="it">El atributo de entrada <code>checked</code> toma un booleano para determinar si la entrada debe renderizarse tal como está marcada. Generamos este booleano comprobando si el valor de la entrada es un elemento de la array <code>props.selectedOptions</code>. <code>myArray.indexOf(item)</code> devuelve el índice del elemento en una array. Si el elemento NO está en la array, se devuelve <code>-1</code>. Así, tenemos <code>&gt; -1</code>.</p>

<p>The input attribute <code>checked</code> takes a Boolean to determine if the input should render as checked. We generate this Boolean by checking to see if the value of the input is an element in the <code>props.selectedOptions</code> array. <code>myArray.indexOf(item)</code> returns the index of the item in an array. If the item is NOT in the array, it returns <code>-1</code>. Thus, we have <code>&gt; -1</code>. </p>

<p className="it">Tenga en cuenta que <code>0</code> es un número de índice legítimo, por lo que necesita el código <code>&gt; -1</code> o será buggy; sin él, el primer elemento de la array <code>selectedOptions</code> - con un índice de <code>0</code>- nunca se renderizará como se verifica, porque <code>0</code> es un valor false.</p>

<p>Keep in mind that <code>0</code> is a legitimate index number, so you need the <code>&gt; -1</code> or your code will be buggy; without it, the first item in the <code>selectedOptions</code> array – with an index of <code>0</code> – will never render as checked, because <code>0</code> is a falsey value.</p>

<p className="it">La handler function para este componente es también más interesante que las otras.</p>

<p>The handler function for this component is also more interesting that the others.</p>

<pre className=" language-javascript line-numbers"><code className="language-javascript"><span className="token function">handlePetSelection</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
<br></br>
  <span className="token keyword">const</span> newSelection <span className="token operator">=</span> e<span className="token punctuation">.</span>target<span className="token punctuation">.</span>value<span className="token punctuation">;</span><br></br>
  <span className="token keyword">let</span> newSelectionArray<span className="token punctuation">;</span><br></br>
<br></br>
  <span className="token keyword">if</span><span className="token punctuation">(</span><span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>selectedPets<span className="token punctuation">.</span><span className="token function">indexOf</span><span className="token punctuation">(</span><br></br>newSelection<span className="token punctuation">)</span> <span className="token operator">&gt;</span> <span className="token operator">-</span><span className="token number">1</span><span className="token punctuation">)</span><br></br> <span className="token punctuation">&#123;</span><br></br>
    newSelectionArray <span className="token operator">=</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>selectedPets<span className="token punctuation">.</span><span className="token function">filter</span><br></br><span className="token punctuation">(</span>s <span className="token operator">=</span><span className="token operator">&gt;</span> s <span className="token operator">!==</span> newSelection<span className="token punctuation">)</span><br></br>
  <span className="token punctuation">&#125;</span> <span className="token keyword">else</span> <span className="token punctuation">&#123;</span><br></br>
    newSelectionArray <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token operator">...</span><span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>selectedPets<span className="token punctuation">,</span> newSelection<span className="token punctuation">]</span><span className="token punctuation">;</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
<br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">setState</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span> selectedPets<span className="token punctuation">:</span> newSelectionArray <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span className="token punctuation">&#125;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span><br></br></code></pre>

<p className="it">Al igual que con todas nuestras handler function, el objeto de evento se pasa de modo que su valor puede ser extraído. Adjuntamos este valor a la constante <code>newSelection</code>. A continuación, declaramos la variable <code>newSelectionArray</code> cerca de la parte superior de la función. Es una variable <code>let</code> en lugar de una <code>const</code>porque se asignará dentro de uno de los bloques <code>if/else</code>. Lo declaramos fuera de estos bloques por lo que es en el ámbito exterior de la función y es accesible a todos los bloques dentro.</p>

<p>As with all of our handler functions, the event object is passed in so its value can be extracted. We attached this value to the constant <code>newSelection</code>. We then declare the <code>newSelectionArray</code> variable near the top of the function. It is a <code>let</code> variable rather than a <code>const</code> because it will be assigned within one of the <code>if/else</code> blocks. We declare it outside of these blocks so it is in the outer scope of the function and is accessible to all the blocks within.</p>

<p className="it">Esta función tiene que manejar dos posibilidades.</p>

<p>This function has to handle two possibilities.</p>

<ol>
<li className="it">Si el valor de la entrada <strong>NO está</strong> en la array <code>selectedOptions</code>, debe agregarse.  </li>

<li>If the value of the input <strong>IS NOT</strong> in the <code>selectedOptions</code> array, it needs to be added.  </li>
<li className="it">Si el valor de la entrada <strong>IS</strong> en la array <code>selectedOptions</code>, debe ser eliminado.</li>

<li>If the value of the input <strong>IS</strong> in the <code>selectedOptions</code> array, it needs to be removed.</li>
</ol>

<p className="it"><strong>Agregando (líneas 8 - 10):</strong> Para agregar un nuevo valor a la array de selecciones, creamos una nueva array desestructurando la array original (indicada por los tres puntos <code>...</code> delante de la array) y añadiendo el nuevo valor al final <code>newSelectionArray = [...this.state.selectedPets, newSelection];</code>.</p>

<p><strong>Adding (lines 8 - 10):</strong> To add a new value to the array of selections, we create a new array by destructuring the original array (indicated by the three dots <code>...</code> in front of the array) and adding the new value to the end <code>newSelectionArray = [...this.state.selectedPets, newSelection];</code>. </p>

<p className="it"><u>Tenga en cuenta que la array original no se ha mutado con un método similar <code>.push()</code>, sino que se crea una nueva array</u>. Esta práctica de crear nuevos objetos y arrays en lugar de mutar los existentes es otra buena práctica en React. Esto permite a los desarrolladores realizar un seguimiento más fácil del cambio de state y permite que las bibliotecas de administración de state de terceros, como <a href="http://redux.js.org/docs/introduction/" target="_blank">Redux,</a> realicen comprobaciones superficiales de tipos de datos de alto rendimiento y no de rendimiento que dificultan la comprobación profunda.</p>

<p>Notice, the original array is not mutated with a method like <code>.push()</code>, but, rather, a new array is created. This practice of creating new objects and arrays rather than mutating existing ones is another best practice in React. This allows developers to more easily keep track of state change, and allows third party state management libraries like <a href="http://redux.js.org/docs/introduction/" target="_blank">Redux</a> to do highly performant shallow checking of data types rather than performance hindering deep checking.</p>

<p className="it"><strong>Removing (líneas 6 - 8):</strong> El bloque <code>if</code> comprueba si la selección está en la array por medio del truco <code>.indexOf()</code> utilizado anteriormente. Si la selección ya está en la array, se elimina mediante el método de array de JavaScript <code>.filter()</code>. Este método devuelve una <strong>nueva</strong> array <u>(recuerde evitar la mutación en React!)</u> Que contiene todos los elementos que cumplen la condición de filtro.</p>

<p><strong>Removing (lines 6 - 8):</strong> The <code>if</code> block checks to see if the selection is in the array by means of the <code>.indexOf()</code> trick used above. If the selection is already in the array, it is removed using the JavaScript array method <code>.filter()</code>. This method returns a <em>new</em> array (remember to avoid mutating in React!) containing all items that meet the filter condition.</p>

<pre className=" language-javascript line-numbers"><code className="language-javascript">newSelectionArray <span className="token operator">=</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>selectedPets<span className="token punctuation">.</span><span className="token function">filter</span><br></br><span className="token punctuation">(</span>s <span className="token operator">=</span><span className="token operator">&gt;</span> s <span className="token operator">!==</span> newSelection<span className="token punctuation">)</span>  <br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span></span><br></br></code></pre>

<p className="it">En este caso, todas las selecciones se están devolviendo <em>excepto</em> para el pasado en la función.</p>

<p>In this case, all selections are being returned <em>except</em> for the one passed into the function.</p>

<h3 id="textarea"><code>&lt;TextArea /&gt;</code></h3>

<p className="it">El componente <code>&lt;TextArea /&gt;</code> es muy similar a los componentes cubiertos ya. Sus props deben ser familiares por ahora, con la excepción de <code>resize</code> y <code>rows</code>.  </p>

<p>The <code>&lt;TextArea /&gt;</code> component is very similar to the components covered already. Its props should be familiar by now, with the exception of <code>resize</code> and <code>rows</code>.  </p>

<pre className=" language-javascript line-numbers"><code className="language-javascript">TextArea<span className="token punctuation">.</span>propTypes <span className="token operator">=</span> <span className="token punctuation">&#123;</span>  
  title<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  rows<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>number<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  name<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  content<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  resize<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>bool<span className="token punctuation">,</span><br></br>
  placeholder<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">,</span><br></br>
  controlFunc<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>func<span className="token punctuation">.</span>isRequired<br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span><br></br></code></pre>

<ol>
<li className="it"><code>title</code>: acepta una string que se renderizará en la etiqueta del textarea.  </li>

<li><code>title</code>: accepts a string that will be rendered in the textarea's label.  </li>
<li className="it"><code>rows</code>: acepta un número entero que determina el número de filas que será la textarea.  </li>

<li><code>rows</code>: accepts an integer that determines how many rows high the textarea will be.  </li>
<li className="it"><code>name</code>: el atributo de nombre de la textarea.  </li>

<li><code>name</code>: the name attribute for the textarea.  </li>
<li className="it"><code>content</code>: el contenido del textarea. Una entrada controlada sólo mostrará los datos que se pasan a través de props.  </li>

<li><code>content</code>: the content of the textarea. A controlled input will only display the data being passed into it via props.  </li>
<li className="it"><code>resize</code>: acepta un booleano que determina si la textarea será redimensionable.  </li>

<li><code>resize</code>: accepts a boolean that determines if the textarea will be resizable.  </li>
<li className="it"><code>placeholder</code>: una string que será el placeholder text de la textarea.  </li>

<li><code>placeholder</code>: a string that will be the textarea's placeholder text.  </li>
<li className="it"><code>controlFunc</code>: es la función transmitida desde el componente parent / contenedor. Esta función actualizará el state del componente parent / contenedor cada vez que se produzca un cambio porque está conectado al controlador <code>onChange</code> de React.</li>

<li><code>controlFunc</code>: is the function passed down from the parent/container component. This function will update the parent/container component's state every time there is an change because it is attached to React's <code>onChange</code> handler.</li>
</ol>

<p className="it">El código completo para <code>&lt;TextArea /&gt;</code>:</p>

<p>The complete code for the <code>&lt;TextArea /&gt;</code>:</p>

<pre className=" language-jsx line-numbers"><code className="language-jsx"><span className="token keyword">import</span> React <span className="token keyword">from</span> <span className="token string">'react'</span><span className="token punctuation">;</span>

<span className="token keyword">const</span> TextArea <span className="token operator">=</span> <span className="token punctuation">(</span>props<span className="token punctuation">)</span> <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">(</span>  <br></br>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>form-group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><br></br>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>form-label<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>title<span className="token punctuation">&#125;</span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span><br></br>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>textarea</span><br></br>
      <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>form-input<span className="token punctuation">"</span></span><br></br>
      <span className="token attr-name">style</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>resize <span className="token operator">?</span> <span className="token keyword">null</span> <span className="token punctuation">:</span> <span className="token punctuation">&#123;</span>resize<span className="token punctuation">:</span> <span className="token string">'none'</span><span className="token punctuation">&#125;</span><span className="token punctuation">&#125;</span></span><br></br>
      <span className="token attr-name">name</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>name<span className="token punctuation">&#125;</span></span><br></br>
      <span className="token attr-name">rows</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>rows<span className="token punctuation">&#125;</span></span><br></br>
      <span className="token attr-name">value</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>content<span className="token punctuation">&#125;</span></span><br></br>
      <span className="token attr-name">onChange</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>controlFunc<span className="token punctuation">&#125;</span></span><br></br>
      <span className="token attr-name">placeholder</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span>props<span className="token punctuation">.</span>placeholder<span className="token punctuation">&#125;</span></span> <span className="token punctuation">/&gt;</span></span><br></br>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span><br></br>
<span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<br></br>
TextArea<span className="token punctuation">.</span>propTypes <span className="token operator">=</span> <span className="token punctuation">&#123;</span><br></br>  
  title<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  rows<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>number<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  name<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  content<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">.</span>isRequired<span className="token punctuation">,</span><br></br>
  resize<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>bool<span className="token punctuation">,</span><br></br>
  placeholder<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>string<span className="token punctuation">,</span><br></br>
  controlFunc<span className="token punctuation">:</span> React<span className="token punctuation">.</span>PropTypes<span className="token punctuation">.</span>func<span className="token punctuation">.</span>isRequired<br></br>
<span className="token punctuation">&#125;</span><span className="token punctuation">;</span><br></br>
<br></br>
<span className="token keyword">export</span> <span className="token keyword">default</span> TextArea<span className="token punctuation">;</span> <br></br> 
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span><br></br></code></pre>

<p className="it">La función <code>&lt;TextAreas /&gt;</code> de control funciona de la misma manera que la <code>&lt;SingleInput /&gt;</code>. Consulte los detalles de <code>&lt;SingleInput /&gt;</code>.</p>

<p>The <code>&lt;TextAreas /&gt;</code>'s control function operates in the same manner as the <code>&lt;SingleInput /&gt;</code>. Please refer to the <code>&lt;SingleInput /&gt;</code> for details.</p>

<h4 id="formactions">Form Actions</h4>

<p className="it">Hay dos funciones que operan en el form como un todo, <code>handleClearForm</code> y <code>handleFormSubmit</code>.</p>

<p>There are two functions that operate on the form as a whole, <code>handleClearForm</code> and <code>handleFormSubmit</code>. </p>

<h5 id="1handleclearform">1. <code>handleClearForm</code></h5>

<p className="it">Dado que estamos utilizando <strong>un flujo de datos unidireccional en</strong> todo nuestro form, borrar las opciones del formulario es una brisa. Cada valor de cada elemento es controlado por el state de la <code>&lt;FormContainer /&gt;</code>. El state del contenedor se pasa a los componentes secundarios a través de props. Los valores que se muestran en los componentes del form cambian sólo cuando cambia el state de <code>&lt;FormContainer /&gt;</code>.</p>

<p>Since we are using <em>unidirectional data flow</em> throughout our form, clearing the form's options is a breeze. Each value of each element is controlled by the state of the <code>&lt;FormContainer /&gt;</code>. The container's state is passed into the child components via props. The values being displayed by the form components change only when the <code>&lt;FormContainer /&gt;</code>'s state changes. </p>

<p className="it">Borrar los datos mostrados en los componentes secundarios del formulario es tan fácil como establecer el state del contenedor para vaciar arrays y string vacías (y <code>0</code> en el caso de nuestra entrada de números).</p>

<p>Clearing the data displayed in the form's child components is as easy as setting the container's state to empty arrays and empty strings (and <code>0</code> in the case of our number input).</p>

<pre className=" language-javascript line-numbers"><code className="language-javascript"><span className="token function">handleClearForm</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span>  
  e<span className="token punctuation">.</span><span className="token function">preventDefault</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">setState</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span><br></br>
    ownerName<span className="token punctuation">:</span> <span className="token string">''</span><span className="token punctuation">,</span>
    selectedPets<span className="token punctuation">:</span> <span className="token punctuation">[</span><span className="token punctuation">]</span><span className="token punctuation">,</span><br></br>
    ownerAgeRangeSelection<span className="token punctuation">:</span> <span className="token string">''</span><span className="token punctuation">,</span><br></br>
    siblingSelection<span className="token punctuation">:</span> <span className="token punctuation">[</span><span className="token punctuation">]</span><span className="token punctuation">,</span><br></br>
    currentPetCount<span className="token punctuation">:</span> <span className="token number">0</span><span className="token punctuation">,</span><br></br>
    description<span className="token punctuation">:</span> <span className="token string">''</span><br></br>
  <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span className="token punctuation">&#125;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span><br></br></code></pre>

<p className="it">Voilà! <code>e.preventDefault()</code> impide que la página se recargue y la función <code>setState()</code> borra el formulario.  </p>

<p>Voilà! <code>e.preventDefault()</code> prevents the page from reloading, and the <code>setState()</code> function clears the form.  </p>

<h5 id="2handleformsubmit">2. <code>handleFormSubmit</code></h5>

<p className="it">Para enviar los datos de este formulario, construimos un objeto a partir de las propiedades de state apropiadas. A continuación, utilice una biblioteca o técnica AJAX para enviar estos datos a una API (que no se incluye en esta publicación).</p>

<p>In order to submit this form's data, we construct an object out of the appropriate state properties. Then use an AJAX library or technique to send this data to an API (which is not covered in this post).</p>

<pre className=" language-javascript line-numbers"><code className="language-javascript"><span className="token function">handleFormSubmit</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span>  
  e<span className="token punctuation">.</span><span className="token function">preventDefault</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<br></br>
  <span className="token keyword">const</span> formPayload <span className="token operator">=</span> <span className="token punctuation">&#123;</span><br></br>
    ownerName<span className="token punctuation">:</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>ownerName<span className="token punctuation">,</span><br></br>
    selectedPets<span className="token punctuation">:</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>selectedPets<span className="token punctuation">,</span><br></br>
    ownerAgeRangeSelection<span className="token punctuation">:</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>ownerAgeRangeSelection<span className="token punctuation">,</span><br></br>
    siblingSelection<span className="token punctuation">:</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>siblingSelection<span className="token punctuation">,</span><br></br>
    currentPetCount<span className="token punctuation">:</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>currentPetCount<span className="token punctuation">,</span><br></br>
    description<span className="token punctuation">:</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>description
  <span className="token punctuation">&#125;</span><span className="token punctuation">;</span><br></br>
<br></br>
  console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'Send this in a POST request:'</span><span className="token punctuation">,</span> formPayload<span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">handleClearForm</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span><span className="token punctuation">;</span>
<span className="token punctuation">&#125;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span><br></br></code></pre>

<p className="it">Observe que el formulario se borra después de enviar, invocando <code>this.handleClearForm(e)</code>.  </p>

<p>Notice that the form is cleared after submitting, by invoking <code>this.handleClearForm(e)</code>.  </p>

<h4 id="validation">Validation</h4>

<p className="it">Los componentes de form controlados son una gran base para la validación personalizada. Supongamos que desea excluir la letra 'e' del componente <code>&lt;TextArea /&gt;</code>.  </p>

<p>Controlled form components are a great foundation for custom validation. Suppose you would like to exclude the letter 'e' from the <code>&lt;TextArea /&gt;</code> component.  </p>

<pre className=" language-javascript line-numbers"><code className="language-javascript"><span className="token function">handleDescriptionChange</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>  
  <span className="token keyword">const</span> textArray <span className="token operator">=</span> e<span className="token punctuation">.</span>target<span className="token punctuation">.</span>value<span className="token punctuation">.</span><span className="token function">split</span><span className="token punctuation">(</span><span className="token string">''</span><span className="token punctuation">)</span><span className="token punctuation">.</span><span className="token function">filter</span><span className="token punctuation">(</span>x <span className="token operator">=</span><span className="token operator">&gt;</span> x <span className="token operator">!==</span> <span className="token string">'e'</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<br></br>
  console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'string split into array of letters'</span><span className="token punctuation">,</span>textArray<span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<br></br>
  <span className="token keyword">const</span> filteredText <span className="token operator">=</span> textArray<span className="token punctuation">.</span><span className="token function">join</span><span className="token punctuation">(</span><span className="token string">''</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">setState</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span> description<span className="token punctuation">:</span> filteredText <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<span className="token punctuation">&#125;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

<p className="it">El <code>textArray</code> anterior se crea dividiendo la string <code>e.target.value</code> en una array de letras individuales. A continuación, se elimina la letra "e" (o cualquier carácter que desee excluir). La array de letras se une de nuevo, y la nueva cadena se establece en state de componente. ¡No está mal!</p>

<p>The <code>textArray</code> above is created by splitting the string <code>e.target.value</code> into an array of individual letters. Then the letter 'e' (or whatever character you would like to exclude) is filtered out. The array of letters is joined again, and the new string is set to component state. Not to bad!</p>

<p className="it">Este código de arriba está en <a href="https://github.com/lorenseanstewart/react-controlled-form-components" target="_blank"> el repo para esta publicación</a>, pero comentado, así que siéntase libre de ajustarlo para satisfacer sus propios propósitos.</p>

<p>This code above is in <a href="https://github.com/lorenseanstewart/react-controlled-form-components" target="_blank">the repo for this post</a>, but commented out, so feel free to tweak it meet your own purposes.</p>

<h3 id="formcontainer"><code>&lt;FormContainer /&gt;</code></h3>

<p className="it">Como se prometió, aquí está el código completo para el componente <code>&lt;FormContainer /&gt;</code>:</p>

<p>As promised, here is the complete code for the <code>&lt;FormContainer /&gt;</code> component:</p>

<pre className=" language-jsx line-numbers"><code className="language-jsx"><span className="token keyword">import</span> React<span className="token punctuation">,</span> <span className="token punctuation">&#123;</span>Component<span className="token punctuation">&#125;</span> <span className="token keyword">from</span> <span className="token string">'react'</span><span className="token punctuation">;</span> <br></br> 
<span className="token keyword">import</span> CheckboxOrRadioGroup <span className="token keyword">from</span> <span className="token string">'../components/CheckboxOrRadioGroup'</span><span className="token punctuation">;</span>  
<span className="token keyword">import</span> SingleInput <span className="token keyword">from</span> <span className="token string">'../components/SingleInput'</span><span className="token punctuation">;</span>  
<span className="token keyword">import</span> TextArea <span className="token keyword">from</span> <span className="token string">'../components/TextArea'</span><span className="token punctuation">;</span>  
<span className="token keyword">import</span> Select <span className="token keyword">from</span> <span className="token string">'../components/Select'</span><span className="token punctuation">;</span>

<span className="token keyword">class</span> <span className="token class-name">FormContainer</span> <span className="token keyword">extends</span> <span className="token class-name">Component</span> <span className="token punctuation">&#123;</span>  
  <span className="token function">constructor</span><span className="token punctuation">(</span>props<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span>
    <span className="token keyword">super</span><span className="token punctuation">(</span>props<span className="token punctuation">)</span><span className="token punctuation">;</span>
    <span className="token keyword">this</span><span className="token punctuation">.</span>state <span className="token operator">=</span> <span className="token punctuation">&#123;</span>
      ownerName<span className="token punctuation">:</span> <span className="token string">''</span><span className="token punctuation">,</span>
      petSelections<span className="token punctuation">:</span> <span className="token punctuation">[</span><span className="token punctuation">]</span><span className="token punctuation">,</span>
      selectedPets<span className="token punctuation">:</span> <span className="token punctuation">[</span><span className="token punctuation">]</span><span className="token punctuation">,</span><br></br>
      ageOptions<span className="token punctuation">:</span> <span className="token punctuation">[</span><span className="token punctuation">]</span><span className="token punctuation">,</span><br></br>
      ownerAgeRangeSelection<span className="token punctuation">:</span> <span className="token string">''</span><span className="token punctuation">,</span>
      siblingOptions<span className="token punctuation">:</span> <span className="token punctuation">[</span><span className="token punctuation">]</span><span className="token punctuation">,</span><br></br>
      siblingSelection<span className="token punctuation">:</span> <span className="token punctuation">[</span><span className="token punctuation">]</span><span className="token punctuation">,</span><br></br>
      currentPetCount<span className="token punctuation">:</span> <span className="token number">0</span><span className="token punctuation">,</span>
      description<span className="token punctuation">:</span> <span className="token string">''</span><br></br>
    <span className="token punctuation">&#125;</span><span className="token punctuation">;</span>
    <span className="token keyword">this</span><span className="token punctuation">.</span>handleFormSubmit <span className="token operator">=</span> <span className="token keyword">this</span><span className="token punctuation">.</span>handleFormSubmit<span className="token punctuation">.</span><span className="token function">bind</span><span className="token punctuation">(</span><span className="token keyword">this</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span>handleClearForm <span className="token operator">=</span> <span className="token keyword">this</span><span className="token punctuation">.</span>handleClearForm<span className="token punctuation">.</span><span className="token function">bind</span><span className="token punctuation">(</span><span className="token keyword">this</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span>handleFullNameChange <span className="token operator">=</span> <span className="token keyword">this</span><span className="token punctuation">.</span>handleFullNameChange<span className="token punctuation">.</span><span className="token function">bind</span><span className="token punctuation">(</span><span className="token keyword">this</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span>handleCurrentPetCountChange <span className="token operator">=</span> <span className="token keyword">this</span><span className="token punctuation">.</span>handleCurrentPetCountChange<span className="token punctuation">.</span><span className="token function">bind</span><span className="token punctuation">(</span><span className="token keyword">this</span><span className="token punctuation">)</span><span className="token punctuation">;</span>
    <span className="token keyword">this</span><span className="token punctuation">.</span>handleAgeRangeSelect <span className="token operator">=</span> <span className="token keyword">this</span><span className="token punctuation">.</span>handleAgeRangeSelect<span className="token punctuation">.</span><span className="token function">bind</span><span className="token punctuation">(</span><span className="token keyword">this</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span>handlePetSelection <span className="token operator">=</span> <span className="token keyword">this</span><span className="token punctuation">.</span>handlePetSelection<span className="token punctuation">.</span><span className="token function">bind</span><span className="token punctuation">(</span><span className="token keyword">this</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span>handleSiblingsSelection <span className="token operator">=</span> <span className="token keyword">this</span><span className="token punctuation">.</span>handleSiblingsSelection<span className="token punctuation">.</span><span className="token function">bind</span><span className="token punctuation">(</span><span className="token keyword">this</span><span className="token punctuation">)</span><span className="token punctuation">;</span>
    <span className="token keyword">this</span><span className="token punctuation">.</span>handleDescriptionChange <span className="token operator">=</span> <span className="token keyword">this</span><span className="token punctuation">.</span>handleDescriptionChange<span className="token punctuation">.</span><span className="token function">bind</span><span className="token punctuation">(</span><span className="token keyword">this</span><span className="token punctuation">)</span><span className="token punctuation">;</span>
  <span className="token punctuation">&#125;</span><br></br>
  <span className="token function">componentDidMount</span><span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
    <span className="token comment" spellcheck="true">// simulating a call to retrieve user data</span><br></br>
    <span className="token comment" spellcheck="true">// (create-react-app comes with fetch polyfills!)</span><br></br>
    <span className="token function">fetch</span><span className="token punctuation">(</span><span className="token string">'./fake_db.json'</span><span className="token punctuation">)</span>
      <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span>res <span className="token operator">=</span><span className="token operator">&gt;</span> res<span className="token punctuation">.</span><span className="token function">json</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">)</span>
      <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span>data <span className="token operator">=</span><span className="token operator">&gt;</span> <span className="token punctuation">&#123;</span>
        <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">setState</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span><br></br>
          ownerName<span className="token punctuation">:</span> data<span className="token punctuation">.</span>ownerName<span className="token punctuation">,</span>
          petSelections<span className="token punctuation">:</span> data<span className="token punctuation">.</span>petSelections<span className="token punctuation">,</span>
          selectedPets<span className="token punctuation">:</span> data<span className="token punctuation">.</span>selectedPets<span className="token punctuation">,</span>
          ageOptions<span className="token punctuation">:</span> data<span className="token punctuation">.</span>ageOptions<span className="token punctuation">,</span>
          ownerAgeRangeSelection<span className="token punctuation">:</span> data<span className="token punctuation">.</span>ownerAgeRangeSelection<span className="token punctuation">,</span><br></br>
          siblingOptions<span className="token punctuation">:</span> data<span className="token punctuation">.</span>siblingOptions<span className="token punctuation">,</span>
          siblingSelection<span className="token punctuation">:</span> data<span className="token punctuation">.</span>siblingSelection<span className="token punctuation">,</span>
          currentPetCount<span className="token punctuation">:</span> data<span className="token punctuation">.</span>currentPetCount<span className="token punctuation">,</span>
          description<span className="token punctuation">:</span> data<span className="token punctuation">.</span>description
        <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span>
      <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
  <span className="token function">handleFullNameChange</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">setState</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span> ownerName<span className="token punctuation">:</span> e<span className="token punctuation">.</span>target<span className="token punctuation">.</span>value <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
  <span className="token function">handleCurrentPetCountChange</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">setState</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span> currentPetCount<span className="token punctuation">:</span> e<span className="token punctuation">.</span>target<span className="token punctuation">.</span>value <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
  <span className="token function">handleAgeRangeSelect</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span>
    <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">setState</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span> ownerAgeRangeSelection<span className="token punctuation">:</span> e<span className="token punctuation">.</span>target<span className="token punctuation">.</span>value <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
  <span className="token function">handlePetSelection</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
    <span className="token keyword">const</span> newSelection <span className="token operator">=</span> e<span className="token punctuation">.</span>target<span className="token punctuation">.</span>value<span className="token punctuation">;</span><br></br>
    <span className="token keyword">let</span> newSelectionArray<span className="token punctuation">;</span><br></br>
    <span className="token keyword">if</span><span className="token punctuation">(</span><span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>selectedPets<span className="token punctuation">.</span><span className="token function">indexOf</span><span className="token punctuation">(</span>newSelection<span className="token punctuation">)</span> <span className="token operator">&gt;</span> <span className="token operator">-</span><span className="token number">1</span><span className="token punctuation">)</span> <span className="token punctuation">&#123;</span>
      newSelectionArray <span className="token operator">=</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>selectedPets<span className="token punctuation">.</span><span className="token function">filter</span><span className="token punctuation">(</span>s <span className="token operator">=</span><span className="token operator">&gt;</span> s <span className="token operator">!==</span> newSelection<span className="token punctuation">)</span><br></br>
    <span className="token punctuation">&#125;</span> <span className="token keyword">else</span> <span className="token punctuation">&#123;</span><br></br>
      newSelectionArray <span className="token operator">=</span> <span className="token punctuation">[</span><span className="token operator">...</span><span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>selectedPets<span className="token punctuation">,</span> newSelection<span className="token punctuation">]</span><span className="token punctuation">;</span><br></br>
    <span className="token punctuation">&#125;</span><br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">setState</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span> selectedPets<span className="token punctuation">:</span> newSelectionArray <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
  <span className="token function">handleSiblingsSelection</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">setState</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span> siblingSelection<span className="token punctuation">:</span> <span className="token punctuation">[</span>e<span className="token punctuation">.</span>target<span className="token punctuation">.</span>value<span className="token punctuation">]</span> <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
  <span className="token function">handleDescriptionChange</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">setState</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span> description<span className="token punctuation">:</span> e<span className="token punctuation">.</span>target<span className="token punctuation">.</span>value <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
  <span className="token function">handleClearForm</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
    e<span className="token punctuation">.</span><span className="token function">preventDefault</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">setState</span><span className="token punctuation">(</span><span className="token punctuation">&#123;</span><br></br>
      ownerName<span className="token punctuation">:</span> <span className="token string">''</span><span className="token punctuation">,</span><br></br>
      selectedPets<span className="token punctuation">:</span> <span className="token punctuation">[</span><span className="token punctuation">]</span><span className="token punctuation">,</span><br></br>
      ownerAgeRangeSelection<span className="token punctuation">:</span> <span className="token string">''</span><span className="token punctuation">,</span><br></br>
      siblingSelection<span className="token punctuation">:</span> <span className="token punctuation">[</span><span className="token punctuation">]</span><span className="token punctuation">,</span><br></br>
      currentPetCount<span className="token punctuation">:</span> <span className="token number">0</span><span className="token punctuation">,</span><br></br>
      description<span className="token punctuation">:</span> <span className="token string">''</span><br></br>
    <span className="token punctuation">&#125;</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
  <span className="token punctuation">&#125;</span><br></br>
  <span className="token function">handleFormSubmit</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span> <span className="token punctuation">&#123;</span><br></br>
    e<span className="token punctuation">.</span><span className="token function">preventDefault</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">;</span><br></br>
<br></br>
    <span className="token keyword">const</span> formPayload <span className="token operator">=</span> <span className="token punctuation">&#123;</span><br></br>
      ownerName<span className="token punctuation">:</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>ownerName<span className="token punctuation">,</span><br></br>
      selectedPets<span className="token punctuation">:</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>selectedPets<span className="token punctuation">,</span><br></br>
      ownerAgeRangeSelection<span className="token punctuation">:</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>ownerAgeRangeSelection<span className="token punctuation">,</span><br></br>
      siblingSelection<span className="token punctuation">:</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>siblingSelection<span className="token punctuation">,</span><br></br>
      currentPetCount<span className="token punctuation">:</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>currentPetCount<span className="token punctuation">,</span><br></br>
      description<span className="token punctuation">:</span> <span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>description<br></br>
    <span className="token punctuation">&#125;</span><span className="token punctuation">;</span><br></br>
<br></br>
    console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'Send this in a POST request:'</span><span className="token punctuation">,</span> formPayload<span className="token punctuation">)</span><br></br>
    <span className="token keyword">this</span><span className="token punctuation">.</span><span className="token function">handleClearForm</span><span className="token punctuation">(</span>e<span className="token punctuation">)</span><span className="token punctuation">;</span>
  <span className="token punctuation">&#125;</span><br></br>
  <span className="token function">render</span><span className="token punctuation">(</span><span className="token punctuation">)</span> <span className="token punctuation">&#123;</span>
    <span className="token keyword">return</span> <span className="token punctuation">(</span>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>form</span> <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>container<span className="token punctuation">"</span></span><br></br> <span className="token attr-name">onSubmit</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>handleFormSubmit<span className="token punctuation">&#125;</span></span><span className="token punctuation">&gt;</span></span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span><span className="token punctuation">&gt;</span></span>Pet Adoption Form<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>SingleInput</span><br></br>
          <span className="token attr-name">inputType</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'text'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">title</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'Full name'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">name</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'name'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">controlFunc</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>handleFullNameChange<span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">content</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>ownerName<span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">placeholder</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'Type first and last name here'</span><span className="token punctuation">&#125;</span></span> <span className="token punctuation">/&gt;</span></span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>Select</span><br></br>
          <span className="token attr-name">name</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'ageRange'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">placeholder</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'Choose your age range'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">controlFunc</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>handleAgeRangeSelect<span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">options</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>ageOptions<span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">selectedOption</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>ownerAgeRangeSelection<span className="token punctuation">&#125;</span></span> <span className="token punctuation">/&gt;</span></span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>CheckboxOrRadioGroup</span><br></br>
          <span className="token attr-name">title</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'Which kinds of pets would you like to adopt?'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">setName</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'pets'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">type</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'checkbox'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">controlFunc</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>handlePetSelection<span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">options</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>petSelections<span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">selectedOptions</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>selectedPets<span className="token punctuation">&#125;</span></span> <span className="token punctuation">/&gt;</span></span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>CheckboxOrRadioGroup</span><br></br>
          <span className="token attr-name">title</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'Are you willing to adopt more than one pet if we have siblings for adoption?'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">setName</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'siblings'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">controlFunc</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>handleSiblingsSelection<span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">type</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'radio'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">options</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>siblingOptions<span className="token punctuation">&#125;</span></span>
          <span className="token attr-name">selectedOptions</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>siblingSelection<span className="token punctuation">&#125;</span></span> <span className="token punctuation">/&gt;</span></span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>SingleInput</span><br></br>
          <span className="token attr-name">inputType</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'number'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">title</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'How many pets do you currently own?'</span><span className="token punctuation">&#125;</span></span>
          <span className="token attr-name">name</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'currentPetCount'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">controlFunc</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>handleCurrentPetCountChange<span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">content</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>currentPetCount<span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">placeholder</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'Enter number of current pets'</span><span className="token punctuation">&#125;</span></span> <span className="token punctuation">/&gt;</span></span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>TextArea</span><br></br>
          <span className="token attr-name">title</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'If you currently own pets, please write their names, breeds, and an outline of their personalities.'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">rows</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token number">5</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">resize</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token boolean">false</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">content</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>state<span className="token punctuation">.</span>description<span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">name</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'currentPetInfo'</span><span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">controlFunc</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>handleDescriptionChange<span className="token punctuation">&#125;</span></span><br></br>
          <span className="token attr-name">placeholder</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token string">'Please be thorough in your descriptions'</span><span className="token punctuation">&#125;</span></span> <span className="token punctuation">/&gt;</span></span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span><br></br>
          <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>submit<span className="token punctuation">"</span></span><br></br>
          <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn</span> <span className="token attr-name">btn-primary</span> <span className="token attr-name">float-right"</span><br></br>
          <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>Submit<span className="token punctuation">"</span>/</span><span className="token punctuation">&gt;</span></span><br></br>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span><br></br>
          <span className="token attr-name">className</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn</span> <span className="token attr-name">btn-link</span> <span className="token attr-name">float-left"</span><br></br>
          <span className="token attr-name">onClick</span><span className="token script language-javascript"><span className="token punctuation">=</span><span className="token punctuation">&#123;</span><span className="token keyword">this</span><span className="token punctuation">.</span>handleClearForm<span className="token punctuation">&#125;</span></span><span className="token punctuation">&gt;</span></span>Clear form<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span><br></br>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>form</span><span className="token punctuation">&gt;</span></span><br></br>
    <span className="token punctuation">)</span><span className="token punctuation">;</span>
  <span className="token punctuation">&#125;</span><br></br>
<span className="token punctuation">&#125;</span><br></br>
<br></br>
<span className="token keyword">export</span> <span className="token keyword">default</span> <br></br>FormContainer<span className="token punctuation">;</span><br></br>
<span aria-hidden="true" className="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span><br></br></code></pre>

<h4 id="conclusion">Conclusion</h4>

<p className="it">Es cierto que la construcción con React de componente form controlados requiere una cierta repetición (por ejemplo, las funciones del controlador en el contenedor), pero merece la pena el esfuerzo inicial por el control que tiene sobre su aplicación y la transparencia del cambio de state . Su código será mantenible, y muy performant.</p>

<p>Admittedly, building controlled form components with React requires some repetition (e.g, the handler functions in the container), but the control you have over your app and the transparency of state change is well worth the up-front effort. Your code will be maintainable, and very performant.</p>
<div className="TREEHOUSE">
<p className="it">Ahora hemos visto cómo agregar estado a nuestros componentes.</p>
<p className="it">Los componentes de estado son potentes, pero también aportan mucha complejidad a nuestras aplicaciones.</p>
<p className="it">Es importante pensar cuidadosamente en dónde reside el estado en nuestras aplicaciones.</p>
<p className="it">Si tenemos una docena de componentes cada uno manteniendo su propio estado, puede llegar a ser muy engorroso construir y mantener nuestras aplicaciones.</p>

<p className="it">Una idea importante para entender es que hay diferentes tipos de estado.</p>

<p className="it">Hay dos tipos principales de estado que considero al diseñar una aplicación de reaccionar.</p>

<p className="it">Estado de la aplicación y estado del componente.</p>

<p className="it">El estado de aplicación es el estado principal que normalmente pensamos.</p>

<p className="it">Por lo general, los datos que nuestra aplicación está diseñada para mostrar y manipular.</p>
<p className="it">1</p>
<p className="it">En nuestra aplicación de marcador, el estado de la aplicación incluye cosas como la lista de jugadores y sus puntuaciones.</p>

<p className="it">El estado del componente local es el estado en el que un componente puede confiar para funcionar, pero no pensamos que sea fundamental para nuestra aplicación.</p>

<p className="it">El estado de los componentes no suele ser compartido o visible fuera del componente y es simplemente el estado que se requiere para que un componente haga su trabajo.</p>

<p className="it">Veremos algunos ejemplos específicos de los componentes locales en breve, pero los datos en los que hemos estado trabajando realmente serían considerados como un estado de aplicación.</p>

<p className="it">Un principio de diseño del estado de la aplicación es que debe ser administrado la aplicación como sea posible.</p>

<p className="it">Esto tiene que ver con cómo los datos fluyen naturalmente a través de una aplicación de reacción.</p>
<p className="it">Los datos fluyen naturalmente a través de nuestro árbol de aplicaciones.</p>
<p className="it">Desde el componente de nivel superior, hasta los componentes más pequeños que componen los más grandes.</p>

<p className="it">Pasamos datos alrededor de las propiedades de uso nuestro componente de aplicación le dirá a nuestro jugador componente todo sobre el jugador que representa pasando las propiedades.</p>

<p className="it">Es importante entender que nuestro componente de aplicación no mantiene las instancias de los componentes del reproductor se almacenan en algún tipo de variable.</p>

<p className="it">Nunca creó realmente las instancias reales del jugador ellos mismos, más bien se acaba de describir que deben existir y deben tener estas propiedades.</p>

<p className="it">Esto significa para componentes como nuestra aplicación no puede llamar fácilmente a los métodos de los niños para actualizar los datos.</p>

<p className="it">En su lugar, sólo volverían a representar a los nuevos niños con propiedades actualizadas.</p>

<p className="it">También los niños no saben acerca de los componentes padres que los contienen.</p>

<p className="it">Un componente sólo sabe de sí mismo, qué propiedades se pasan a él, y los niños que el componente puede representar.</p>

<p className="it">Este es el resultado de nuestro modelo declarativo de programación.</p>

<p className="it">Podemos hacer que los datos fluyan fácilmente de padres a hijos usando propiedades.</p>

<p className="it">Un componente puede utilizar las propiedades que se le pasan, para determinar los datos a transmitir a sus propios hijos.</p>

<p className="it">Esto se llama flujo de datos unidireccional.</p>

<p className="it">Si bien puede parecer restrictivo y un poco extraño al trabajar con él, nos proporciona la capacidad de razonar sobre nuestras aplicaciones mucho más fácilmente.</p>

<p className="it">Esto se debe a que los datos de nuestro componente provienen de un lugar, su matriz.</p>

<p className="it">Y no una mezcolanza de varias fuentes de datos, a lo largo de la aplicación.</p>

<p className="it">Así que los datos fluyen hacia abajo y si los datos cambian en la parte superior, pasará en cascada a través de nuestro árbol DOM virtual, actualizando cada componente.</p>

<p className="it">Pero, ¿qué hacemos cuando queremos hacer cambios? Y una aplicación de reacción pura usará típicamente propiedades que son callback funciones.</p>

<p className="it">Dado que el elemento hijo no tiene forma de comunicarse directamente con su padre, podemos divinar ciertos eventos que manipularán los datos e implementarlos como funciones de devolución de llamada.</p>

<p className="it">Cuando un niño quiere indicar que el estado de la aplicación debe cambiar, ejecutará la función de devolución de llamada y el padre sabrá qué hacer con esos datos.</p>

<p className="it">A menudo, las funciones de devolución de llamada pueden activar otra función de devolución de llamada para su propio padre.</p>

<p className="it">Una y otra vez, a través de la aplicación.</p>

<p className="it">Actualmente, nuestra aplicación tiene estado en un par de lugares.</p>

<p className="it">A continuación reestructuraremos nuestro estado y flujo de datos a ser mucho más unidireccional.</p>
</div>
</div></div></div>
</div>
)