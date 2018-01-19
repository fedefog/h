<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>We Are Hakuna | A Creative Studio Building Cool Stuff for People.</title>

    <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!-- Style -->
    <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"> 
    <link href="css/vendors/grid.css" rel="stylesheet">
    <link href="css/vendors/flexslider.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">

    <!--[if lte IE 8]>
        <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/grids-responsive-old-ie-min.css">
    <![endif]-->
    <!--[if gt IE 8]><!-->
        <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/grids-responsive-min.css">
    <!--<![endif]-->
  </head>

  <body class="page-<?php echo $page_name; ?>">

    <header class="cd-auto-hide-header">
      <div class="container">
        <div id="haku-logo" class="transition">
          <?php if ($page_name=="home") { ?>
          <a href="index" title="Hakuna"><img class="logo-home" src="images/hakuna-logo.png" title="Hakuna - Creative design & development studio." alt="Hakuna Logo"></a>
          <?php } else { ?>
          <a href="index" title="Hakuna"><img class="logo-section" width="40" height="49" src="images/hakuna-logo-section.png" title="Hakuna - Creative design & development studio." alt="Hakuna Logo"></a>
          <?php }; ?>
        </div> 
        <a href="#menu" id="menuLink" class="menu-link visible-xs">
            <span></span>
        </a>
        <nav class="pure-menu pure-menu-horizontal hidden-xs">
            <ul class="pure-menu-list">
                <li class="pure-menu-item"><a href="index" title="" class="pure-menu-link transition <?php if ($page_name=="home") echo 'pure-button-active'; ?>">Home</a></li>
                <li class="pure-menu-item"><a href="works" title="" class="pure-menu-link transition <?php if ($page_name=="works") echo 'pure-button-active'; ?>">Works</a></li>
                <li class="pure-menu-item"><a href="services" title="" class="pure-menu-link transition <?php if ($page_name=="services") echo 'pure-button-active'; ?>">Services</a></li>
                <li class="pure-menu-item"><a href="studio" title="" class="pure-menu-link transition <?php if ($page_name=="studio") echo 'pure-button-active'; ?>">Studio</a></li>
                <li class="pure-menu-item"><a href="#" title="" class="pure-menu-link start-link-js btn btn-side-arrow transition">Start here</a></li>
            </ul>
        </nav>
      </div>
      <div class="menu-mobile">
      <ul class="pure-menu-list">
          <li class="pure-menu-item"><a href="index" title="" class="pure-menu-link transition <?php if ($page_name=="home") echo 'pure-button-active'; ?>">Home</a></li>
          <li class="pure-menu-item"><a href="works" title="" class="pure-menu-link transition <?php if ($page_name=="works") echo 'pure-button-active'; ?>">Works</a></li>
          <li class="pure-menu-item"><a href="services" title="" class="pure-menu-link transition <?php if ($page_name=="services") echo 'pure-button-active'; ?>">Services</a></li>
          <li class="pure-menu-item"><a href="studio" title="" class="pure-menu-link transition <?php if ($page_name=="studio") echo 'pure-button-active'; ?>">Studio</a></li>
          <li class="pure-menu-item"><a href="#" title="" class="pure-menu-link start-link-js btn btn-side-arrow transition">Start here</a></li>
      </ul>
      <div class="social-networks">
        <a class="social-link transition" target="_blank" href="https://www.facebook.com/StudioHakuna/" title="Hakuna Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        <a class="social-link transition" target="_blank" href="https://twitter.com/studiohakuna" title="Hakuna Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        <a class="social-link transition" target="_blank" href="https://dribbble.com/studiohakuna" title="Hakuna Dribble"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
        <a class="social-link transition" target="_blank" href="https://www.instagram.com/studiohakuna/" title="Hakuna Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <span>© 2017 Hakuna. All Rights Reserved.</span>
      </div>
    </div>
    </header>

    <?php include('aside.php'); ?>
