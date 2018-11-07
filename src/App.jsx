import React, { Component } from "react";
import Knob from "./Knob";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <div class="instrument-chassis">
          <div class="control-interface">
            <div class="control knob" data-function="vco-freq">
              <Knob size="100" labelText="Volume" />
            </div>
            <div class="control switch" data-function="vco-wave" />
            <div class="control knob" data-function="vco-pulse-width">
              <Knob size="100" labelText="Volume" />
            </div>
            <div class="control knob" data-function="vco-mix">
              <Knob size="100" labelText="Volume" />
            </div>
            <div class="control knob" data-function="vcf-cutoff-freq">
              <Knob size="100" labelText="Volume" />
            </div>
            <div class="control knob" data-function="vcf-resonance">
              <Knob size="100" labelText="Volume" />
            </div>
            <div class="control switch" data-function="vca-mode" />
            <div class="control knob" data-function="vca-volume">
              <Knob size="100" labelText="Volume" />
            </div>
            <div class="control knob" data-function="vco-glide">
              <Knob size="100" labelText="Volume" />
            </div>
            <div class="control switch" data-function="vco-mod-source" />
            <div class="control knob" data-function="vco-mod-amount">
              <Knob size="100" labelText="Volume" />
            </div>
            <div class="control switch" data-function="vco-mod-destination" />
            <div class="control switch" data-function="vcf-mode" />
            <div class="control switch" data-function="vcf-mod-source" />
            <div class="control knob" data-function="vcf-mod-amount">
              <Knob size="100" labelText="Volume" />
            </div>
            <div class="control switch" data-function="vcf-mod-polarity" />
            <div class="control led" data-function="midi-led" />
            <div class="control knob" data-function="tempo-gate">
              <Knob size="100" labelText="Volume" />
            </div>
            <div class="control knob" data-function="lfo-rate">
              <Knob size="100" labelText="Volume" />
            </div>
            <div class="control switch" data-function="lfo-wave" />
            <div class="control knob" data-function="env-attack">
              <Knob size="100" labelText="Volume" />
            </div>
            <div class="control switch" data-function="env-sustain" />
            <div class="control knob" data-function="env-decay">
              <Knob size="100" labelText="Volume" />
            </div>
            <div class="control knob" data-function="vc-mix">
              <Knob size="100" labelText="Volume" />
            </div>
          </div>
          <div class="patch-interface">
            <div class="patch patch-in" data-function="ext-audio-in" />
            <div class="patch patch-in" data-function="mix-cv-in" />
            <div class="patch patch-in" data-function="vca-cv-in" />
            <div class="patch patch-out" data-function="vca-out" />
            <div class="patch patch-out" data-function="noise-out" />
            <div class="patch patch-in" data-function="vcf-cutoff-in" />
            <div class="patch patch-in" data-function="vcf-resonance-in" />
            <div class="patch patch-out" data-function="vcf-out" />
            <div class="patch patch-in" data-function="vco-1v-oct-in" />
            <div class="patch patch-in" data-function="vco-line-fm-in" />
            <div class="patch patch-out" data-function="vco-saw-out" />
            <div class="patch patch-out" data-function="vco-pulse-out" />
            <div class="patch patch-in" data-function="vco-mod" />
            <div class="patch patch-in" data-function="lfo-rate" />
            <div class="patch patch-out" data-function="lfo-tri-out" />
            <div class="patch patch-out" data-function="lfo-sq-out" />
            <div class="patch patch-in" data-function="mix-1-in" />
            <div class="patch patch-in" data-function="mix-2-in" />
            <div class="patch patch-in" data-function="vc-mix-control-in" />
            <div class="patch patch-out" data-function="vc-mix-out" />
            <div class="patch patch-in" data-function="mult-in" />
            <div class="patch patch-out" data-function="mult-1-out" />
            <div class="patch patch-out" data-function="mult-2-out" />
            <div class="patch patch-out" data-function="assign-out" />
            <div class="patch patch-in" data-function="gate-in" />
            <div class="patch patch-out" data-function="eg-out" />
            <div class="patch patch-out" data-function="kb-out" />
            <div class="patch patch-out" data-function="gate-out" />
            <div class="patch patch-in" data-function="tempo" />
            <div class="patch patch-in" data-function="run-stop" />
            <div class="patch patch-in" data-function="reset" />
            <div class="patch patch-in" data-function="hold" />
          </div>
          <div class="sequencer-controls" />
        </div>
      </div>
    );
  }
}
export default App;
