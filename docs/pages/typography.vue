<template>
  <div id="typo">
    <h1 class="hx-title">Typography</h1>
    <h2 class="hx-subtitle">Simple typography to add depth to your page</h2>

    <hr />

    <expanding-code-example
      v-for="(example, i) in examples"
      :key="i"
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
  data() {
    return {
      examples: [
        {
          title: 'Titles',
          code: `
<p>There are <strong>2 types</strong> of titles:</p>
<ul>
  <li><code>.hx-title</code></li>
  <li><code>.hx-subtitle</code></li>
</ul>
<br>
<h1 class="hx-title">Title</h1>
<h2 class="hx-subtitle">Subtitle</h2>
          `,
        },
        {
          title: 'Headings',
          code: `
<p>There are <strong>6 sizes</strong> available:</p>
<ul>
  <li><code>&lt;h1&gt;</code> or <code>.h1</code></li>
  <li><code>&lt;h2&gt;</code> or <code>.h2</code></li>
  <li><code>&lt;h3&gt;</code> or <code>.h3</code></li>
  <li><code>&lt;h4&gt;</code> or <code>.h4</code></li>
  <li><code>&lt;h5&gt;</code> or <code>.h5</code></li>
  <li><code>&lt;h6&gt;</code> or <code>.h6</code></li>
</ul>
<br>
<h1>h1. HxUI heading</h1>
<h2>h2. HxUI heading</h2>
<h3>h3. HxUI heading</h3>
<h4>h4. HxUI heading</h4>
<h5>h5. HxUI heading</h5>
<h6>h6. HxUI heading</h6>
          `,
        },
        {
          title:
            'Heading example - Content headings (product information and monograph)',
          code: `
<div class="hx-columns">
  <div class="hx-column">
    <h1>FLAGYL® (METRONIDAZOLE)</h1>
    <div class="pihead">Product Information</div>
    <div>
      <h2 class="is-text-capitalise">1 NAME OF THE MEDICINE</h2>
      <p>Flagyl (metronidazole) 200 mg and 400 mg tablets</p>
      <p>Flagyl (metronidazole) 500 mg suppositories</p>
    </div>
    <div>
      <h2>2 QUALITATIVE AND QUANTITATIVE COMPOSITION</h2>
      <p>Flagyl tablets contain 200 mg or 400 mg metronidazole.</p>
      <p>Flagyl suppositories contain 500 mg metronidazole.</p>
      <p>Metronidazole is a 1-(2-hydroxyethyl)-2-methyl-5-nitroimidazole. It appears as white to brownish cream crystals with melting point of 159 to 162°C. Metronidazole in a saturated aqueous solution has a pH of between 6 and 7.5. Solubility at 20°C (g/100 mL): 1 in water; 0.5 in ethanol; 0.4 in chloroform; slightly soluble in ether, soluble in dilute acids.</p><p>For the full list of excipients, see Section 6.1 List of excipients.</p>
    </div>
    <div><h2>4 CLINICAL PARTICULARS</h2>
      <h3>4.1 THERAPEUTIC INDICATIONS</h3><h4>Anaerobic Infections</h4><a></a><h5>Oral</h5>
      <p>Treatment of infections in which anaerobic bacteria have been identified or are suspected as pathogens,
        particularly <i>Bacteroides fragilis</i> and other species of bacteroides, and other species such as fusobacteria,
        eubacteria, clostridia and anaerobic streptococci. Flagyl has been used successfully in septicaemia; bacteraemia;
        brain abscess; necrotising pneumonia; osteomyelitis; puerperal sepsis; pelvic abscess; pelvic cellulitis;
        postoperative wound infections.</p>
      <h3>4.2 DOSE AND METHOD OF ADMINISTRATION</h3>

        <h4>Suppositories</h4><a></a>
        <h5>Prevention of Anaerobic Infections in High
        Risk Situations</h5>
      <p>A variety of dosage regimens have been tried, but the optimal variety of dosage regimen for prophylaxis against
        anaerobic infection still remains to be established. Based on the generally accepted principles of prophylactic use
        of antibiotics and the limited documented clinical experience on the prophylactic use of metronidazole, the
        following dosage regimens are suggested.</p><a></a><h6>1. In Appendicectomy</h6>
      <p>(Note: As prevention of infection requires that adequate tissue concentrations of the drug should be achieved at
        the time of surgery and as it may take approximately 8 hours to achieve peak serum levels after the suppository, the
        need for intravenous infusion of metronidazole should be considered if the interval between the first suppository
        and surgery is less than 8 hours.)</p>
      <p>Adults and children over 12 years: two 500 mg suppositories inserted into the rectum at diagnosis (ie. before
        surgery) and thereafter every eight hours for 48 hours after surgery.</p>
    </div>
  </div>
  <div class="hx-column">
   <div class="prolog"><h1>Metronidazole (Systemic)</h1>
    <p>For a listing of dosage forms and brand names, see <span class="iref">Dosage Forms</span> section(s).</p></div>
<div class="sect2">
    <div class="mono-anchor-top"><h2>Therapeutic Class</h2></div>
    <div class="classgroup"><span class="class">Antibacterial</span><span class="drugs"></span></div>
    <div class="classgroup"><span class="class">Antiprotozoal</span><span class="drugs"></span></div>
</div>
<div class="sect2">
    <div class="mono-anchor-top"><a></a>
        <h2>Indications</h2></div>
    <div class="note"><span class="title">Note:</span>
        <p class="note-first">Bracketed information in the <i>Indications</i> section refers to uses that are not
            included in the Australian approved product information.</p></div>
    <div class="sect3"><h3>■ General considerations</h3>
        <p>Metronidazole is effective <i>in vitro</i> against several species of anaerobic bacteria, particularly <i>Bacteroides
            fragilis</i> and other species of bacteroides, and other species such as <i>Clostridia</i>,
            <i>Eubacteria</i>, <i>Fusobacteria</i>, and anaerobic <i>Streptococci</i>. The minimum inhibitory
            concentration (MIC) for most susceptible anaerobes is less than 6.2 micrograms per mL. Metronidazole is not
            effective against aerobic and facultative anaerobic bacteria.</p>
        <p>Metronidazole is also active against a wide range of pathogenic microorganisms, notably <i>Trichomonas
            vaginalis</i> and other trichomonads, <i>Entamoeba histolytica</i>, <i>Giardia lamblia</i>, <i>Balantidium
            coli</i> and the causative organisms of acute ulcerative gingivitis.</p>
        <p>Intravenous metronidazole is indicated when immediate anti-anaerobic chemotherapy is required. Intravenous,
            and rectal metronidazole, are indicated for treatment of anaerobic infections in patients when oral
            administration is not possible.</p></div>
    <div class="sect3"><h3>■ Accepted</h3>
        <div class="entry">
            <div class="indication"><span class="condition">Amoebiasis</span><span class="intenduse"> (treatment)</span>
            </div>
            <p>Metronidazole is indicated in the treatment of all forms of amoebiasis (intestinal, extraintestinal, and
                that of symptomless cyst passers).</p></div>
        <div class="entry">
            <div class="indication"><span class="condition">Bacteraemia</span><span
                    class="intenduse"> (treatment)</span></div>
            <div class="indication"><span class="condition">Septicaemia, bacterial</span><span class="intenduse"> (treatment)</span>
            </div>
            <p>Metronidazole is indicated in the treatment of bacteraemia or bacterial septicaemia caused by susceptible
                organisms.</p></div>
        <div class="entry">
            <div class="indication"><span class="condition">Bone infections</span><span
                    class="intenduse"> (treatment)</span></div>
            <p>Metronidazole is indicated in the treatment of osteomyelitis caused by susceptible organisms.</p></div>
        <div class="entry">
            <div class="indication"><span class="condition">Brain abscess</span><span
                    class="intenduse"> (treatment)</span></div>
            <p>Metronidazole is indicated in the treatment of brain abscess caused by susceptible organisms.</p></div>
        <div class="entry">
            <div class="indication"><span class="condition">Diarrhoea, antibiotic-associated</span><span
                    class="intenduse"> (treatment)</span></div>
            <p>Metronidazole is indicated in the treatment of antibiotic-associated diarrhoea caused by <i>Clostridium
                difficile</i>.</p></div>
        <div class="entry">
            <div class="indication"><span class="condition">Giardiasis</span><span class="intenduse"> (treatment)</span>
            </div>
            <p>Metronidazole is indicated in the treatment of giardiasis.</p></div>

        <div class="entry">
            <div class="indication"><span class="condition">Gingivitis, acute, ulcerative</span><span class="intenduse"> (treatment)</span>
            </div>
            <p>Metronidazole is indicated in the treatment of acute ulcerative gingivitis caused by susceptible
                organisms.</p></div>

    </div>
</div>

  </div>

</div>
          `,
        },
        {
          title: 'Heading examples - Headings in a form or panel',
          code: `
<div class="hx-columns">
  <div class="hx-column">
    <h3>New Recipe</h3>
    <div class="hx-input-control">
      <input  class="hx-input" formcontrolname="Name" required="" type="text" tabindex="1">
      <label  class="hx-label">Recipe Name <sup>*</sup></label>
      <div class="hx-help">Please enter the recipe name</div>

      <div class="hx-card mb-4"><div class="hx-card-content recipe-card"><div class="hx-columns mt-4"><div class="hx-column is-two-thirds"><div class="hx-input-control mb-0"><textarea class="hx-textarea ng-pristine ng-invalid ktm-0 ng-touched" formcontrolname="RecipeIngredients" name="textarea-sample" placeholder="Enter ingredients" required="" rows="4" tabindex="1"></textarea><label class="hx-label" for="textarea-sample">Ingredients <sup _ngcontent-c28="">*</sup></label><div class="hx-help mb-0">Please enter the recipe ingredients</div></div></div><div class="hx-column is-one-third pt-0"><div class="hx-columns"><div class="hx-column"><div class="hx-input-control"><input class="hx-input ng-untouched ng-pristine ng-valid ktm-0" formcontrolname="Qty" required="" type="text" tabindex="1"><label class="hx-label">Qty <sup _ngcontent-c28="">*</sup></label><div class="hx-help mb-0">Quantity</div></div></div><div class="hx-column"><div class="hx-input-control pt-0"><input class="hx-input ng-untouched ng-pristine ng-valid ktm-0" formcontrolname="Rpts" required="" type="text" tabindex="1"><label class="hx-label">Rpts <sup _ngcontent-c28="">*</sup></label><div class="hx-help mb-0">Repeats</div></div></div></div></div></div></div></div>
    </div>
  </div>
  <div class="hx-column">
     <p>See <a href="/panel-header/">Panel Header</a> and <a href="/panel/">Panel</a>
     </p>
  </div>
</div>
          `,
        },
        {
          title: 'Paragraphs and Inline text elements',
          code: `
<div class="hx-columns">
  <div class="hx-column is-4">
    <ul>
      <li><code>&lt;p&gt;</code> Paragraphs</li>
      <li><code>&lt;mark&gt;</code> Mark</li>
      <li><code>&lt;del&gt;</code> Delete</li>
      <li><code>&lt;s&gt;</code> Strikeline</li>
      <li><code>&lt;ins&gt;</code> Insert</li>
      <li><code>&lt;u&gt;</code> Underline</li>
      <li><code>&lt;small&gt;</code> Small</li>
      <li><code>&lt;strong&gt;</code> Strong</li>
      <li><code>&lt;em&gt;</code> Emphasized</li>
    </ul>
  </div>
  <div class="hx-column">
    <p>This is a paragraph.</p>
    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
    <p><del>This line of text is meant to be treated as deleted text.</del></p>
    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
    <p><u>This line of text will render as underlined</u></p>
    <p><small>This line of text is meant to be treated as fine print.</small></p>
    <p><strong>This line rendered as bold text.</strong></p>
    <p><em>This line rendered as italicized text.</em></p>
  </div>
</div>
          `,
        },
        {
          title: 'Lists',
          code: `
<div class="hx-columns">
  <div class="hx-column is-4">
    <p>Use an unordered list to list things, if the order of the items doesn't matter.</p>
    <p>And a definition list <code>&lt;dl&gt;</code> is used to display name-value pairs, <br>like metadata or a dictionary definition. <br>Each term <code>&lt;dt&gt;</code> is paired with one or more definitions <code>&lt;dd&gt;</code>.</p>
    <ul>
      <li><code>&lt;ul&gt;</code> Unorder list</li>
      <li><code>&lt;ol&gt;</code> Order list</li>
      <li><code>&lt;dl&gt;</code> Definition Lists</li>
    </ul>
  </div>
  <div class="hx-column is-2 is-offset-1">
    <p><strong>Unordered lists</strong></p>
    <ul>
      <li>List item</li>
      <li>List item</li>
      <ul>
        <li>List item</li>
      </ul>
    </ul>
    <p><strong>Ordered lists</strong></p>
    <ol>
      <li>List item</li>
      <li>List item</li>
      <ol>
        <li>List item</li>
      </ol>
    </ol>
  </div>
  <div class="hx-column is-3">
    <p><strong>Definition list</strong></p>
    <dl>
      <dt>Time</dt>
      <dd>The indefinite continued progress of existence and events in the past, present, and future regarded as a whole.</dd>
      <dt>Space</dt>
      <dd>A continuous area or expanse that is free, available, or unoccupied.</dd>
      <dd>The dimensions of height, depth, and width within which all things exist and move.</dd>
    </dl>
  </div>
</div>
          `,
        },
        {
          title: 'Alignments',
          code: `
<table class="hx-table is-striped">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.is-text-nowrap</code></td>
      <td class="is-text-nowrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-text-truncate</code></td>
      <td class="is-text-truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-text-center</code></td>
      <td class="is-text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
  </tbody>
</table>
          `,
        },
        {
          title: 'Transformation',
          code: `
<table class="hx-table is-striped">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.is-text-lowercase</code></td>
      <td class="is-text-lowercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-text-uppercase</code></td>
      <td class="is-text-uppercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-text-capitalise</code></td>
      <td class="is-text-capitalise">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
  </tbody>
</table>
          `,
        },
        {
          title: 'Weights & italics',
          code: `
<table class="hx-table is-striped">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.is-text-weight-normal</code></td>
      <td class="is-text-weight-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-text-bold</code></td>
      <td class="is-text-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-text-italic</code></td>
      <td class="is-text-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
  </tbody>
</table>
          `,
        },
        {
          title: 'Colours',
          code: `
<p>Easily colour text with text colour classes</p>
<table class="hx-table is-striped">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td><code>.is-black</code></td>
      <td class="is-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-white</code></td>
      <td class="is-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>

<tr>
      <td><code>.is-light</code></td>
      <td class="is-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-lighter</code></td>
      <td class="is-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>

      <tr>
      <td><code>.is-lightest</code></td>
      <td class="is-lightest">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-dark</code></td>
      <td class="is-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-primary</code></td>
      <td class="is-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-info</code></td>
      <td class="is-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-warning</code></td>
      <td class="is-warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</td>
    </tr>
    <tr>
      <td><code>.is-danger</code></td>
      <td><span class="is-danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span></td>
    </tr>
  </tbody>
</table>
          `,
        },
      ],
    }
  },
  components: {
    ExpandingCodeExample,
  },
}
</script>

<style lang="css"></style>
