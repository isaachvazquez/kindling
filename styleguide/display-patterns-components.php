<!-- Display Patterns/Components -->
<section id="display-patterns-components">
  <h2 class="styleguide-heading">Display Patterns / Components</h2>

  <article class="styleguide-group">
    <h3 class="styleguide-subheading">Buttons</h3>
    <?php
      foreach(glob('../display-patterns/button-*.*') as $filename){
        echo '<h4 class="styleguide-label">'. $filename . '</h4>';
        echo '<div class="styleguide-subgroup">
                <div class="styleguide-component">';
        @include $filename;
        echo '
          </div>
          <div class="styleguide-code-preview">
            <pre>
              <code class="html"></code>
            </pre>
          </div>
        </div>';
      }
    ?>
  </article>


  <article class="styleguide-group">
    <h3 class="styleguide-subheading">Icons</h3>
    <?php
      foreach(glob('../display-patterns/icon*.*') as $filename){
        echo '<h4 class="styleguide-label">'. $filename . '</h4>';
        echo '<div class="styleguide-subgroup">
                <div class="styleguide-component">';
        @include $filename;
        echo '
          </div>
          <div class="styleguide-code-preview">
            <pre>
              <code class="html"></code>
            </pre>
          </div>
        </div>';
      }
    ?>

  </article>
    
  <article class="styleguide-group">
    <h3 class="styleguide-subheading">Content Cards</h3>
    <?php
      foreach(glob('../display-patterns/content-card*.*') as $filename){
        echo '<h4 class="styleguide-label">'. $filename . '</h4>';
        echo '<div class="styleguide-subgroup">
                <div class="styleguide-component">';
        @include $filename;
        echo '
          </div>
          <div class="styleguide-code-preview">
            <pre>
              <code class="html"></code>
            </pre>
          </div>
        </div>';
      }
    ?>

  </article>

  <!-- <article class="styleguide-group">
    <h3 class="styleguide-subheading">Banners</h3>

    <div class="styleguide-subgroup"></div>
  </article>

  <article class="styleguide-group">
    <h3 class="styleguide-subheading">Forms</h3>

    <div class="styleguide-subgroup"></div>
  </article> -->


</section>