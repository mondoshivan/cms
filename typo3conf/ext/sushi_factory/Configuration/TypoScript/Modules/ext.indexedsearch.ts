# Pfade der Partials anpassen,
# damit nicht auf die System Extension referenziert wird,
# sondern auf die Partials in der eigenen Extension
plugin.tx_indexedsearch.view.partialRootPaths.100 = EXT:sushi_factory/Resources/Private/indexed_search/Partials/
plugin.tx_indexedsearch.settings {
    targetPid = {$searchPageID}
    rootPidList = {$rootPageID}
}

lib.search = RECORDS
lib.search {
    tables = tt_content

    # Content ID über Content Element im Backend
    source = {$searchContentID}
    dontCheckPid = 1
}

[globalVar = TSFE:id={$searchPageID}]
    lib.search = GP:print
[global]