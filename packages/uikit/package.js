Package.describe({
  name: "jerimiah797:uikit",
  version: "0.0.3",
  summary: "This package integrates UIKit v2.26.3 into Meteor with the base style.",
  git: "https://github.com/lukeacl/uikit",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.2.1");
  api.use("jquery", "client");
  var path = Npm.require("path");
  var cssStyle = "";
  if (cssStyle != "") {
    cssStyle += ".";
  }
  var assetPath = path.join("uikit-2.26.3");
  var cssAssetPath = path.join(assetPath, "css");
  var jsAssetPath = path.join(assetPath, "js");
  api.addFiles([
    path.join(assetPath, "css", "uikit." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "accordion." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "autocomplete." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "datepicker." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "dotnav." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "form-advanced." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "form-file." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "form-password." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "form-select." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "htmleditor." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "nestable." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "notify." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "placeholder." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "progress." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "search." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "slidenav." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "slider." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "slideshow." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "sortable." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "sticky." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "tooltip." + cssStyle + "min.css"),
    path.join(cssAssetPath, "components", "upload." + cssStyle + "min.css"),
    path.join(assetPath, "js", "uikit.min.js"),
    path.join(jsAssetPath, "core", "alert.min.js"),
    path.join(jsAssetPath, "core", "button.min.js"),
    path.join(jsAssetPath, "core", "core.min.js"),
    path.join(jsAssetPath, "core", "cover.min.js"),
    path.join(jsAssetPath, "core", "dropdown.min.js"),
    path.join(jsAssetPath, "core", "grid.min.js"),
    path.join(jsAssetPath, "core", "modal.min.js"),
    path.join(jsAssetPath, "core", "nav.min.js"),
    path.join(jsAssetPath, "core", "offcanvas.min.js"),
    path.join(jsAssetPath, "core", "scrollspy.min.js"),
    path.join(jsAssetPath, "core", "smooth-scroll.min.js"),
    path.join(jsAssetPath, "core", "switcher.min.js"),
    path.join(jsAssetPath, "core", "tab.min.js"),
    path.join(jsAssetPath, "core", "toggle.min.js"),
    path.join(jsAssetPath, "core", "touch.min.js"),
    path.join(jsAssetPath, "core", "utility.min.js"),
    path.join(jsAssetPath, "components", "accordion.min.js"),
    path.join(jsAssetPath, "components", "autocomplete.min.js"),
    path.join(jsAssetPath, "components", "datepicker.min.js"),
    path.join(jsAssetPath, "components", "form-password.min.js"),
    path.join(jsAssetPath, "components", "form-select.min.js"),
    path.join(jsAssetPath, "components", "grid-parallax.min.js"),
    path.join(jsAssetPath, "components", "grid.min.js"),
    path.join(jsAssetPath, "components", "htmleditor.min.js"),
    path.join(jsAssetPath, "components", "lightbox.min.js"),
    path.join(jsAssetPath, "components", "nestable.min.js"),
    path.join(jsAssetPath, "components", "notify.min.js"),
    path.join(jsAssetPath, "components", "pagination.min.js"),
    path.join(jsAssetPath, "components", "parallax.min.js"),
    path.join(jsAssetPath, "components", "search.min.js"),
    path.join(jsAssetPath, "components", "slider.min.js"),
    path.join(jsAssetPath, "components", "slideset.min.js"),
    path.join(jsAssetPath, "components", "slideshow.min.js"),
    path.join(jsAssetPath, "components", "slideshow-fx.min.js"),
    path.join(jsAssetPath, "components", "sortable.min.js"),
    path.join(jsAssetPath, "components", "sticky.min.js"),
    path.join(jsAssetPath, "components", "timepicker.min.js"),
    path.join(jsAssetPath, "components", "tooltip.min.js"),
    path.join(jsAssetPath, "components", "upload.min.js"),
  ], "client");
  api.addAssets([
    path.join(assetPath, "fonts", "fontawesome-webfont.ttf"),
    path.join(assetPath, "fonts", "fontawesome-webfont.woff"),
    path.join(assetPath, "fonts", "fontawesome-webfont.woff2"),
    path.join(assetPath, "fonts", "FontAwesome.otf")
  ], "client");
});

Package.onTest(function(api) {
  api.use("tinytest");
  api.use("jerimiah797:uikit");
  api.addFiles("package-test.js");
});
