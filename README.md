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










