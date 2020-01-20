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
    10 = https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css
    20 = EXT:sushi_factory/Resources/Public/css/main.css
}

page.includeJSFooterlibs {
    10 = https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
    10.disableCompression = 1

    20 = https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js
    20.disableCompression = 1
}

page.includeJSFooter {
    20 = EXT:sushi_factory/Resources/Public/javascript/main.js
}

page.10 = FLUIDTEMPLATE
page.10 {
    layoutRootPath = EXT:sushi_factory/Resources/Private/Layouts/
    partialRootPath = EXT:sushi_factory/Resources/Private/Partials/
    file = EXT:sushi_factory/Resources/Private/Templates/Default.html

    variables {

        sub_pages = CONTENT
        sub_pages {
            table = pages
            select.pidInList.field = uid
        }

        content0 = CONTENT
        content0 {
            table = tt_content
            select.where = colPos = 0
            select.orderBy = sorting
        }

        content1 < .content0
        content1.select.where = colPos = 1

        content2 < .content0
        content2.select.where = colPos = 2

        content3 < .content0
        content3.select.where = colPos = 3

        content4 < .content0
        content4.select.where = colPos = 4

        content5 < .content0
        content5.select.where = colPos = 5

        content6 < .content0
        content6.select.where = colPos = 6

        content7 < .content0
        content7.select.where = colPos = 7

        backendLayout = CASE
        backendLayout {
            key.data = pagelayout

            pagets__rezept = TEXT
            pagets__rezept.value = Rezept

            pagets__typselektion_4spalten = TEXT
            pagets__typselektion_4spalten.value = TypSelektion4Spalten

            pagets__typselektion_3spalten = TEXT
            pagets__typselektion_3spalten.value = TypSelektion3Spalten

            pagets__rezeptliste = TEXT
            pagets__rezeptliste.value = RezeptListe

            pagets__1spalte = TEXT
            pagets__1spalte.value = 1Spalte
        }

        siteTitle = TEXT
        siteTitle {
            value = {$siteTitle}
            stdWrap.typolink.parameter = t3://page?uid={$rootPageID}
            stdWrap.typolink.title = Startseite
            stdWrap.typolink.ATagParams = class="navbar-brand"
        }
    }
}
