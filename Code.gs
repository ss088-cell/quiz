function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function getQuestions() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('QuizData');
  var data = sheet.getDataRange().getValues();
  var questions = [];
  for (var i = 1; i < data.length; i++) {
    var question = {
      question: data[i][0],
      options: [data[i][1], data[i][2], data[i][3], data[i][4]],
      correctAnswer: data[i][5]
    };
    questions.push(question);
  }
  return questions;
}

