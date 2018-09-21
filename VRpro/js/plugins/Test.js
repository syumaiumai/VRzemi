//=============================================================================
// RTK_Test.js	2016/07/30
// The MIT License (MIT)
//=============================================================================

/*:
 * @plugindesc テスト用プラグイン
 * @author Toshio Yamashita (yamachan)
 *
 * @help このプラグインにはプラグインコマンドはありません。
 * テスト用に作成したものなので、実際に利用する場合には適当にリネームしてください
 */

(function(_global) {

Game_Actors.prototype.actor = function(actorId) {

if (!this._data[2]) {
            this._data[2] = new Game_Actor(2);
        }
return this._data[2];

// ここにプラグイン処理を記載
})(this);

Id