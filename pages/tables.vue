<template>
  <div id="tables">
    <h1 class="hx-title">Tables</h1>
    <h2 class="hx-subtitle">The inevitable HTML table, with special case cells</h2>

    <hr>

    <expanding-code-example v-for="(example, i) in examples" :key="i"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
    ></expanding-code-example>

  </div>
</template>

<script>
import ExpandingCodeExample from '@/components/ExpandingCodeExample'

export default {
  data () {
    return {
      examples: [
        {
          title: 'Default table',
          code: `
<p>Tables are borderless by default.</p>
<p>Add <code>class="hx-table"</code> to the table tag for a HxUI styled table.</p>
<p>You can set a table row as <strong>selected</strong> by appending the <code>is-selected</code> modifier on a <code>&#x3C;tr&#x3E;</code>.</p>
<table class="hx-table is-striped mt-5">
  <thead>
    <tr>
      <th><abbr title="Position">Pos</abbr></th>
      <th>Team</th>
      <th class="has-text-right"><abbr title="Played">Pld</abbr></th>
      <th class="has-text-right"><abbr title="Won">W</abbr></th>
      <th class="has-text-right"><abbr title="Drawn">D</abbr></th>
      <th class="has-text-right"><abbr title="Lost">L</abbr></th>
      <th class="has-text-right"><abbr title="Goals for">GF</abbr></th>
      <th class="has-text-right"><abbr title="Goals against">GA</abbr></th>
      <th class="has-text-right"><abbr title="Goal difference">GD</abbr></th>
      <th class="has-text-right"><abbr title="Points">Pts</abbr></th>
      <th>Qualification or relegation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong></td>
      <td class="has-text-right">38</td>
      <td class="has-text-right">23</td>
      <td class="has-text-right">12</td>
      <td class="has-text-right">3</td>
      <td class="has-text-right">68</td>
      <td class="has-text-right">36</td>
      <td class="has-text-right">+32</td>
      <td class="has-text-right">81</td>
      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
    </tr>
    <tr>
      <th>2</th>
      <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>
      <td class="has-text-right">38</td>
      <td class="has-text-right">20</td>
      <td class="has-text-right">11</td>
      <td class="has-text-right">7</td>
      <td class="has-text-right">65</td>
      <td class="has-text-right">36</td>
      <td class="has-text-right">+29</td>
      <td class="has-text-right">71</td>
      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
    </tr>
    <tr>
      <th>3</th>
      <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C." title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
      <td class="has-text-right">38</td>
      <td class="has-text-right">19</td>
      <td class="has-text-right">13</td>
      <td class="has-text-right">6</td>
      <td class="has-text-right">69</td>
      <td class="has-text-right">35</td>
      <td class="has-text-right">+34</td>
      <td class="has-text-right">70</td>
      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
    </tr>
    <tr class="is-selected">
      <th>4</th>
      <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">Manchester City</a></td>
      <td class="has-text-right">38</td>
      <td class="has-text-right">19</td>
      <td class="has-text-right">9</td>
      <td class="has-text-right">10</td>
      <td class="has-text-right">71</td>
      <td class="has-text-right">41</td>
      <td class="has-text-right">+30</td>
      <td class="has-text-right">66</td>
      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round" title="2016–17 UEFA Champions League">Champions League play-off round</a></td>
    </tr>
    <tr>
      <th>5</th>
      <td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C." title="Manchester United F.C.">Manchester United</a></td>
      <td class="has-text-right">38</td>
      <td class="has-text-right">19</td>
      <td class="has-text-right">9</td>
      <td class="has-text-right">10</td>
      <td class="has-text-right">49</td>
      <td class="has-text-right">35</td>
      <td class="has-text-right">+14</td>
      <td class="has-text-right">66</td>
      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></td>
    </tr>
    <tr>
      <th>6</th>
      <td><a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a></td>
      <td class="has-text-right">38</td>
      <td class="has-text-right">18</td>
      <td class="has-text-right">9</td>
      <td class="has-text-right">11</td>
      <td class="has-text-right">59</td>
      <td class="has-text-right">41</td>
      <td class="has-text-right">+18</td>
      <td class="has-text-right">63</td>
      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage" title="2016–17 UEFA Europa League">Europa League group stage</a></td>
    </tr>
    <tr>
      <th>7</th>
      <td><a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham United</a></td>
      <td class="has-text-right">38</td>
      <td class="has-text-right">16</td>
      <td class="has-text-right">14</td>
      <td class="has-text-right">8</td>
      <td class="has-text-right">65</td>
      <td class="has-text-right">51</td>
      <td class="has-text-right">+14</td>
      <td class="has-text-right">62</td>
      <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round" title="2016–17 UEFA Europa League">Europa League third qualifying round</a></td>
    </tr>
    <tr>
      <th>8</th>
      <td><a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a></td>
      <td class="has-text-right">38</td>
      <td class="has-text-right">16</td>
      <td class="has-text-right">12</td>
      <td class="has-text-right">10</td>
      <td class="has-text-right">63</td>
      <td class="has-text-right">50</td>
      <td class="has-text-right">+13</td>
      <td class="has-text-right">60</td>
      <td></td>
    </tr>
    <tr>
      <th>9</th>
      <td><a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a></td>
      <td class="has-text-right">38</td>
      <td class="has-text-right">14</td>
      <td class="has-text-right">9</td>
      <td class="has-text-right">15</td>
      <td class="has-text-right">41</td>
      <td class="has-text-right">55</td>
      <td class="has-text-right">−14</td>
      <td class="has-text-right">51</td>
      <td></td>
    </tr>
    <tr>
      <th>10</th>
      <td><a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a></td>
      <td class="has-text-right">38</td>
      <td class="has-text-right">12</td>
      <td class="has-text-right">14</td>
      <td class="has-text-right">12</td>
      <td class="has-text-right">59</td>
      <td class="has-text-right">53</td>
      <td class="has-text-right">+6</td>
      <td class="has-text-right">50</td>
      <td></td>
    </tr>
  </tbody>
</table>
          `
        },
        {
          title: 'Narrow table',
          code: `
<p>Add <code>class="hx-table is-narrow"</code> to the table tag to make the cells narrower.</p>
<table class="hx-table is-narrow">
  <thead>
    <tr>
      <th>One</th>
      <th>Two</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Three</td>
      <td>Four</td>
    </tr>
    <tr>
      <td>Five</td>
      <td>Six</td>
    </tr>
    <tr>
      <td>Seven</td>
      <td>Eight</td>
    </tr>
    <tr>
      <td>Nine</td>
      <td>Ten</td>
    </tr>
    <tr>
      <td>Eleven</td>
      <td>Twelve</td>
    </tr>
  </tbody>
</table>
          `
        },
        {
          title: 'Hover table',
          code: `
            <p>Add <code>class="hx-table is-hover"</code> to the table tag for a hover state on rows</p>
            <table class="hx-table is-hover">
              <thead>
                <tr>
                  <th>One</th>
                  <th>Two</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Three</td>
                  <td>Four</td>
                </tr>
                <tr>
                  <td>Five</td>
                  <td>Six</td>
                </tr>
                <tr>
                  <td>Seven</td>
                  <td>Eight</td>
                </tr>
                <tr>
                  <td>Nine</td>
                  <td>Ten</td>
                </tr>
                <tr>
                  <td>Eleven</td>
                  <td>Twelve</td>
                </tr>
              </tbody>
            </table>
          `
        },
        {
          title: 'Contextual',
          code: `
            <p>Add <code>class="is-danger"</code>, <code>class="is-warning"</code>, <code>class="is-success"</code>, <code>class="is-info"</code> to the tr tag </p>
            <table class="hx-table">
              <thead>
                <tr>
                  <th>Context</th>
                  <th>Icon</th>
                </tr>
              </thead>
              <tbody>
                <tr class="is-danger">
                  <td>Danger</td>
                   <td><i class="hx-icon icon-exclamation"></i></td>
                </tr>
                <tr class="is-warning">
                  <td>Warning</td>
                   <td><i class="hx-icon icon-exclamation-outline"></i></td>
                </tr>
                <tr class="is-success">
                  <td>Success</td>
                   <td><i class="hx-icon icon-check"></i></td>
                </tr>
                <tr class="is-info">
                  <td>Info</td>
                   <td><i class="hx-icon icon-information"></i></td>
                </tr>
                <tr>
                  <td>Default</td>
                   <td><i class="hx-icon icon-information-outline"></i></td>
                </tr>
              </tbody>
            </table>
          `
        },
        {
          title: 'Table with text field',
          code: `
            <p>Add <code>class="is-danger"</code>, <code>class="is-warning"</code>, <code>class="is-success"</code>, <code>class="is-info"</code> to the tr tag </p>
            <table class="hx-table">
              <thead>
                <tr>
                  <th>Dessert (100g)</th>
                  <th class="has-text-right"><a href="#"><i class="hx-icon icon-arrow-down"></i> Calories</a></th>
                  <th class="has-text-right">Fat (g)</th>
                  <th class="has-text-right">Carbs (g)</th>
                  <th class="has-text-right">Protein (g)</th>
                  <th class="has-text-right">Iron (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="">
                  <td>Frozen Yoghurt</td>
                  <td width="110" class="has-text-right">159</td>
                  <td width="90" class="has-text-right">6</td>
                  <td width="90" class="has-text-right">24</td>
                  <td width="90" class="has-text-right">4</td>
                  <td width="90" class="has-text-right">1</td>
                </tr>
                <tr class="">
                  <td class="has-text-field">
                    <input class="hx-input" type="text" placeholder="Name of dessert" required>
                  </td>
                  <td width="110" class="has-text-field has-text-right">
                    <input class="hx-input" type="text" placeholder="" required>
                  </td>
                  <td width="90" class="has-text-field has-text-right">
                    <input class="hx-input" type="text" placeholder="" required>
                  </td>
                  <td width="90" class="has-text-field has-text-right">
                    <input class="hx-input" type="text" placeholder="" required>
                  </td>
                  <td width="90" class="has-text-field has-text-right">
                    <input class="hx-input" type="text" placeholder="" required>
                  </td>
                  <td width="90" class="has-text-field has-text-right">
                    <input class="hx-input" type="text" placeholder="" required>
                  </td>
                </tr>
                <tr>
                  <td colspan="6">
                    <a href="#" class="is-gray is-flex hx-flex-align-center">
                      <i class="hx-icon icon-plus-outline mr-2"></i>
                      Add new row
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          `
        },
        {
          title: 'Grouped rows table',
          code: `
            <p>Add <code>class="hx-table-group"</code> to the tbody tag proceeding tbody related rows.</p>

            <div class="hx-toolbar is-xsmall py-4 is-perforated">
              <button class="hx-button is-outlined mr-1">
                <div class="hx-icon-control"><i class="hx-icon icon-send"></i></div>
                <div>Resubmit</div>
              </button>
              <button class="hx-button is-outlined">
                <div class="hx-icon-control"><i class="hx-icon icon-printer-outline"></i></div>
                <div>Print</div>
              </button>
              <div class="hx-spacer"></div>
            </div>
            <table class="hx-table is-hover">
              <thead>
                <tr>
                  <th width="1"><div class="hx-checkbox-control">
                      <input id="checkbox-all" name="all-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-all" class="hx-label">ID</label>
                    </div></th>
                  <th>User Code</th>
                  <th>Firstname</th>
                  <th>Surname</th>
                  <th class="actions is-text-center">Actions</th>
                </tr>
              </thead>
              <tbody class="hx-table-group">
                <tr class="is-warning">
                  <th colspan="6">
                 <div>
                    <div class="hx-checkbox-control">
                        <input id="checkbox-group-1-all" name="checkbox-group-1-all" type="checkbox" class="hx-checkbox" title="Select All" />
                         <label for="checkbox-group-1-all" class="hx-label"></label>
                      </div>
                     <div class="hx-flex hx-flex-1 hx-flex-align-center">
                        <span>Batch 1</span>
                        <small class="ml-3">Mr Kun Aguero</small>
                        <div class="hx-spacer"></div>
                        <small class="hx-flex hx-flex-align-center is-warning"><i class="hx-icon icon-exclamation"> </i> Check item no 3287 for......</small>

                        <div class="hx-spacer"></div>
                        <small class="mr-3"><b>Batch Date:</b> 04/02/18</small>
                        <span class="hx-icon icon-angle-down"></span>
                      </div>
                      </div>
                    </th>
                </tr>
              </tbody>
              <tbody class="is-hidden">
                <tr class="is-selected">
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-19" name="19-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-19" class="hx-label">19</label>
                    </div></td>
                  <td>TS001</td>
                  <td>Tupac</td>
                  <td>Shakur</td>
                  <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                 <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-20" name="20-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-20" class="hx-label">20</label>
                    </div></td>
                  <td>BP001</td>
                  <td>Brian</td>
                  <td>Pulliese</td>
                   <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-21" name="21-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-21" class="hx-label">21</label>
                    </div></td>
                  <td>JS001</td>
                  <td>John</td>
                  <td>Smith</td>
                   <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
              </tbody>
              <tbody class="hx-table-group">
                <tr>
                 <th colspan="6">
                 <div>
                    <div class="hx-checkbox-control">
                        <input id="checkbox-group-2-all" name="checkbox-group-2-all" type="checkbox" class="hx-checkbox" title="Select All" />
                         <label for="checkbox-group-2-all" class="hx-label"></label>
                      </div>
                     <div class="hx-flex hx-flex-1 hx-flex-align-center">
                        <span>Batch 2</span>
                        <small class="ml-3">Mr Leonel Messi</small>
                        <div class="hx-spacer"></div>
                        <small class="mr-3"><b>Batch Date:</b> 05/02/18</small>
                        <span class="hx-icon icon-angle-down"></span>
                      </div>
                      </div>
                    </th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-1" name="1-checkbox" type="checkbox" class="hx-checkbox" checked title="Select All" />
                      <label for="checkbox-1" class="hx-label">1</label>
                    </div></td>
                  <td>BR001</td>
                  <td>Branda</td>
                  <td>Reed</td>
                  <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-2" name="2-checkbox" type="checkbox" class="hx-checkbox" checked title="Select All" />
                      <label for="checkbox-2" class="hx-label">2</label>
                    </div></td>
                  <td>MR001</td>
                  <td>Mercedes</td>
                  <td>Mendez</td>
                  <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-3" name="3-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-3" class="hx-label">3</label>
                    </div></td>
                  <td>HS001</td>
                  <td>Harry</td>
                  <td>Sechi</td>
                  <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-4" name="4-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-4" class="hx-label">4</label>
                    </div></td>
                  <td>CY001</td>
                  <td>Chris</td>
                  <td>Yap</td>
                   <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                 <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-5" name="5-checkbox" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-5" class="hx-label">5</label>
                    </div></td>
                  <td>KL001</td>
                  <td>Kevin</td>
                  <td>Liang</td>
                   <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
              </tbody>
               <tbody class="hx-table-group">
                <tr class="is-danger">

                  <th colspan="6">
                  <div>
                    <div class="hx-checkbox-control">
                      <input id="checkbox-group-3-all" name="checkbox-group-3-all" type="checkbox" class="hx-checkbox" title="Select All" />
                       <label for="checkbox-group-3-all" class="hx-label"></label>
                    </div>
                    <div class="hx-flex hx-flex-1 hx-flex-align-center">
                        <span>Batch 3</span>
                        <small class="ml-3">Ms Kim Yeonkiong</small>
                         <div class="hx-spacer"></div>

                         <small class="hx-flex hx-flex-align-center is-danger"><i class="hx-icon icon-exclamation"> </i>Medicare error no 7896...</small>

                        <div class="hx-spacer"></div>
                        <small class="mr-3"><b>Batch Date:</b> 06/02/18</small>
                        <span class="hx-icon icon-angle-down"></span>
                    </div>
                  </div>
                  </th>
                </tr>
              </tbody>
              <tbody class="is-hidden">
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-6" name="checkbox-6" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-6" class="hx-label">6</label>
                    </div></td>
                  <td>BS001</td>
                  <td>Biggie</td>
                  <td>Smalls</td>
                  <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-7" name="checkbox-7" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-7" class="hx-label">7</label>
                    </div></td>
                  <td>JS001</td>
                  <td>Julia</td>
                  <td>Sampson</td>
                   <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-8" name="checkbox-8" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-8" class="hx-label">8</label>
                    </div></td>
                  <td>GP001</td>
                  <td>John</td>
                  <td>Pipps</td>
                   <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
              </tbody>
            </table>

<br>
<hr>
<br>

            <p>Modifiers like <code>.is-narrow</code> and <code>.is-danger</code> will work as documented in above sections.</p>

            <div class="hx-toolbar is-xsmall py-4 is-perforated">
              <button class="hx-button is-outlined mr-1">
                <div class="hx-icon-control"><i class="hx-icon icon-send"></i></div>
                <div>Resubmit</div>
              </button>
              <button class="hx-button is-outlined">
                <div class="hx-icon-control"><i class="hx-icon icon-printer-outline"></i></div>
                <div>Print</div>
              </button>
              <div class="hx-spacer"></div>
            </div>
            <table class="hx-table is-hover is-narrow">
              <thead>
                <tr>
                  <th width="1"><div class="hx-checkbox-control">
                      <input id="checkbox-narrow-all" name="all-checkbox-narrow" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-narrow-all" class="hx-label">ID</label>
                    </div></th>
                  <th>User Code</th>
                  <th>Firstname</th>
                  <th>Surname</th>
                  <th class="actions is-text-center">Actions</th>
                </tr>
              </thead>
              <tbody class="hx-table-group">
                <tr>
                  <th colspan="6">
                 <div>
                    <div class="hx-checkbox-control">
                        <input id="checkbox-narrow-group-1-all" name="checkbox-narrow-group-1-all" type="checkbox" class="hx-checkbox" title="Select All" />
                         <label for="checkbox-narrow-group-1-all" class="hx-label"></label>
                      </div>
                     <div class="hx-flex hx-flex-1 hx-flex-align-center">
                        <span>Batch 1</span>
                        <small class="ml-3">Mr Kun Aguero</small>
                        <div class="hx-spacer"></div>
                        <small class="mr-3"><b>Batch Date:</b> 04/02/18</small>
                        <span class="hx-icon icon-angle-down"></span>
                      </div>
                      </div>
                    </th>
                </tr>
              </tbody>
              <tbody class="is-hidden">
                <tr class="is-selected">
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-narrow-19" name="19-checkbox-narrow" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-narrow-19" class="hx-label">19</label>
                    </div></td>
                  <td>TS001</td>
                  <td>Tupac</td>
                  <td>Shakur</td>
                  <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                 <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-narrow-20" name="20-checkbox-narrow" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-narrow-20" class="hx-label">20</label>
                    </div></td>
                  <td>BP001</td>
                  <td>Brian</td>
                  <td>Pulliese</td>
                   <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-narrow-21" name="21-checkbox-narrow" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-narrow-21" class="hx-label">21</label>
                    </div></td>
                  <td>JS001</td>
                  <td>John</td>
                  <td>Smith</td>
                   <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
              </tbody>
              <tbody class="hx-table-group">
                <tr>
                 <th colspan="6">
                 <div>
                    <div class="hx-checkbox-control">
                        <input id="checkbox-narrow-group-2-all" name="checkbox-narrow-group-2-all" type="checkbox" class="hx-checkbox" title="Select All" />
                         <label for="checkbox-narrow-group-2-all" class="hx-label"></label>
                      </div>
                     <div class="hx-flex hx-flex-1 hx-flex-align-center">
                        <span>Batch 2</span>
                        <small class="ml-3">Mr Leonel Messi</small>
                        <div class="hx-spacer"></div>
                        <small class="mr-3"><b>Batch Date:</b> 05/02/18</small>
                        <span class="hx-icon icon-angle-down"></span>
                      </div>
                      </div>
                    </th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-narrow-1" name="1-checkbox-narrow" type="checkbox" class="hx-checkbox" checked title="Select All" />
                      <label for="checkbox-narrow-1" class="hx-label">1</label>
                    </div></td>
                  <td>BR001</td>
                  <td>Branda</td>
                  <td>Reed</td>
                  <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-narrow-2" name="2-checkbox-narrow" type="checkbox" class="hx-checkbox" checked title="Select All" />
                      <label for="checkbox-narrow-2" class="hx-label">2</label>
                    </div></td>
                  <td>MR001</td>
                  <td>Mercedes</td>
                  <td>Mendez</td>
                  <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-narrow-3" name="3-checkbox-narrow" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-narrow-3" class="hx-label">3</label>
                    </div></td>
                  <td>HS001</td>
                  <td>Harry</td>
                  <td>Sechi</td>
                  <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-narrow-4" name="4-checkbox-narrow" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-narrow-4" class="hx-label">4</label>
                    </div></td>
                  <td>CY001</td>
                  <td>Chris</td>
                  <td>Yap</td>
                   <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                 <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-narrow-5" name="5-checkbox-narrow" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-narrow-5" class="hx-label">5</label>
                    </div></td>
                  <td>KL001</td>
                  <td>Kevin</td>
                  <td>Liang</td>
                   <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
              </tbody>
               <tbody class="hx-table-group">
                <tr class="is-danger">

                  <th colspan="6">
                  <div>
                    <div class="hx-checkbox-control">
                      <input id="checkbox-narrow-group-3-all" name="checkbox-narrow-group-3-all" type="checkbox" class="hx-checkbox" title="Select All" />
                       <label for="checkbox-narrow-group-3-all" class="hx-label"></label>
                    </div>
                    <div class="hx-flex hx-flex-1 hx-flex-align-center">
                        <span>Batch 3</span>
                        <small class="ml-3">Ms Kim Yeonkiong</small>
                         <div class="hx-spacer"></div>
                        <small class="hx-flex hx-flex-align-center is-danger"><i class="hx-icon icon-exclamation"> </i> Check item no 3287 for......</small>
                        <div class="hx-spacer"></div>
                        <small class="mr-3"><b>Batch Date:</b> 06/02/18</small>
                        <span class="hx-icon icon-angle-down"></span>
                    </div>
                  </div>
                  </th>
                </tr>
              </tbody>
              <tbody class="is-hidden">
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-narrow-6" name="checkbox-narrow-6" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-narrow-6" class="hx-label">6</label>
                    </div></td>
                  <td>BS001</td>
                  <td>Biggie</td>
                  <td>Smalls</td>
                  <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-narrow-7" name="checkbox-narrow-7" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-narrow-7" class="hx-label">7</label>
                    </div></td>
                  <td>JS001</td>
                  <td>Julia</td>
                  <td>Sampson</td>
                   <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
                <tr>
                  <td><div class="hx-checkbox-control">
                      <input id="checkbox-narrow-8" name="checkbox-narrow-8" type="checkbox" class="hx-checkbox" title="Select All" />
                      <label for="checkbox-narrow-8" class="hx-label">8</label>
                    </div></td>
                  <td>GP001</td>
                  <td>John</td>
                  <td>Pipps</td>
                   <td>
                  <div class="hx-flex">
                    <button type="button" class="hx-button is-flat"><span class="hx-icon-control"><i class="hx-icon icon-edit"></i></span></button>
                    <button type="button" class="hx-button is-flat is-danger"><span class="hx-icon-control"><i class="hx-icon icon-bin"></i></span></button>
                  </div>
                  </td>
                </tr>
              </tbody>
            </table>
          `
        }
      ]
    }
  },
  components: {
    ExpandingCodeExample
  }
}
</script>

<style lang="scss">
  .actions{
    width:5%;
  }
</style>
