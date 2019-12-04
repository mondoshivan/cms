temp.jumbotronbg = IMG_RESOURCE
temp.jumbotronbg {
    file {
        import.data = levelmedia:-1, slide
        treatIdAsReference = 1
        import.listNum = rand
    }
}

# random number kollidiert nicht mit anderen Extensions
page.headerData.2394843939 < temp.jumbotronbg
page.headerData.2394843939.stdWrap.wrap = <style>.jumbotron {background: url(|) top left no-repeat; background-size: cover;} </style>