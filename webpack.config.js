module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/js/main.js`,

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist/js`,
    // 出力ファイル名
    filename: "main.js"
  },
	mode: "production",
};