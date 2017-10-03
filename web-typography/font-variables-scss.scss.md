// Weights
$hairline-weight: 100;
$thin-weight:     200;
$light-weight:    300;
$normal-weight:   400;
$medium-weight:   500;
$semibold-weight: 600;
$bold-weight:     700;
$xbold-weight:    800;
$black-weight:    900;

// Synonyms
$regular-weight:    $normal-weight;
$book-weight:       $light-weight;
$xlight-weight:     $hairline-weight;
$ultralight-weight: $hairline-weight;
$heavy-weight:      $xbold-weight;

// Include fonts
// Order matters: normal, bold, italic, bold+italic

@font-face {
  font-family: "MyFont";
  font-weight: $normal-weight;
  font-style: normal;
  src: url("#{$fonts-path}/MyFont-Regular.eot");
  // and the rest of the src urls...
}

@font-face {
  font-family: "MyFont";
  font-weight: $medium-weight;
  font-style: normal;
  src: url("#{$fonts-path}/MyFont-Medium.eot");
  // and the rest of the src urls...
}

@font-face {
  font-family: "MyFont";
  font-weight: $bold-weight;
  font-style: normal;
  src: url("#{$fonts-path}/MyFont-Bold.eot");
  // and the rest of the src urls...
}


@font-face {
  font-family: "MyFont";
  font-weight: $normal-weight;
  font-style: italic;
  src: url("#{$fonts-path}/MyFont-Italic.eot");
  // and the rest of the src urls...
}

@font-face {
  font-family: "MyFont";
  font-weight: $medium-weight;
  font-style: italic;
  src: url("#{$fonts-path}/MyFont-Medium-Italic.eot");
  // and the rest of the src urls...
}

@font-face {
  font-family: "MyFont";
  font-weight: $bold-weight;
  font-style: italic;
  src: url("#{$fonts-path}/MyFont-Bold-Italic.eot");
  // and the rest of the src urls...
}

// Use 'em

body {
  font-family: "MyFont", sans-serif;
}

p {
  font-weight: $normal-weight;
}

em {
  font-style: italic;
}

strong {
  font-weight: $bold-weight;
}
