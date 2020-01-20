
#lib.sub = CONTENT
#lib.sub {
#    table = pages
#    select {
#        orderBy = title
#        pidInList = this
#        recursive = 0
#        selectFields = uid, title
#    }
#
#    renderObj = TEXT
#    renderObj {
#        field = title
#        required = 1
#        typolink.parameter.field = uid
#        wrap = <li>|</li>
#    }
#    wrap = <ul>|</ul>
#}

lib.sub = RECORDS
lib.sub {
    tables = tt_content

    # Content ID über Content Element im Backend
    source = 47
    dontCheckPid = 1
}