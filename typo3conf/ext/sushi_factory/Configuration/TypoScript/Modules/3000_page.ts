config.contentObjectExceptionHandler = 0

page = PAGE
page.meta {
    X-UA-Compatible = IE=edge
    X-UA-Compatible.httpEquivalent = 1
    viewport = width=device-width, initial-scale=1, shrink-to-fit=no

    description.field = description
    description.ifEmpty = Be inspired by our overwhelming receipe selection

    author.field = author
    author.ifEmpty = Oliver Schmidt

    keywords.field = keywords
    keywords.ifEmpty = cookbook, sushi
}

page.shortcutIcon = EXT:sushi_factory/Resources/Public/icons/favicon.ico

page.includeCSS {
    10 = EXT:sushi_factory/Resources/Public/css/main.css
}

page.includeJSFooterlibs {
    10 = EXT:sushi_factory/Resources/Public/javascript/jquery-3.1.1.min.js
    10.disableCompression = 1
}

page.includeJSFooter {
    20 = EXT:sushi_factory/Resources/Public/javascript/main.js
}

page.10 = FLUIDTEMPLATE
page.10 {
    layoutRootPath = EXT:sushi_factory/Resources/Private/Layouts/
    partialRootPath = EXT:sushi_factory/Resources/Private/Partials/
    file = EXT:sushi_factory/Resources/Private/Templates/Default.html
}