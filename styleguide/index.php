<!DOCTYPE html>
<!--[if IE 8]><html class="ie8" lang="en"><![endif]-->
<!--[if IE 9]><html class="ie9" lang="en"><![endif]-->
<!--[if gt IE 9]><html class="gtie9" lang="en"><![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->

<head>
  <!-- TITLE -->
  <title>Project Styleguide</title>

  <!-- GENERAL META -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Author">
  <meta name="Description" content="Description">

  <!-- RESPONSIVE -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"> -->

  <!-- FACEBOOK -->
  <!-- Facebook sharing. http://developers.facebook.com/docs/opengraph/ -->
  <meta property="og:type" content="Page Name">
  <meta property="og:title" content="">
  <meta property="og:image" content="./assets/images/icons/poop.png">
  <meta property="og:site_name" content="Site Name">
  <meta property="og:url" content="http://domain.com">
  <meta property="og:description" content="">

  <!-- TWITTER -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@twitter_handle">
  <meta name="twitter:creator" content="@twitter_handle">
  <meta name="twitter:title" content="Site Title">
  <meta name="twitter:description" content="Description">
  <meta name="twitter:image:src" content="/assets/images/icons/poop.png">

  <!-- Custom CSS -->
  <!-- You want to have your CSS as the very first asset that the HTML requests. - Harry Roberts -->
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">
  <link rel="stylesheet" type="text/css" href="../assets/css/vendor.css" />
  <link rel="stylesheet" type="text/css" href="../assets/css/styleguide.css" />
  <link rel="stylesheet" type="text/css" href="../assets/css/custom.css" />

  <!-- ICONS -->
  <link rel="apple-touch-icon" href="./assets/images/icons/apple-touch-icon.png">
  <link rel="shortcut icon" href="./assets/images/icons/poop.png" type="image/x-icon">
  <link rel="icon" href="./assets/images/icons/poop.png" type="image/x-icon">
</head>
<body class="styleguide">
  <!-- Body -->

  <header class="styleguide-header">
    <h1 class="styleguide-title">Project Styleguide</h1>
  </header>
  
  <nav class="styleguide-nav">
    <ul>
      <li><a href="#settings-design-elements">Settings/Design Elements</a></li>
      <li><a href="#layouts">Layouts</a></li>
      <li><a href="#display-patterns-components">Display Patterns/Components</a></li>
    </ul>
  </nav>

  <main class="styleguide-main">
    <?php include "settings-design-elements.php" ?>

    <?php include "layout.php" ?>

    <?php include "display-patterns-components.php" ?>
  </main>

  <footer class="styleguide-footer">
    I'm the footer
  </footer>


  <!-- External Javscript -->
  <!-- Highlight JS Reference: https://highlightjs.org/usage/ -->
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
  <script src="../assets/js/custom.js"></script>
  <script>

    function setupCodePreview() {

      var entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
      };

      function escapeHtml (string) {
        return String(string).replace(/[&<>"'`=\/]/g, function (s) {
          return entityMap[s];
        });
      }

      var components = document.querySelectorAll('.styleguide-component');
      var codeBlocks = document.querySelectorAll('.styleguide-code-preview code');


      // Create an array for each component's code
      componentCode = [];

      components.forEach(function(component) {
        var htmlString = escapeHtml(component.innerHTML);

        htmlString = htmlString.trim();
        htmlString = htmlString.replace(/\s+\n\s*/,"\n");

        componentCode.push(htmlString);
      });

      // If the number of components matches the number of code blocks available
      // populate the code blocks
      if(componentCode.length === codeBlocks.length) {
        codeBlocks.forEach(function(block, index) {
          var code = componentCode[index];

          block.innerHTML = code;
          hljs.highlightBlock(block);
        });
      } else {
        console.log('Missing Code blocks or components');
      }
    }

    setupCodePreview();


  </script>
  <!-- Analytics Snippet -->
  <script></script>

  <noscript>
    <!-- What you wish to be rendered if a user has javascript disabled on your site. -->
  </noscript>
</body>
</html>
