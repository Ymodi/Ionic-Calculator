var app = angular.module('starter.controllers', ['pascalprecht.translate'])
var translationsEN = {
	VARIABLE_REPLACEMENT: 'Selected Language is:',
	PASSED_AS_TEXT: 'Change Language',
	SELECT_LANGUAGE: 'Select Language',
	Sample: 'Sample Steps',
	Step1: 'Step 1',
	Step1Detail: 'Click on a number',
	Step2: 'Step 2:',
	Step2Detail: 'Click on an operand',
	Step3: 'Step 3:',
	Step3Detail: 'Click on another number',
	Step4: 'Step 4',
	Step4Detail: 'Click on = sign',
	Result: 'Result will be displayed in the text box',
	FUNCTIONSSUPPORTED: 'Addition,Subtraction,Mutltiplication,Division,Square and SquareRoot',
	CHOOSELANGUAGE: 'Choose Language',
	TITLE: 'ENGLISH'
}

var translationsFR = {
	VARIABLE_REPLACEMENT: 'Langue sélectionnée est:{{name}}',
	PASSED_AS_TEXT: 'Passé sous forme de texte',
	SELECT_LANGUAGE: 'Choisir la langue',
	Sample: 'échantillon pas',
	Step1: 'étape 1',
	Step1Detail: 'Cliquez sur un numéro',
	Step2: 'étape 2:',
	Step2Detail: 'Cliquez sur un opérande',
	Step3: 'étape 3:',
	Step3Detail: 'Cliquez sur un autre numéro',
	Step4: 'étape 4',
	Step4Detail: 'Cliquez sur = signe',
	Result: 'Le résultat s\'affiche dans la zone de texte',
	FUNCTIONSSUPPORTED: 'Addition, soustraction, multiplication multiple, division, carré et racine carrée',
	CHOOSELANGUAGE: 'Choisissez la langue',
	TITLE: 'FRANÇAIS'
}

var translationsHINDI = {
	VARIABLE_REPLACEMENT: 'चयनित भाषा है:',
	PASSED_AS_TEXT: 'भाषा बदलो',
	SELECT_LANGUAGE: 'भाषा चुनिए',
	Sample: 'नमूना कदम',
	Step1: 'चरण 1:',
	Step1Detail: 'एक नंबर पर क्लिक करें',
	Step2: 'चरण 2:',
	Step2Detail: 'एक संकार्य पर क्लिक करें',
	Step3: 'चरण 3:',
	Step3Detail: 'दूसरे नंबर पर क्लिक करें',
	Step4: 'चरण 4:',
	Step4Detail: 'पर क्लिक करें = हस्ताक्षर',
	Result: 'परिणाम पाठ बॉक्स में प्रदर्शित किया जाएगा',
	FUNCTIONSSUPPORTED: 'इसके अलावा, घटाव, Mutltiplication, विभाजन, वर्ग और वर्गमूल',
	CHOOSELANGUAGE: 'भाषा चुनें',
	TITLE: 'हिंदी'
}
var translationsGUJARATI = {
	VARIABLE_REPLACEMENT: 'પસંદ કરેલ ભાષા છે:',
	PASSED_AS_TEXT: 'ભાષા બદલો',
	SELECT_LANGUAGE: 'ભાષા પસંદ કરો',
	Sample: 'નમૂનો પગલાંઓ',
	Step1: 'પગલું 1:',
	Step1Detail: 'એક નંબર પર ક્લિક કરો',
	Step2: 'પગલું 2:',
	Step2Detail: 'એક ઑપેરન્ડ પર ક્લિક કરો',
	Step3: 'પગલું 3:',
	Step3Detail: 'બીજા નંબર પર ક્લિક કરો',
	Step4: 'પગલું 4:',
	Step4Detail: 'પર ક્લિક કરો = સાઇન',
	Result: 'પરિણામ લખાણ બોક્સમાં પ્રદર્શિત કરવામાં આવશે',
	FUNCTIONSSUPPORTED: 'સરવાળો, બાદબાકી, Mutltiplication, વિભાગ, સ્ક્વેર અને વર્ગમૂળની',
	CHOOSELANGUAGE: 'ભાષા પસંદ કરો',
	TITLE: 'ગુજરાતી'
}

app.config(function ($translateProvider) {
	$translateProvider.translations('en', translationsEN);
	$translateProvider.translations('fr', translationsFR);
	$translateProvider.translations('hindi', translationsHINDI);
	$translateProvider.translations('gujarati', translationsGUJARATI);

	$translateProvider.preferredLanguage('en');
	$translateProvider.fallbackLanguage('en');


})

.controller('ChatsCtrl', function ($scope, Chats) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	$scope.chats = Chats.all();
	$scope.remove = function (chat) {
		Chats.remove(chat);
	};
})

.controller('ProfileCtrl', function ($scope) {

})

.controller('LanguageCtrl', function ($scope, $translate) {

	$scope.selectedLanguage = "";

	$scope.language = [{
			value: "en",
			title: "English"
			}, {
			value: "fr",
			title: "French"
			},
		{
			value: "hindi",
			title: "Hindi"
			},
		{
			value: "gujarati",
			title: "Gujarati"
	}
	]

	$scope.languageStored = function (lang) {

		$scope.selectedLanguage = lang;

		console.log($scope.selectedLanguage);

		$translate.use(lang.value);

	}

	if ($scope.selectedLanguage == undefined) {
		$translate.use('en');
	} else {
		$translate.use($scope.selectedLanguage.value);
	}
})

.controller('CalCtrl', function ($scope) {


	$scope.display = 0;
	var operator = 0;
	var memory = [];
	var operand = 0;

	$scope.numbers = function (x) {
		memory.push(x);
		$scope.display = memory.join('') * 1;
	}
	$scope.operation = function (x) {
		operand = $scope.display;
		memory = [];
		operator = x;
	}

	$scope.clear = function () {
		$scope.display = 0;
		operand = 0;
		memory = [];
	}
	$scope.equals = function () {
		if (operator === 1) {
			$scope.display += operand;
		} else if (operator === 2) {
			$scope.display = operand - $scope.display;
		} else if (operator === 3) {
			$scope.display *= operand;
		} else if (operator === 4) {
			$scope.display = operand / $scope.display;
		}
	}

	$scope.squared = function () {
		$scope.display *= $scope.display;
	}
	$scope.squareRoot = function () {
		$scope.display = Math.sqrt($scope.display);
	}

});