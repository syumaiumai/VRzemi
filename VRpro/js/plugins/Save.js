//=============================================================================
// Save.js	2018/09/23
// The MIT License (MIT)
//=============================================================================

/*:
 * @plugindesc ログのセーブ
 * @author Hiroro
 *
 * @help 
 * 
 * 
 * 
 * 
 * 
 */
(function () {

var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        


if( command ==='save.log'){     //プラグインコマンド？


	var chat_comm = [];
		var log = $gameVariables.value(143).split(',');//チャットのログ
		var chat_comm =[log.join("\r\n")];//チャットのログを改行して連結

		var str1 = chat_comm

	var blob = new Blob([str1], {type: "text/plain"});//バイナリデータを作ります。

	var a = document.createElement("a");

	a.href = URL.createObjectURL(blob);
	a.target = '_blank';
	a.download = 'ファイル名.txt';
	a.click();


};

};


})();