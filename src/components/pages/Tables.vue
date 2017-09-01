<template>
  <div id="tables">
    <h1 class="hx-title">Tables</h1>
    <h2 class="hx-subtitle">The inevitable HTML table, with special case cells</h2>

    <hr>

    <section class="hx-section">
      <h3>Default Table</h3>
      <div class="hx-columns">
        <div class="hx-column is-half">
          <p>Tables are borderless by default.</p>
          <p>Add <code>class="hx-table"</code> to the table tag for a HxUI styled table.</p>
          <p>You can set a table row as <strong>selected</strong> by appending the <code>is-selected</code> modifier on a <code>&#x3C;tr&#x3E;</code>.</p>
        </div>
      </div>

      <p>Example</p>
      <table class="hx-table is-striped">
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
        <tfoot>
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
        </tfoot>
        <tbody>
          <tr>
            <th>1</th>
            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
            </td>
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

      <p>Code</p>
      <pre><code class="language-markup"><xmp>
      <table class="hx-table is-striped">
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
        <tfoot>
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
        </tfoot>
        <tbody>
          <tr>
            <th>1</th>
            <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
            </td>
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
      </xmp></code></pre>
    </section>

    <hr>

    <section class="hx-section">
      <h3>Striped Table</h3>
      <div class="hx-columns">
        <div class="hx-column is-half">
          <p>Add <code>class="hx-table is-striped"</code> to the table tag for a striped table</p>
        </div>
      </div>
      <div class="hx-columns">
        <div class="hx-column">
          <p>Example</p>
          <table class="hx-table is-striped">
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
        </div>
        <div class="hx-column">
          <p>Code</p>
          <pre><code class="language-markup"><xmp>
      <table class="hx-table is-striped">
        <thead>
          ...
        </thead>
        <tbody>
          ...
        </tbody>
      </table>
          </xmp></code></pre>
        </div>
      </div>
    </section>

    <section class="hx-section">
      <h3>Narrow Table</h3>
      <div class="hx-columns">
        <div class="hx-column is-half">
          <p>Add <code>class="hx-table is-narrow"</code> to the table tag to make the cells narrower.</p>
        </div>
      </div>
      <div class="hx-columns">
        <div class="hx-column">
          <p>Example</p>
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
        </div>
        <div class="hx-column">
          <p>Code</p>
          <pre><code class="language-markup"><xmp>
      <table class="hx-table is-narrow">
        <thead>
          ...
        </thead>
        <tbody>
          ...
        </tbody>
      </table>
          </xmp></code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
