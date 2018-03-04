function doGet(e) {
  // こっちがNGで（エラーでない）
  //var userProperties = PropertiesService.getUserProperties();
  //var token = userProperties.getProperty('PRIVATE_TOKEN');
  
  //こっちがOK。
  var token = UserProperties.getProperty('PRIVATE_TOKEN');
  
  if( e.parameter.token == token & token != null ){  
    return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setTitle('GoogleHome');
  }
}

function test_speech(){
  speech('テスト');
}

function speech(text){
  var notify_token = UserProperties.getProperty('GOOGLEHOME_NOTIFY_TOKEN');
  var URL = "http://api.beebotte.com/v1/data/write/talker/messagetext?token="+notify_token;
  var data = { 'data': text }
  var options = {
    method : "post",
    contentType: "application/json",
    payload : JSON.stringify(data)
  };
  var response = UrlFetchApp.fetch(URL,options);
}