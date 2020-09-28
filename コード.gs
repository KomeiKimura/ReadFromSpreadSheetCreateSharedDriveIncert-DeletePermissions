function deletePermissionTest1() {
  Drive.Permissions.remove(
    '0AD6ITM76Xa0DUk9PVA',                  //ワーカー_KimuKome
    '00371243986266093845',
    {
      'supportsAllDrives': 'true'
    }
  );
}




function deletePermissionTest2() {

const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  
    for(var i = 0; i < 10; i++){
        Drive.Permissions.remove(
    data[i][0],                  //対象のID
     '00371243986266093845',
    {
      'supportsAllDrives': 'true'
    }
        );
    }
}




function deletePermissionTest3() {

const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  
    for(var i = 0; i < 238; i++){
        Drive.Permissions.remove(
    data[i][0],                  //対象のID
     '00371243986266093845',
    {
      'supportsAllDrives': 'true'
    }
        );
    }
}




function deletePermissionTest4() {

const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  
    for(var i = 0; i < 238; i++){
        Drive.Permissions.remove(
    data[i][0],                  //対象のID
     '08896381351835636331',
    {
      'supportsAllDrives': 'true'
    }
        );
    }
}



function deletePermissionuserk_kimura() {

const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  
    for(var i = 0; i < 238; i++){
        Drive.Permissions.remove(
    data[i][0],                  //対象のID
  '02982359682309853473',
    {
      'supportsAllDrives': 'true'
    }
        );
    }
}





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





//スプレッドシートから情報を取得して格納する test3
function ReadFromSpreadSheet3(){
  const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  SpreadsheetApp.getUi().alert(data[0][0]);
  SpreadsheetApp.getUi().alert(data[1][1]);
  
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





//外部共有ONにした後の作業、権限付与と自分自身の削除





function DrivePermissionInsertTest1(){
  Drive.Permissions.insert(
    {
      'role': 'writer',                   //"編集者"として追加するよ
      'type': 'user',                     //"ユーザー"を追加するよ
      'value': "komei48@gmail.com",           //メールアドレス
    },
    '0AD6ITM76Xa0DUk9PVA',                  //ワーカー_KimuKome
     
    {
      'sendNotificationEmails': 'true',  //★ココ!★"false"にすると通知メールが飛びません
           'supportsAllDrives': 'true'
   
    }
  );
}


 



function DrivePermissionInsertTest2(){
  Drive.Permissions.insert(
    {
      'role': 'writer',                   //"編集者"として追加するよ
      'type': 'user',                     //"ユーザー"を追加するよ
      'value': "komei48@gmail.com",           //メールアドレス
    },
    '0AD6ITM76Xa0DUk9PVA',                  //ワーカー_KimuKome
     
    {
      'sendNotificationEmails': 'false',  //★ココ!★"false"にすると通知メールが飛びません
           'supportsAllDrives': 'true'
   
    }
  );
    Drive.Permissions.insert(
      {
      'role': 'reader',                   //"閲覧者"として追加するよ
      'type': 'user',                     //"ユーザー"を追加するよ
      'value': "meiko496@gmail.com",           //メールアドレス
    },
    '0AD6ITM76Xa0DUk9PVA',                  //ワーカー_KimuKome
     
    {
      'sendNotificationEmails': 'false',  //★ココ!★"false"にすると通知メールが飛びません
           'supportsAllDrives': 'true'
   
    }
  );
   Drive.Permissions.remove(
    '0AD6ITM76Xa0DUk9PVA',                  //ワーカー_KimuKome
    '00371243986266093845',
       {
      'sendNotificationEmails': 'false',  //★ココ!★"false"にすると通知メールが飛びません
           'supportsAllDrives': 'true'
   
    }
  );

  
}


function DrivePermissionInsertTest3(){
  

const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  
    for(var i = 0; i < 10; i++){
  Drive.Permissions.insert(
    {
      'role': 'writer',                   //"編集者"として追加するよ
      'type': 'user',                     //"ユーザー"を追加するよ
      'value': data[i][1],           //メールアドレス
    },
    data[i][0],                  //対象のID
     
    {
      'sendNotificationEmails': 'true',  //★ココ!★"false"にすると通知メールが飛びません
           'supportsAllDrives': 'true'
   
    }
    
  );
    }
}




function DrivePermissionInsertTest4(){
  

const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  
    for(var i = 0; i < 238; i++){
  Drive.Permissions.insert(
    {
      'role': 'writer',                   //"編集者"として追加するよ
      'type': 'user',                     //"ユーザー"を追加するよ
      'value': data[i][1],           //メールアドレス
    },
    data[i][0],                  //対象のID
     
    {
      'sendNotificationEmails': 'false',  //★ココ!★"false"にすると通知メールが飛びません
           'supportsAllDrives': 'true'
   
    }
    
  );
    }
}







function DrivePermissionInsertNJSSQuality(){
  

const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  
    for(var i = 0; i < 238; i++){
  Drive.Permissions.insert(
    {
      'role': 'organizer',                   //"管理者"として追加するよ
      'type': 'user',                     //"ユーザー"を追加するよ
      'value': data[i][1],           //メールアドレス
    },
    data[i][0],                  //対象のID
     
    {
      'sendNotificationEmails': 'false',  //★ココ!★"false"にすると通知メールが飛びません
           'supportsAllDrives': 'true'
   
    }
    
  );
    }
}




function DrivePermissionInsertZAS10857(){
  

const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  
    for(var i = 0; i < 238; i++){
  Drive.Permissions.insert(
    {
      'role': 'writer',                   //"投稿者"として追加するよ
      'type': 'user',                     //"ユーザー"を追加するよ
      'value': data[i][1],           //メールアドレス
    },
    data[i][0],                  //対象のID
     
    {
      'sendNotificationEmails': 'false',  //★ココ!★"false"にすると通知メールが飛びません
           'supportsAllDrives': 'true'
   
    }
    
  );
    }
}




function DrivePermissionInsertALLWorker(){
  

const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  
    for(var i = 0; i < 238; i++){
  Drive.Permissions.insert(
    {
      'role': 'writer',                   //"投稿者"として追加するよ
      'type': 'user',                     //"ユーザー"を追加するよ
      'value': data[i][1],           //メールアドレス
    },
    data[i][0],                  //対象のID
     
    {
      'sendNotificationEmails': 'false',  //★ココ!★"false"にすると通知メールが飛びません
           'supportsAllDrives': 'true'
   
    }
    
  );
    }
}


function DrivePermissionInsertDeleteTest(){
  

const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  
    for(var i = 0; i < 238; i++){
  Drive.Permissions.insert(
    {
      'role': 'writer',                   //"編集者"として追加するよ
      'type': 'user',                     //"ユーザー"を追加するよ
      'value': data[i][1],           //メールアドレス
    },
    data[i][0],                  //対象のID
     
    {
      'sendNotificationEmails': 'false',  //★ココ!★"false"にすると通知メールが飛びません
           'supportsAllDrives': 'true'
   
    }
    
  );
        Drive.Permissions.insert(
    {
      'role': 'reader',                   //"閲覧者"として追加するよ
      'type': 'user',                     //"ユーザー"を追加するよ
      'value': data[i][2],           //メールアドレス
    },
    data[i][0],                  //対象のID
     
    {
      'sendNotificationEmails': 'false',  //★ココ!★"false"にすると通知メールが飛びません
           'supportsAllDrives': 'true'
   
    }
    
  );
          Drive.Permissions.remove(
    data[i][0],                  //対象のID
     '00371243986266093845',
    {
      'supportsAllDrives': 'true'
    }
        );
    }
}





//以下本番用。238個分のフォルダに権限変更するGAS

function DrivePermissionChange(){

const sheet = SpreadsheetApp.getActiveSheet();
const data  = sheet.getDataRange().getValues();
  
    for(var i = 0; i < 238; i++){

  Drive.Permissions.insert(
    {
      'role': 'organizer',                   //"管理者"として追加するよ
      'type': 'user',                     //"ユーザー"を追加するよ
      'value': 'njss_quality@uluru.jp',           //メールアドレス
    },
    data[i][0],                  //対象のID
     
    {
      'sendNotificationEmails': 'false',  //★ココ!★"false"にすると通知メールが飛びません
           'supportsAllDrives': 'true'
   
    }
    
  );
        Drive.Permissions.insert(
    {
      'role': 'writer',                   //"投稿者"として追加するよ
      'type': 'user',                     //"ユーザー"を追加するよ
      'value': 'zas10857@gmail.com',           //メールアドレス
    },
    data[i][0],                  //対象のID
     
    {
      'sendNotificationEmails': 'false',  //★ココ!★"false"にすると通知メールが飛びません
           'supportsAllDrives': 'true'
   
    }
    
  );
          Drive.Permissions.remove(
    data[i][0],                  //対象のID
     '02982359682309853473',
    {
      'supportsAllDrives': 'true'
    }
        );
}
}


