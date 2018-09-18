<!-- Javascript Interactions -->
<section id="javascript-interactions">
  <h2 class="styleguide-heading">Javascript Interactions</h2>

  <div class="styleguide-help-text mb-2">
    <p>Use <code>.js-exampleButton</code></p>
  </div>

  <div class="styleguide-subgroup">
    <h4 class="styleguide-label">Example Button JS Hook</h4>
    <div class="styleguide-component">
      <button class="Button js-exampleButton mb-2" data-id="1">Button</button>
      <button class="Button js-exampleButton" data-id="2">Button</button>
    </div>
    <div class="styleguide-code-preview">
      <pre>
        <code class="html"></code>
      </pre>
    </div>
  </div>


  <div class="styleguide-help-text mb-2">
    <p>Use <code>.js-closeModal</code> for the close modal js hook</p>
  </div>

  <div class="styleguide-subgroup">
    <h4 class="styleguide-label">Open Modal JS Hook</h4>
    <div class="styleguide-component">
      <button class="Button js-openModal" data-modal="modal-1">Open Modal</button>
    </div>
    <div class="styleguide-code-preview">
      <pre>
        <code class="html"></code>
      </pre>
    </div>
  </div>

  <div class="styleguide-subgroup">
    <div class="styleguide-component">
      <button class="Button js-openModal" data-modal="modal-2">Open Modal w/ Overlay</button>
    </div>
    <div class="styleguide-code-preview">
      <pre>
        <code class="html"></code>
      </pre>
    </div>
  </div>



  <div id="modal-1" class="Modal js-closeModal">
    <div class="Modal-dialog">
      <div class="Modal-content">
        <h3 class="ts-h6 mt-0">Modal Title</h3>
        <p>It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.</p>
      </div>

      <button class="Modal-closeButton js-closeModal">
        <svg class="" viewBox="0 0 24 24"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path></svg>
      </button>
    </div>
  </div>

  <div id="modal-2" class="Modal Modal--background js-closeModal">
    <div class="Modal-dialog">
      <div class="Modal-content">
        <h3 class="ts-h6 mt-0">Modal w/ Overlay</h3>
        <p>It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.</p>

        <div class="styleguide-subgroup">
          <h4 class="styleguide-label">Close Modal JS Hook</h4>
          <div class="styleguide-component">
            <button class="Button js-closeModal">Close Modal</button>
          </div>
          <div class="styleguide-code-preview">
            <pre>
              <code class="html"></code>
            </pre>
          </div>
        </div>

      </div>

      <button class="Modal-closeButton js-closeModal">
        <svg class="" viewBox="0 0 24 24"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path></svg>
      </button>
    </div>
  </div>
</section>
