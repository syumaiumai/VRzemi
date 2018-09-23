//=============================================================================
// KeyJudge.js	2018/09/23
// The MIT License (MIT)
//=============================================================================

/*:
 * @plugindesc キー入力判定プラグイン
 * @author Hiroro
 *
 * @help 
 * 以下のとおりスクリプトを入力して使用ください
 * Input.isTriggered('○○') ・・・ 押した瞬間だけ条件を満たす
 * Input.isPressed('○○') ・・・ 押している長さに関係なく押してる間ずっと条件を満たす
 * Input.isRepeated('○○') ・・・ 24フレーム以上押し続けていると条件を満たす
 * スクリプトの説明はスマイル工房様（ http://blog.livedoor.jp/trb_surasura/archives/13728522.html）のwebサイトより引用しました。
 */

(function () {
    Input.keyMapper[65] = 'A';
    Input.keyMapper[66] = 'B';
    Input.keyMapper[67] = 'C';
})();