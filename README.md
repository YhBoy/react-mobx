1.npx create-react-app my-app

2.yarn add mobx mobx-react

3.װ����
	yarn add babel-plugin-transform-decorators-legacy
	yarn add @babel/plugin-proposal-decorators
	
	
���õ�ʱ��  ��Ҫ �� git add . 
			git commit -m 'xxx'
			��ִ�� npm run eject


��package.json ���� (�ο�����)
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










