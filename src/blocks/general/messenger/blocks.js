/**
 * @fileoverview General messenger display block definition.
 *
 * @license Copyright 2018 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */


/**
 * Delay actions.
 */
Blockly.Blocks['general_messenger_delay'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendDummyInput()
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('wait ('))
      .appendField(new Blockly.FieldTextInput('2'), 'time')
      .appendField('sec)');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(i18t('Delay actions for the given seconds'));
  },
};


/**
 * Display text on local screen.
 */
Blockly.Blocks['general_messenger_display_text'] = {
  init: function() {
    this.setColour(150);
    this.appendValueInput('text')
      .appendField(Blockly.BlocksTemplate.addCircle())
      .appendField(i18t('display text'))
      .setCheck('String');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};


/**
 * Clear displayed text on local screen.
 */
Blockly.Blocks['general_messenger_display_clear'] = {
  init: function() {
    this.setColour(150);
    this.appendDummyInput()
      .appendField(Blockly.BlocksTemplate.addCircle())
      .appendField(i18t('clear display'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
