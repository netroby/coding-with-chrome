/**
 * @fileoverview Sphero SPRK+ blocks for Blockly.
 *
 * @license Copyright 2015 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */


/**
 * Sphero start Block.
 */
Blockly.Blocks['sphero_sprk_plus_start'] = {
  init: function() {
    this.setDeletable(false);
    this.setHelpUrl('');
    this.setColour(65);
    this.appendDummyInput()
      .appendField(Blockly.BlocksTemplate.runningMan())
      .appendField(i18t('Programm Start'));
    this.setNextStatement(true);
    this.setTooltip(i18t('Defines the start of the program'));
  },
};


/**
 * Sphero roll.
 */
Blockly.Blocks['sphero_sprk_plus_roll'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('speed').setCheck('Number')
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('roll speed('));
    this.appendDummyInput().appendField(')');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(i18t('Move the Sphero in a direction'));
  },
};


/**
 * Sphero roll step.
 */
Blockly.Blocks['sphero_sprk_plus_roll_step'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('speed').setCheck('Number')
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('roll with'));
    this.appendValueInput('heading')
      .appendField(i18t('speed and'));
    this.appendDummyInput()
      .appendField(i18t('heading'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(i18t('Move the Sphero in a direction'));
  },
};


/**
 * Sphero roll time.
 */
Blockly.Blocks['sphero_sprk_plus_roll_time'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('time').setCheck('Number')
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('roll for'));
    this.appendValueInput('speed').setCheck('Number')
      .appendField(i18t('sec with'));
    this.appendValueInput('heading')
      .appendField(i18t('speed and'));
    this.appendDummyInput()
      .appendField(i18t('heading'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(
      i18t('Move the Sphero in a direction for the given number of seconds'));
  },
};


/**
 * Sphero roll time.
 */
Blockly.Blocks['sphero_sprk_plus_rotate_time'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendDummyInput()
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('rotate'))
      .appendField(new Blockly.FieldAngle(0), 'heading')
      .appendField(i18t('for'));
    this.appendValueInput('time').setCheck('Number')
      .appendField(i18t('sec'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(
      i18t('Move the Sphero in a direction for the given number of seconds'));
  },
};


/**
 * Sphero move raw.
 */
Blockly.Blocks['sphero_sprk_plus_move_raw'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('time').setCheck('Number')
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('roll for'));
    this.appendValueInput('speed').setCheck('Number')
      .appendField(i18t('sec with'));
    this.appendDummyInput('heading')
      .appendField(i18t('speed and'))
      .appendField(new Blockly.FieldAngle(0), 'heading')
      .appendField(i18t('heading'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(
      i18t('Move the Sphero in a direction for the given number of seconds'));
  },
};


/**
 * Enable / disable stabilization.
 */
Blockly.Blocks['sphero_sprk_plus_stabilization'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendDummyInput()
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('set stabilization('))
      .appendField(new Blockly.FieldDropdown([
        [i18t('enable'), 'enable'],
        [i18t('disable'), 'disable'],
      ]), 'enable')
      .appendField(')');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(i18t(''));
  },
};


/**
 * Sphero heading.
 */
Blockly.Blocks['sphero_sprk_plus_heading'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('heading')
      .setCheck('Number')
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('set heading('));
    this.appendDummyInput()
      .appendField(')');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(i18t('Sets Sphero heading.'));
  },
};


/**
 * Sphero Speed.
 */
Blockly.Blocks['sphero_sprk_plus_speed'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('speed')
      .setCheck('Number')
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('set speed('))
      .appendField(new Blockly.FieldAngle(0), 'speed')
      .appendField(')');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(i18t('Sets Sphero speed.'));
  },
};


/**
 * Sphero rgb.
 */
Blockly.Blocks['sphero_sprk_plus_rgb'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('colour')
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('set color ('));
    this.appendDummyInput().appendField(')');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(i18t('Sets the leds on the Sphero ball.'));
  },
};


/**
 * Sphero rgb.
 */
Blockly.Blocks['sphero_sprk_plus_blink'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendValueInput('colour')
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('set color blink ('));
    this.appendDummyInput().appendField(')');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(i18t('Sets the leds on the Sphero ball.'));
  },
};


/**
 * Sphero backlight.
 */
Blockly.Blocks['sphero_sprk_plus_backlight'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendDummyInput()
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('set backlight ('))
      .appendField(new Blockly.FieldTextInput('254'), 'brightness')
      .appendField('(0 - 254)')
      .appendField(')');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(i18t('Sets the back-light on the Sphero ball.'));
  },
};


/**
 * Sphero stop.
 */
Blockly.Blocks['sphero_sprk_plus_stop'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendDummyInput()
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('stop motors('))
      .appendField(new Blockly.FieldDropdown([
        [i18t('when finished'), 'when finished'],
        [i18t('immediately'), 'immediately'],
      ]), 'immediately')
      .appendField(')');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(i18t('Stop all motors immediately or after the last ' +
      'command has finished.'));
  },
};


/**
 * Clear displayed text on local screen.
 */
Blockly.Blocks['sphero_sprk_plus_reset'] = {
  init: function() {
    this.setColour(150);
    this.appendDummyInput()
      .appendField(Blockly.BlocksTemplate.addCircle())
      .appendField(i18t('reset device'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};


/**
 * Collision detected.
 */
Blockly.Blocks['sphero_sprk_plus_collision'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendDummyInput()
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('on collision'));
    this.appendStatementInput('CODE')
      .appendField(i18t('@@BLOCKS__DO'))
      .setAlign(Blockly.ALIGN_CENTRE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(i18t('Detect collision.'));
  },
};


/**
 * Position change.
 */
Blockly.Blocks['sphero_sprk_plus_position_change'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(260);
    this.appendDummyInput()
      .appendField(Blockly.BlocksTemplate.point())
      .appendField(i18t('on position change'));
    this.appendStatementInput('CODE')
      .appendField(i18t('@@BLOCKS__DO'))
      .setAlign(Blockly.ALIGN_CENTRE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(i18t('Detect position change.'));
  },
};

