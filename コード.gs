


//スプレッドシートから情報を取得して格納する test1
function ReadFromSpreadSheet(){
  const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  //配列を全部表示する
  SpreadsheetApp.getUi().alert(data); 
}



//スプレッドシートから情報を取得して格納する test2
function ReadFromSpreadSheet2(){
  const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  //配列を５番目だけ表示する
  SpreadsheetApp.getUi().alert(data[4]); 
}



//hogehogeフォルダを作成する　test1
function makingTeamDriveTest1() {
var teamDrive = Drive.Drives.insert({name:'hogehoge'}, Utilities.getUuid())
Logger.log(teamDrive);
}






function makingTeamDriveTest2() {
 const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  
   //配列を４番目だけ表示して
  SpreadsheetApp.getUi().alert(data[3]); 
    
   //その４番目の配列の名前のフォルダを作る
var teamDrive = Drive.Drives.insert({name:data[3]}, Utilities.getUuid())
Logger.log(teamDrive);
}


function makingTeamDriveTest3() {
 const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  
  for(var i = 0; i < 10; i++){
var teamDrive = Drive.Drives.insert({name:data[i]}, Utilities.getUuid())
}

Logger.log(teamDrive);
}



//以下本番用 238人ぶんのフォルダを作成するGAS



function makingTeamDrive() {
 const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  
  for(var i = 0; i < 238; i++){
var teamDrive = Drive.Drives.insert({name:data[i]}, Utilities.getUuid())
}

Logger.log(teamDrive);
}

