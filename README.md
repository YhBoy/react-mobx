1.npx create-react-app my-app

2.yarn add mobx mobx-react

3.装饰器
	yarn add babel-plugin-transform-decorators-legacy
	yarn add @babel/plugin-proposal-decorators
	
	
配置的时候  需要 先 git add . 
			git commit -m 'xxx'
			在执行 npm run eject


在package.json 配置 (参考配置)
	http://blog.sina.com.cn/s/blog_ed9b1e270102yvgd.html
	https://www.jianshu.com/p/6ecd72eb61e5
	"babel": {
		"plugins": [
			[
					"@babel/plugin-proposal-decorators",
					{"legacy": true}
			],
			"transform-class-properties"
				],
		"presets": [
				"react-app",
				"@babel/preset-env"
			]
	},


多个store文件的注入 请参考
 https://www.it1352.com/1628205.html
 https://blog.csdn.net/qq_40816649/article/details/100656796?utm_term=mobx%E5%A4%9A%E4%B8%AAstore&utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~sobaiduweb~default-1-100656796&spm=3001.4430







