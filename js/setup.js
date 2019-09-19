'use strict';

var WIZARD_COUNT = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var HIDDEN_CLASS = 'hidden';

var setupElement = document.querySelector('.setup');
var setupSimilarElement = document.querySelector('.setup-similar');
var setupSimilarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.getElementById('similar-wizard-template').content;

var showSetup = function () {
  setupElement.classList.remove(HIDDEN_CLASS);
};

var showSimilarSetup = function () {
  setupSimilarElement.classList.remove(HIDDEN_CLASS);
};

var getRandomFromRange = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getName = function () {
  return NAMES[getRandomFromRange(0, NAMES.length)] + ' ' + SURNAMES[getRandomFromRange(0, SURNAMES.length)];
};

var generateWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARD_COUNT; i++) {
    wizards.push({
      name: getName(),
      coatColor: COAT_COLORS[getRandomFromRange(0, COAT_COLORS.length)],
      eyesColor: EYE_COLORS[getRandomFromRange(0, EYE_COLORS.length)]
    });
  }

  return wizards;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    var template = similarWizardTemplate.cloneNode(true);

    template.querySelector('.setup-similar-label').textContent = wizards[i].name;
    template.querySelector('.wizard-coat').setAttribute('fill', wizards[i].coatColor);
    template.querySelector('.wizard-eyes').setAttribute('fill', wizards[i].eyesColor);

    fragment.appendChild(template);
  }

  setupSimilarListElement.appendChild(fragment);
};

var init = function () {
  showSetup();
  var wizards = generateWizards();
  renderWizards(wizards);
  showSimilarSetup();
};

init();
