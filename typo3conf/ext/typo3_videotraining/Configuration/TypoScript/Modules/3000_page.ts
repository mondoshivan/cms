config.contentObjectExceptionHandler = 0

page = PAGE
page.meta {
    X-UA-Compatible = IE=edge
    X-UA-Compatible.httpEquivalent = 1
    viewport = width=device-width, initial-scale=1, shrink-to-fit=no

    description.field = description
    description.ifEmpty = Das ist die Standardbeschreibung

    author.field = author
    author.ifEmpty = Der Standardauthor

    keywords.field = keywords
    keywords.ifEmpty = keyword1, keyword2
}

page.shortcutIcon = EXT:typo3_videotraining/Resources/Public/Icons/favicon.ico

page.includeCSS {
    10 = EXT:typo3_videotraining/Resources/Public/Css/bootstrap-flex.min.css
    20 = EXT:typo3_videotraining/Resources/Public/Css/sm-core-css.css
    30 = EXT:typo3_videotraining/Resources/Public/Css/sm-simple.css
    40 = EXT:typo3_videotraining/Resources/Public/Css/smartmenu.css
    50 = EXT:typo3_videotraining/Resources/Public/Css/mystyles.css
}

page.includeJSFooterlibs {
    10 = EXT:typo3_videotraining/Resources/Public/JavaScript/jquery-3.1.1.min.js
    10.disableCompression = 1

    20 = https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js
    20.external = 1
    20.disableCompression = 1

    30 = EXT:typo3_videotraining/Resources/Public/JavaScript/bootstrap.min.js
    30.disableCompression = 1

    40 = EXT:typo3_videotraining/Resources/Public/JavaScript/jquery.smartmenus.min.js
    40.disableCompression = 1
}

page.includeJSFooter {
    50 = EXT:typo3_videotraining/Resources/Public/JavaScript/custom.js
}

page.10 = FLUIDTEMPLATE
page.10 {
    layoutRootPath = EXT:typo3_videotraining/Resources/Private/Layouts/
    partialRootPath = EXT:typo3_videotraining/Resources/Private/Partials/
    file = EXT:typo3_videotraining/Resources/Private/Templates/Default.html
}