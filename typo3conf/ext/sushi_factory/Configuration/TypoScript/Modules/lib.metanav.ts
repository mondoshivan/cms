lib.metanav = HMENU
lib.metanav {
    wrap = <ul class="metanav float-right">|</ul>
    special = directory
    special.value = 18

    1 = TMENU
    1 {
        expAll = 1
        NO = 1
        NO {
            allWrap = <li>|</li>
            stdWrap.htmlSpecialChars = 1
            ATagTitle.field = description // subtitle // title

        }

        CUR = 1
        CUR < .NO
        CUR.allWrap = <li><strong>|</strong></li>
    }
}