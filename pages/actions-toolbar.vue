<template>

  <div id="panel">
    <h1 class="hx-title">Actions Toolbar</h1>
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
                  <i class="hx-icon icon-person is-heading-icon"></i>
                  <div class="hx-panel-header-heading-text">
                    <div class="h2">
                     Address Book
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

            <div class="hx-panel-body pt-0">

              <div class="hx-toolbar is-perforated">
                <div><span class="is-info is-text-weight-bolder">2</span> of <span class="is-info is-text-weight-bolder">4</span><span class="is-text-weight-light"> items selected</span></div>
                <div class="hx-spacer"></div>
                <div class="hx-flex hx-flex-align-center">
                  <i class="hx-icon icon-filter-outline mx-1"></i>
                  <div class="hx-dropdown mx-1 expandedFilter" id="practitioner">
                    <a class="hx-button hx-button-dropdown expandedFilter__button"  id="practitioner-trigger">
                      <span class="is-text-weight-light">Practitioner:&nbsp;</span>
                      <span class="is-text-weight-bolder is-text-ellipsed" title="Mr John GP">Mr John GP</span>
                      <span  class="hx-icon-control"><i class="hx-icon icon-caret-down"></i></span>
                    </a>
                  </div>
                  <div class="hx-dropdown mx-1 expandedFilter ng-star-inserted" id="status">
                    <a class="hx-button hx-button-dropdown expandedFilter__button"  id="status-trigger">
                      <span class="is-text-weight-light">Status:&nbsp;</span>
                      <span class="is-text-weight-bolder is-text-ellipsed" title="New">New</span>
                      <span class="hx-icon-control"><i class="hx-icon icon-caret-down"></i></span>
                    </a>
                  </div>
                  <!--<div class="hx-input-group ml-4 ng-star-inserted" id="searchFilter">-->
                    <!--<i class="hx-icon icon-search mt-1"></i>-->
                    <!--<div class="hx-input-control my-0">-->
                      <!--<input class="hx-input" type="search" placeholder="Search patient by name">-->
                      <!--<label class="hx-label"></label>-->
                      <!--<div class="hx-help"></div>-->
                    <!--</div>-->
                  <!--</div>-->
                </div>
                <div class="hx-divider"></div>
                <button class="hx-button is-outlined is-primary">
                  <span class="hx-icon-control">
                    <i class="hx-icon icon-plus"></i>
                  </span>
                  <span>Address</span>
                </button>

              </div>


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
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
  }
</style>
