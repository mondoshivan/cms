lib.languagemenu = HMENU
lib.languagemenu {

    special = language
    # ID's der Sprachen
    special.value = 0,1,2
    wrap = <ul class="nav navbar-nav navbar-right">|</ul>

    1 = TMENU
    1 {
        NO = 1
        # Gleiche Reihenfolge wie ID's oben
        NO.stdWrap.override = DE || EN || FR
        NO.allWrap = <li>|</li>

        # Active
        ACT < .NO
        ACT.allWrap = <li class="active">|</li>

        USERDEF1 < .NO
        USERDEF1 {
            # Zeigt den Link, aber inaktiv
            # doNotLinkIt = 1
            # allWrap = <span class="notranslation">|</span>

            # zeigt den Link gar nicht
            doNotShowLink = 1
        }
    }

}