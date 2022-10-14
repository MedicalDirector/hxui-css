<template>
  <article class="hx-section scrollable-y">
    <div class="hx-prose contents">
      <h1 class="hx-title pt-4">Marketing typography</h1>
      <h2 class="hx-subtitle">
        Typography appropriate for marketing and docs sites.
      </h2>
    </div>

    <hr />

    <p class="hx-prose">
      Marketing typographic styles are not part of the base import. Add the
      following to enable:
    </p>

    <pre
      class="hx-code open mb-4"
      v-highlightjs
    ><code class="scss">@use "@hxui/css/src/marketing";</code></pre>

    <div class="grid gap-4">
      <expanding-code-example
        v-for="(ex, i) in examples"
        :key="i"
        :title="ex.title"
        :code="ex.code"
        :example="ex.code"
        :visible="false"
        :withContent="ex.withContent"
      ></expanding-code-example>
    </div>
  </article>
</template>

<script>
import ExpandingCodeExample from '../components/ExpandingCodeExample.vue'

export default {
  components: {
    ExpandingCodeExample,
  },
  data() {
    return {
      examples: [
        {
          title: 'Marketing typography',
          code: `<table class="hx-table is-striped mb-0">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>.hx-title</code>
      </td>
      <td>
        <h1 class="hx-title">Title</h1>
      </td>
    </tr>
    <tr>
      <td>
        <code>.hx-subtitle</code>
      </td>
      <td>
        <p class="hx-subtitle">Subtitle</p>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;h1&gt;</code> or <code>.h1</code> with <code>.hx-prose</code>
      </td>
      <td>
        <h1 class="hx-hx-prose">h1. Marketing heading</h1>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;h2&gt;</code> or <code>.h2</code> with <code>.hx-prose</code>
      </td>
      <td>
        <h2 class="hx-prose">h2. Marketing heading</h2>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;h3&gt;</code> or <code>.h3</code> with <code>.hx-prose</code>
      </td>
      <td>
        <h3 class="hx-prose">h3. Marketing heading</h3>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;h4&gt;</code> or <code>.h4</code> with <code>.hx-prose</code>
      </td>
      <td>
        <h4 class="hx-prose">h4. Marketing heading</h4>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;h5&gt;</code> or <code>.h5</code> with <code>.hx-prose</code>
      </td>
      <td>
        <h5 class="hx-prose">h5. Marketing heading</h5>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;h6&gt;</code> or <code>.h6</code> with <code>.hx-prose</code>
      </td>
      <td>
        <h6 class="hx-prose">h6. Marketing heading</h6>
      </td>
    </tr>
    <tr>
      <td>
        <code>&lt;p&gt;</code> or <code>.p</code> with <code>.hx-hx-prose</code>
      </td>
      <td>
        <p class="hx-prose">p. Marketing paragraph</p>
      </td>
    </tr>
  </tbody>
</table>`,
        },
        {
          title: 'Lists',
          withContent: false,
          code: `<div class="hx-card__content grid phablet:grid-cols-3 gap-4">
  <div>
    <p>Use an unordered list to list things, if the order of the items doesn't matter.</p>
    <p>And a definition list <code>&lt;dl&gt;</code> is used to display name-value pairs, <br>like metadata or a dictionary definition. <br>Each term <code>&lt;dt&gt;</code> is paired with one or more definitions <code>&lt;dd&gt;</code>.</p>
    <ul>
      <li><code>&lt;ul&gt;</code> Unorder list</li>
      <li><code>&lt;ol&gt;</code> Order list</li>
      <li><code>&lt;dl&gt;</code> Definition Lists</li>
    </ul>
  </div>

  <div>
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

  <div>
    <p><strong>Definition list</strong></p>
    <dl>
      <dt>Time</dt>
      <dd>The indefinite continued progress of existence and events in the past, present, and future regarded as a whole.</dd>
      <dt>Space</dt>
      <dd>A continuous area or expanse that is free, available, or unoccupied.</dd>
      <dd>The dimensions of height, depth, and width within which all things exist and move.</dd>
    </dl>
  </div>
</div>`,
        },
        {
          title: 'Paragraphs and Inline text elements',
          code: `<table class="hx-table is-striped mb-0">
  <thead>
    <tr>
      <th>Class</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>&lt;p&gt;</code> Paragraphs</td>
      <td>
        <p>This is a paragraph.</p>
      </td>
    </tr>
    <tr>
      <td><code>&lt;mark&gt;</code> Mark</td>
      <td>
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
      </td>
    </tr>
    <tr>
      <td><code>&lt;del&gt;</code> Delete</td>
      <td>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
      </td>
    </tr>
    <tr>
      <td><code>&lt;s&gt;</code> Strikeline</td>
      <td>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
      </td>
    </tr>
    <tr>
      <td><code>&lt;ins&gt;</code> Insert</td>
      <td>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
      </td>
    </tr>
    <tr>
      <td><code>&lt;u&gt;</code> Underline</td>
      <td>
        <p><u>This line of text will render as underlined</u></p>
      </td>
    </tr>
    <tr>
      <td><code>&lt;small&gt;</code> Small</td>
      <td>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
      </td>
    </tr>
    <tr>
      <td><code>&lt;strong&gt;</code> Strong</td>
      <td>
        <p><strong>This line rendered as bold text.</strong></p>
      </td>
    </tr>
    <tr>
      <td><code>&lt;em&gt;</code> Emphasized</td>
      <td>
        <p><em>This line rendered as italicized text.</em></p>
      </td>
    </tr>
  </tbody>
</table>`,
        },
        {
          title: 'Copy',
          withContent: false,
          code: `<div class="hx-card__content grid phablet:grid-cols-2 gap-4 hx-prose">
  <div>
    <h1>FLAGYL® (METRONIDAZOLE)</h1>
    <div class="pihead">Product Information</div>
    <div>
      <h2 class="text-capitalise">1 NAME OF THE MEDICINE</h2>
      <p>Flagyl (metronidazole) 200 mg and 400 mg tablets</p>
      <p>Flagyl (metronidazole) 500 mg suppositories</p>
    </div>
    <div>
      <h2>2 QUALITATIVE AND QUANTITATIVE COMPOSITION</h2>
      <p>Flagyl tablets contain 200 mg or 400 mg metronidazole.</p>
      <p>Flagyl suppositories contain 500 mg metronidazole.</p>
      <p>
        Metronidazole is a 1-(2-hydroxyethyl)-2-methyl-5-nitroimidazole.
        It appears as white to brownish cream crystals with melting point of 159 to 162°C.
        Metronidazole in a saturated aqueous solution has a pH of between 6 and 7.5.
        Solubility at 20°C (g/100 mL): 1 in water; 0.5 in ethanol; 0.4 in chloroform;
        slightly soluble in ether, soluble in dilute acids.
      </p>
      <p>
        For the full list of excipients, see Section 6.1 List of excipients.
      </p>
    </div>
    <div>
      <h2>4 CLINICAL PARTICULARS</h2>
      <h3>4.1 THERAPEUTIC INDICATIONS</h3>
      <h4>Anaerobic Infections</h4>
      <h5>Oral</h5>
      <p>
        Treatment of infections in which anaerobic bacteria have been identified or are suspected as pathogens,
        particularly <i>Bacteroides fragilis</i> and other species of bacteroides, and other species such as fusobacteria,
        eubacteria, clostridia and anaerobic streptococci. Flagyl has been used successfully in septicaemia; bacteraemia;
        brain abscess; necrotising pneumonia; osteomyelitis; puerperal sepsis; pelvic abscess; pelvic cellulitis;
        postoperative wound infections.
      </p>
      <h3>4.2 DOSE AND METHOD OF ADMINISTRATION</h3>
      <h4>Suppositories</h4><a></a>
      <h5>Prevention of Anaerobic Infections in High Risk Situations</h5>
      <p>
        A variety of dosage regimens have been tried, but the optimal variety of dosage regimen for prophylaxis against
        anaerobic infection still remains to be established. Based on the generally accepted principles of prophylactic use
        of antibiotics and the limited documented clinical experience on the prophylactic use of metronidazole, the
        following dosage regimens are suggested.
      </p>
      <h6>1. In Appendicectomy</h6>
      <p>(Note: As prevention of infection requires that adequate tissue concentrations of the drug should be achieved at
        the time of surgery and as it may take approximately 8 hours to achieve peak serum levels after the suppository, the
        need for intravenous infusion of metronidazole should be considered if the interval between the first suppository
        and surgery is less than 8 hours.)
      </p>
      <p>
        Adults and children over 12 years: two 500 mg suppositories inserted into the rectum at diagnosis (ie. before
        surgery) and thereafter every eight hours for 48 hours after surgery.
      </p>
    </div>
  </div>

  <div>
    <div class="prolog">
      <h1>Metronidazole (Systemic)</h1>
      <p>For a listing of dosage forms and brand names, see <span class="iref">Dosage Forms</span> section(s).</p>
    </div>

    <div class="sect2">
      <div class="mono-anchor-top">
        <h2>Therapeutic Class</h2>
      </div>
      <div class="classgroup">
        <span class="class">Antibacterial</span>
        <span class="drugs"></span>
      </div>
      <div class="classgroup">
        <span class="class">Antiprotozoal</span>
        <span class="drugs"></span>
      </div>
    </div>

    <div class="sect2">
      <div class="mono-anchor-top">
        <h2>Indications</h2>
      </div>

      <div class="note">
        <span class="title">Note:</span>
        <p class="note-first">
          Bracketed information in the <i>Indications</i> section refers to uses that are not
          included in the Australian approved product information.
        </p>
      </div>

      <div class="sect3">
        <h3>■ General considerations</h3>
        <p>
          Metronidazole is effective <i>in vitro</i> against several species of anaerobic bacteria, particularly <i>Bacteroides
          fragilis</i> and other species of bacteroides, and other species such as <i>Clostridia</i>,
          <i>Eubacteria</i>, <i>Fusobacteria</i>, and anaerobic <i>Streptococci</i>. The minimum inhibitory
          concentration (MIC) for most susceptible anaerobes is less than 6.2 micrograms per mL. Metronidazole is not
          effective against aerobic and facultative anaerobic bacteria.
        </p>
        <p>
          Metronidazole is also active against a wide range of pathogenic microorganisms, notably <i>Trichomonas
          vaginalis</i> and other trichomonads, <i>Entamoeba histolytica</i>, <i>Giardia lamblia</i>, <i>Balantidium
          coli</i> and the causative organisms of acute ulcerative gingivitis.</p>
        <p>
          Intravenous metronidazole is indicated when immediate anti-anaerobic chemotherapy is required. Intravenous,
          and rectal metronidazole, are indicated for treatment of anaerobic infections in patients when oral
          administration is not possible.
        </p>
      </div>
      <div class="sect3">
        <h3>■ Accepted</h3>

        <div class="entry">
          <div class="indication">
            <span class="condition">Amoebiasis</span>
            <span class="intenduse"> (treatment)</span>
          </div>
          <p>
            Metronidazole is indicated in the treatment of all forms of amoebiasis (intestinal, extraintestinal, and
            that of symptomless cyst passers).
          </p>
        </div>

        <div class="entry">
          <div class="indication">
            <span class="condition">Bacteraemia</span>
            <span class="intenduse"> (treatment)</span>
          </div>
          <div class="indication">
            <span class="condition">Septicaemia, bacterial</span>
            <span class="intenduse"> (treatment)</span>
          </div>
          <p>
            Metronidazole is indicated in the treatment of bacteraemia or bacterial septicaemia caused by susceptible
            organisms.
          </p>
        </div>

        <div class="entry">
          <div class="indication">
            <span class="condition">Bone infections</span>
            <span class="intenduse"> (treatment)</span>
          </div>
          <p>Metronidazole is indicated in the treatment of osteomyelitis caused by susceptible organisms.</p>
        </div>

        <div class="entry">
          <div class="indication">
            <span class="condition">Brain abscess</span>
            <span class="intenduse"> (treatment)</span>
          </div>
          <p>Metronidazole is indicated in the treatment of brain abscess caused by susceptible organisms.</p>
        </div>

        <div class="entry">
          <div class="indication">
            <span class="condition">Diarrhoea, antibiotic-associated</span>
            <span class="intenduse"> (treatment)</span>
          </div>
          <p>
            Metronidazole is indicated in the treatment of antibiotic-associated diarrhoea caused by
            <i>Clostridium difficile</i>.
          </p>
        </div>

        <div class="entry">
          <div class="indication">
            <span class="condition">Giardiasis</span>
            <span class="intenduse"> (treatment)</span>
          </div>
          <p>Metronidazole is indicated in the treatment of giardiasis.</p>
        </div>

        <div class="entry">
          <div class="indication">
            <span class="condition">Gingivitis, acute, ulcerative</span>
            <span class="intenduse"> (treatment)</span>
          </div>
          <p>
            Metronidazole is indicated in the treatment of acute ulcerative
            gingivitis caused by susceptible organisms.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
        },
      ],
    }
  },
}
</script>
