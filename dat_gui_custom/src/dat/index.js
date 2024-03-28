/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import Color from './color/Color.js';
import math from './color/math.js';
import interpret from './color/interpret.js';

import Controller from './controllers/Controller.js';
import BooleanController from './controllers/BooleanController.js';
import OptionController from './controllers/OptionController.js';
import StringController from './controllers/StringController.js';
import NumberController from './controllers/NumberController.js';
import NumberControllerBox from './controllers/NumberControllerBox.js';
import NumberControllerSlider from './controllers/NumberControllerSlider.js';
import FunctionController from './controllers/FunctionController.js';
import ColorController from './controllers/ColorController.js';
import CustomController from './controllers/CustomController.js';

import domImport from './dom/dom';
import GUIImport from './gui/GUI';

export const color = {
  Color: Color,
  math: math,
  interpret: interpret
};

export const controllers = {
  Controller: Controller,
  BooleanController: BooleanController,
  OptionController: OptionController,
  StringController: StringController,
  NumberController: NumberController,
  NumberControllerBox: NumberControllerBox,
  NumberControllerSlider: NumberControllerSlider,
  FunctionController: FunctionController,
  ColorController: ColorController,
  CustomController: CustomController
};

export const dom = { dom: domImport };

export const gui = { GUI: GUIImport };

export const GUI = GUIImport;

export default {
  color,
  controllers,
  dom,
  gui,
  GUI
};
