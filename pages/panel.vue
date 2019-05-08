<template>

  <div id="panel">
    <h1 class="hx-title">Panel</h1>
    <h2 class="hx-subtitle">A Panel is a template that consists of a <a href="/panel-header">Panel Header</a>, body and footer. The panel-header and panel-footer elements are fixed, the panel-body section scrolls.
      A panel takes up the width of its parent container (often one third of the screen)</h2>
    <p>To break out of the panel body's left and right padding, use a hx-panel-section with the is-fill-to-edges modifier class.</p>
    <hr>
    <div class="hx-columns">
      <div class="hx-column">
        <div class="mock-panel-container">
          <div class="hx-panel">

            <div class="hx-panel-header has-fixed-height">
              <div class="hx-panel-header-row">
                <div class="hx-panel-header-heading">
                  <i class="hx-icon icon-file-outline is-heading-icon"></i>
                  <div class="hx-panel-header-heading-text">
                    <div class="h2">
                      Letter Creator
                    </div>
                  </div>
                </div>
                <div class="hx-panel-header-row-actions">
                  <a class="hx-button is-small is-white px-1">
                    <i class="hx-icon is-medium icon-close-empty"></i>
                  </a>
                </div>
              </div>
              <div class="hx-panel-header-row has-search hx-flex-column">
                <div class="hx-input-group">
                  <i class="hx-icon icon-search"></i>
                  <div class="hx-input-control">
                    <input class="hx-input" type="text" required="">
                    <label class="hx-label"></label>
                    <div class="hx-help"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="hx-panel-body">
 
              <h3>Drafts</h3>

              <table class="hx-table is-hover mb-0">
                <thead>
                <tr>
                  <th>Letter</th>
                  <th>Last Modified</th>
                  <th>Practitioner</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Blank letter</td>
                  <td>Nurse Nunez</td>
                  <td>Dr Dean Doco</td>
                  <td>03/01/2019</td>
                  <td><i class="hx-icon icon-edit"></i></td>
                </tr>
                <tr>
                  <td>Specialist referral</td>
                  <td>Nurse Namma</td>
                  <td>Dr Sally Surgeon</td>
                  <td>06/01/2019</td>
                  <td><i class="hx-icon icon-edit"></i></td>
                </tr>
                </tbody>
              </table>

    
              <h3>Favourites</h3>
              <div class="hx-card">
                  <ul class="hx-list-group">
                    <li class="">
                      <a>
                        <div class="hx-list-content">Cras justo odio</div>
                        <div class="hx-list-action">
                          <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-star"></i></span></button>
                        </div>
                      </a>
                    </li>
                    <li class="">
                      <a>
                        <div class="hx-list-content">Dapibus ac facilisis in</div>
                        <div class="hx-list-action">
                          <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-star"></i></span></button>
                        </div>
                      </a>
                    </li>
                    <li class="">
                      <a>
                        <div class="hx-list-content">Morbi leo risus</div>
                        <div class="hx-list-action">
                          <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-star"></i></span></button>
                        </div>
                      </a>
                    </li>
                    <li class="">
                      <a>
                        <div class="hx-list-content">Phasellus sem tortor, consectetur sit amet ex non, varius rhoncus neque.</div>
                        <div class="hx-list-action">
                          <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-star"></i></span></button>
                        </div>
                      </a>
                    </li>
                    <li class="">
                      <a>
                        <div class="hx-list-content">Vestibulum at eros</div>
                        <div class="hx-list-action">
                          <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-star"></i></span></button>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

              <h3>
                <div class="is-flex hx-flex-align-center hx-flex-justify-between">
                    <div class="h3">WorkCover Certificates</div>
                    <i class="hx-icon is-medium icon-angle-right"></i>
                </div>
              </h3>


            </div>



          </div>
        </div>
      </div>
      <div class="hx-column">
        <div class="mock-panel-container">
          <div class="hx-panel">

            <div class="hx-panel-header has-fixed-height">

              <div class="hx-panel-header-row">
                <div class="hx-panel-header-heading">

                  <i class="hx-icon icon-pathology-outline is-heading-icon"></i>
                  <div class="hx-panel-header-heading-text">
                    <div class="h2">
                      Kitchen Sink L2
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="hx-panel-body">

              <h3>Plain heading (L3)</h3>
              <p>
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy
                with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss
                of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence,
                that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I
              </p>

              <h3>List heading (L3)</h3>
              <div class="hx-panel-section is-fill-to-edges">
                <ul class="hx-list-group">
                  <li class="">
                    <a>
                      <div class="hx-list-content">Cras justo odio</div>
                      <div class="hx-list-action">
                        <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-star"></i></span></button>
                      </div>
                    </a>
                  </li>
                  <li class="">
                    <a>
                      <div class="hx-list-content">Dapibus ac facilisis in</div>
                      <div class="hx-list-action">
                        <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-star"></i></span></button>
                      </div>
                    </a>
                  </li>
                  <li class="">
                    <a>
                      <div class="hx-list-content">Morbi leo risus</div>
                      <div class="hx-list-action">
                        <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-star"></i></span></button>
                      </div>
                    </a>
                  </li>
                  <li class="">
                    <a>
                      <div class="hx-list-content">Phasellus sem tortor, consectetur sit amet ex non, varius rhoncus neque.</div>
                      <div class="hx-list-action">
                        <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-star"></i></span></button>
                      </div>
                    </a>
                  </li>
                  <li class="">
                    <a>
                      <div class="hx-list-content">Vestibulum at eros</div>
                      <div class="hx-list-action">
                        <button class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-star"></i></span></button>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <h3>Accordion heading (L3)</h3>
              <ul class="hx-accordion">
                <li class="hx-accordion-container is-active">
                  <a class="hx-accordion-header">
                    <div class="header-title">Item 1</div>
                    <div class="header-icon">
                      <i class="hx-icon is-small icon-angle-down"></i>
                      <i class="hx-icon is-small icon-angle-up" style="display: none"></i>
                    </div>
                  </a>
                  <div class="hx-accordion-body" style="height: 0">
                    <div class="hx-accordion-body-wrapper">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>
                    </div>
                  </div>
                </li>
                <li class="hx-accordion-container">
                  <a class="hx-accordion-header">
                    <div class="header-title">Item 2</div>
                    <div class="header-icon">
                      <i class="hx-icon is-small icon-angle-down"></i>
                      <i class="hx-icon is-small icon-angle-up" style="display: none"></i>
                    </div>
                  </a>
                  <div class="hx-accordion-body" style="height: 0">
                    <div class="hx-accordion-body-wrapper">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>
                    </div>
                  </div>
                </li>
                <li class="hx-accordion-container">
                  <a class="hx-accordion-header">
                    <div class="header-title">Item 3</div>
                    <div class="header-icon">
                      <i class="hx-icon is-small icon-angle-down"></i>
                      <i class="hx-icon is-small icon-angle-up" style="display: none"></i>
                    </div>
                  </a>
                  <div class="hx-accordion-body" style="height: 0">
                    <div class="hx-accordion-body-wrapper">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>
                    </div>
                  </div>
                </li>
              </ul>

              <div class="is-flex hx-flex-align-center hx-flex-justify-between mt-6">
                <div class="h3">Section heading as link (L3)</div>
                <i class="hx-icon is-medium icon-angle-right"></i>
              </div>

              <div class="hx-panel-section is-fill-to-edges">
                <ul class="hx-accordion">
                  <li class="hx-accordion-container">
                    <a class="hx-accordion-header">
                      <div class="header-title">
                        <div class="h3">Accordion section heading one (L3)</div>
                      </div>
                      <div class="header-icon">
                        <i class="hx-icon icon-angle-down"></i>
                        <i class="hx-icon icon-angle-up" style="display: none"></i>
                      </div>
                    </a>
                    <div class="hx-accordion-body" style="height: 0">

                    </div>
                  </li>
                  <li class="hx-accordion-container">
                    <a class="hx-accordion-header">
                      <div class="header-title">
                        <div class="h3">Accordion section heading two (L3)</div>
                      </div>
                      <div class="header-icon">
                        <i class="hx-icon icon-angle-down" style="display: none"></i>
                        <i class="hx-icon icon-angle-up"></i>
                      </div>
                    </a>
                    <div class="hx-accordion-body">
                      <div class="hx-accordion-body-wrapper">
                        <div class="hx-accordion">
                          <div class="hx-accordion-container">
                            <div class="hx-accordion-header">
                              <div class="header-title">
                                <div class="h4">Nested accordion section heading one (L4)</div>
                              </div>
                              <div class="header-icon">
                                <i class="hx-icon icon-angle-down"></i>
                                <i class="hx-icon icon-angle-up" style="display: none"></i>
                              </div>
                            </div>
                            <div class="hx-accordion-body">
                            </div>
                          </div>

                          <div class="hx-accordion-container">
                            <div class="hx-accordion-header">
                              <div class="header-title">
                                <div class="h4">Nested accordion section heading two (L4)</div>
                              </div>
                              <div class="header-icon">
                                <i class="hx-icon icon-angle-down" style="display: none"></i>
                                <i class="hx-icon icon-angle-up" ></i>
                              </div>
                            </div>
                            <div class="hx-accordion-body">
                              <div class="hx-accordion-body-wrapper">
                                <table class="hx-table is-hover mb-0">
                                  <thead>
                                  <tr>
                                    <th>Letter</th>
                                    <th>Practitioner</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                    <td>Blank letter</td>
                                    <td>Nurse Nunez</td>
                                  </tr>
                                  </tbody>
                                </table>
                                <h5>Section heading within a nested container (L5)</h5>
                                <p>
                                  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy
                                  with my whole heart.
                                </p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="hx-accordion-container">
                    <a class="hx-accordion-header">
                      <div class="header-title">
                        <div class="h3">Accordion section heading three  (L3)</div>
                      </div>
                      <div class="header-icon">
                        <i class="hx-icon icon-angle-down"></i>
                        <i class="hx-icon icon-angle-up" style="display: none"></i>
                      </div>
                    </a>
                    <div class="hx-accordion-body" style="height: 0">
                      <div class="hx-accordion-body-wrapper">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero mi, fermentum non eleifend eu, scelerisque ut risus. Nullam accumsan metus a magna pretium, vitae malesuada nisl sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ac eros sit amet diam mattis porttitor ut vitae nulla. Nulla non ligula mattis, hendrerit urna eu, aliquet mauris. Sed vulputate tempor mauris at aliquam. Integer porta nibh tincidunt tortor tincidunt, vel dignissim quam dignissim.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

            <div class="hx-panel-footer">
              <div class="hx-section px-6">
                <!-- px-6 normally not required. In this case, there are nested hx-sections which remove the left and right padding-->
                <div class="hx-columns">
                  <div class="hx-column">
                    <button class="hx-button">Cancel</button>
                  </div>
                  <div class="hx-column has-text-right">
                    <button class="hx-button is-primary">Save</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    data () {
      return {
        panelA: `hello`
      }
    }
  }
</script>

<style scoped>
  .mock-panel-container {
    height: 800px;
    width: 600px;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
  }
</style>
