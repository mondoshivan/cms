[usergroup = *]
    lib.login=TEXT
    lib.login{
        value=Logout
        typolink.parameter={$rootPageID}
        typolink.additionalParams=&logintype=logout
        typolink.wrap = <ul class="nav navbar-nav navbar-right"><li>|</li></ul>
    }
[else]
    lib.login=TEXT
    lib.login{
        value=Login
        typolink.parameter={$loginPageID}
        typolink.additionalParams = &logintype=logout
        typolink.wrap = <ul class="nav navbar-nav navbar-right"><li>|</li></ul>
    }

[global]