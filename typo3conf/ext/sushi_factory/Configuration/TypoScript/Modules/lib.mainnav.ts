page.10.marks.UNAME = TEXT
page.10.marks.UNAME.data = TSFE:fe_user|user|username

lib.mainnav = HMENU
lib.mainnav {

    1 = TMENU
    1 {
        expAll = 1
        NO = 1
        NO {
            wrapItemAndSub = <li>|</li>
            stdWrap.htmlSpecialChars = 1
            ATagTitle.field = description // subtitle // title
        }

        IFSUB = 1
        IFSUB < .NO
        IFSUB {
            wrapItemAndSub = <li class="menu-item dropdown">|</li>
            linkWrap = | <span class="caret"></span>
            ATagBeforeWrap = 1
            ATagParams = class="dropdown-toggle" data-toggle="dropdown"
        }
    }

    1.wrap = <ul class="nav navbar-nav navbar-right dropdown">|</ul>

    2 < .1
    2.wrap = <ul class="dropdown-menu">|</ul>
    2 {
        expAll = 1
        NO = 1
        NO {
            wrapItemAndSub = <li class="menu-item">|</li>
            stdWrap.htmlSpecialChars = 1
            ATagTitle.field = description // subtitle // title
        }

        IFSUB = 1
        IFSUB < .NO
        IFSUB {
            wrapItemAndSub = <li class="menu-item dropdown dropdown-submenu">|</li>
            ATagBeforeWrap = 1
            ATagParams = class="dropdown-toggle" data-toggle="dropdown"

        }
    }

    3 < .2
    4 < .2
}