<template>
  <div id="pagination">
    <h1 class="hx-title">Pagination</h1>
    <h2 class="hx-subtitle">This component provides pagination links for multi-page pagination.</h2>

    <hr>

    <expanding-code-example v-for="(example, i) in examples" :key="i"
      :title="example.title"
      :code="example.code"
      :example="example.code"
      :visible="false"
      :background="example.bg"
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
          title: 'Basic example',
          code: `
<ul class="hx-pagination">
  <li class="is-first is-disabled"><a  href="">First</a></li>
  <li class="is-prev"><a  href="">Previous</a></li>
  <li class="is-current"><a href="">1</a></li>
  <li><a href="">2</a></li>
  <li><a href="">3</a></li>
  <li><a href="">4</a></li>
  <li><a href="">5</a></li>
  <li><a href="">6</a></li>
  <li><a href="">7</a></li>
  <li class="is-next"><a href="">Next</a></li>
  <li class="is-last"><a href="">Last</a></li>
</ul>
          `
        },
        {
          title: 'Sticky example',
          code: `
    <h6>Usage</h6>
    <p>The sticky modifier should be used when the pagination controls need to float on top of scrollable content. Simply add <code>.is-sticky</code> to the pagination component.</p>

    <p>When using the sticky property you must add the <code>.pb-10</code> class to the scrollable container.<br>
    This will make sure there is enough padding between the transparent gradient and the end of the scrollable content.</p>
    <br>
    <div class="tableContainer pb-10">
      <table class="hx-table">
    <thead>
     <tr>
        <th>Title</th>
        <th>Description</th>
        <th><a href="#"><i class="hx-icon icon-arrow-down"></i>Due</a></th>
        <th>Provider</th>
        <th class="is-text-center">Complete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hyperlipidemia</td>
        <td>Refer to dietition for advice and education, reduction in saturated fats.</td>
        <td>14/03/2018</td>
        <td>GP</td>
        <td class="is-text-center"><div class="hx-checkbox-control">
          <input id="checkbox-2" name="2-checkbox" type="checkbox" class="hx-checkbox" title="Complete" checked />
          <label for="checkbox-2" class="hx-label"></label>
        </div></td>
      </tr>
      <tr>
        <td>Obesity/Weight Loss</td>
        <td>Advice on cholesterol lowering foods.</td>
        <td>14/03/2018</td>
        <td>GP</td>
        <td class="is-text-center"><div class="hx-checkbox-control">
          <input id="checkbox-3" name="3-checkbox" type="checkbox" class="hx-checkbox" title="Complete" checked />
          <label for="checkbox-3" class="hx-label"></label>
        </div></td>
      </tr>
       <tr>
        <td>Hyperlipidemia</td>
        <td>Refer to dietition for advice and education, reduction in saturated fats.</td>
        <td>14/03/2018</td>
        <td>GP</td>
        <td class="is-text-center"><div class="hx-checkbox-control">
          <input id="checkbox-4" name="4-checkbox" type="checkbox" class="hx-checkbox" title="Complete" checked />
          <label for="checkbox-4" class="hx-label"></label>
        </div></td>
      </tr>
      <tr>
        <td>Obesity/Weight Loss</td>
        <td>Advice on cholesterol lowering foods.</td>
        <td>14/03/2018</td>
        <td>GP</td>
        <td class="is-text-center"><div class="hx-checkbox-control">
          <input id="checkbox-5" name="5-checkbox" type="checkbox" class="hx-checkbox" title="Complete" checked />
          <label for="checkbox-5" class="hx-label"></label>
        </div></td>
      </tr>
       <tr>
        <td>Hyperlipidemia</td>
        <td>Refer to dietition for advice and education, reduction in saturated fats.</td>
        <td>14/03/2018</td>
        <td>GP</td>
        <td class="is-text-center"><div class="hx-checkbox-control">
          <input id="checkbox-6" name="6-checkbox" type="checkbox" class="hx-checkbox" title="Complete" checked />
          <label for="checkbox-6" class="hx-label"></label>
        </div></td>
      </tr>
      <tr>
        <td>Obesity/Weight Loss</td>
        <td>Advice on cholesterol lowering foods.</td>
        <td>14/03/2018</td>
        <td>GP</td>
        <td class="is-text-center"><div class="hx-checkbox-control">
          <input id="checkbox-7" name="7-checkbox" type="checkbox" class="hx-checkbox" title="Complete" checked />
          <label for="checkbox-7" class="hx-label"></label>
        </div></td>
      </tr>
       <tr>
        <td>Hyperlipidemia</td>
        <td>Refer to dietition for advice and education, reduction in saturated fats.</td>
        <td>14/03/2018</td>
        <td>GP</td>
        <td class="is-text-center"><div class="hx-checkbox-control">
          <input id="checkbox-8" name="8-checkbox" type="checkbox" class="hx-checkbox" title="Complete" checked />
          <label for="checkbox-8" class="hx-label"></label>
        </div></td>
      </tr>
      <tr>
        <td>Obesity/Weight Loss</td>
        <td>Advice on cholesterol lowering foods.</td>
        <td>14/03/2018</td>
        <td>GP</td>
        <td class="is-text-center"><div class="hx-checkbox-control">
          <input id="checkbox-9" name="9-checkbox" type="checkbox" class="hx-checkbox" title="Complete" checked />
          <label for="checkbox-9" class="hx-label"></label>
        </div></td>
      </tr>
       <tr>
        <td>Hyperlipidemia</td>
        <td>Refer to dietition for advice and education, reduction in saturated fats.</td>
        <td>14/03/2018</td>
        <td>GP</td>
        <td class="is-text-center"><div class="hx-checkbox-control">
          <input id="checkbox-10" name="10-checkbox" type="checkbox" class="hx-checkbox" title="Complete" checked />
          <label for="checkbox-10" class="hx-label"></label>
        </div></td>
      </tr>
      <tr>
        <td>Obesity/Weight Loss</td>
        <td>Advice on cholesterol lowering foods.</td>
        <td>14/03/2018</td>
        <td>GP</td>
        <td class="is-text-center"><div class="hx-checkbox-control">
          <input id="checkbox-11" name="11-checkbox" type="checkbox" class="hx-checkbox" title="Complete" checked />
          <label for="checkbox-11" class="hx-label"></label>
        </div></td>
      </tr>
       <tr>
        <td>Hyperlipidemia</td>
        <td>Refer to dietition for advice and education, reduction in saturated fats.</td>
        <td>14/03/2018</td>
        <td>GP</td>
        <td class="is-text-center"><div class="hx-checkbox-control">
          <input id="checkbox-12" name="12-checkbox" type="checkbox" class="hx-checkbox" title="Complete" checked />
          <label for="checkbox-12" class="hx-label"></label>
        </div></td>
      </tr>
      <tr>
        <td>Obesity/Weight Loss</td>
        <td>Advice on cholesterol lowering foods.</td>
        <td>14/03/2018</td>
        <td>GP</td>
        <td class="is-text-center"><div class="hx-checkbox-control">
          <input id="checkbox-13" name="13-checkbox" type="checkbox" class="hx-checkbox" title="Complete" checked />
          <label for="checkbox-13" class="hx-label"></label>
        </div></td>
      </tr>
    </tbody>
  </table>
    </div>
     <ul class="hx-pagination is-sticky">
          <li class="is-first is-disabled"><a  href="">First</a></li>
          <li class="is-prev"><a  href="">Previous</a></li>
          <li class="is-current"><a href="">1</a></li>
          <li><a href="">2</a></li>
          <li><a href="">3</a></li>
          <li><a href="">4</a></li>
          <li><a href="">5</a></li>
          <li><a href="">6</a></li>
          <li><a href="">7</a></li>
          <li class="is-next"><a href="">Next</a></li>
          <li class="is-last"><a href="">Last</a></li>
        </ul>
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
  .tableContainer{
    height:25rem;
    overflow:auto;
  }
</style>
