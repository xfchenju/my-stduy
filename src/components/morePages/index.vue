<template>  
	<div id="index">
		<h3>导航切换 多页面打开</h3>
		<header>
			<nav>
				<li @click="openIndex()">首页</li>
				<li v-for="item, index in tagsArr" :key="index" @click="openPage(item.id)">{{item.name}}</li>
			</nav>
		</header>
		<div class="tags">
			<div class="tag" :class="active == 0 ? 'active' : ''" @click="pickTag(0)">首页</div>
			<div class="tag" v-for="item, index in activeTags" :key="index" :class="active == item ? 'active' : ''" @click="pickTag(item)">{{tagsArr.find(n => n.id == item).name}}&nbsp;&nbsp;&nbsp;<span @click.stop="closePage(item)">X</span></div>
		</div>
		<div class="container">
			<keep-alive :include="aaa">
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>
<script>
export default {
	name: 'index',
	data() {
		return {
			aaa: ['index1', 'index2', 'index3'],
			tagsList: 'index1, index2',
			tagsArr: [
				{
					'id': 1,
					'name': '首页1',
					'component': 'index1',
					'url': '/AAA/index1'
				},
				{
					'id': 2,
					'name': '首页2',
					'component': 'index2',
					'url': '/index2'
				},
				{
					'id': 3,
					'name': '首页3',
					'component': 'index3',
					'url': '/index3'
				}
			],
			active: 0,
			activeTags: [],
			test: {}
		}
	},
	created() {
		this.activeTags = window.localStorage.getItem('tags', this.activeTags) ? JSON.parse(window.localStorage.getItem('tags', this.activeTags)) : [];
		var url = this.$route.path;
		var activeTag = this.tagsArr.find(n => n.url == url) ? this.tagsArr.find(n => n.url == url) : '';
		//activeTag ? this.activeTags.push(activeTag) : '';
		activeTag ? this.active = activeTag.id : '';
		this.tagsList = window.localStorage.getItem('tags-list', this.tagsList) ? JSON.parse(window.localStorage.getItem('tags-list', this.tagsList)) : [];
	},
	methods: {
		openIndex() {
			this.active = 0;
		},
		openPage(id) {
			this.aaa = ['index1', 'index2', 'index3'];
			this.active = id;
			if(this.activeTags.findIndex(n => n == id) < 0) {
				var component = this.tagsArr.find(n => n.id == id).component
				this.activeTags.push(id);
				this.tagsList.push(component);
				var url = this.tagsArr.find(n => n.id == id).url
				this.routerPage(url)
			}else {
				var url = this.tagsArr.find(n => n.id == id).url
				this.routerPage(url)
			}
			window.localStorage.setItem('tags', JSON.stringify(this.activeTags));
			window.localStorage.setItem('tags-list', JSON.stringify(this.tagsList));

			console.log(this.tagsList,'tagsList')
		},
		pickTag(id) {
			if(id == 0) {
				this.active = 0;
				this.routerPage('/index')
			}else {
				this.active = id;
				var url = this.tagsArr.find(n => n.id == id).url
				this.routerPage(url)
			}
		},
		closePage(id) {
			//console.log(this.aaa, 'aaa');
			this.aaa = ['index2', 'index3'];
			var activeIndex = this.tagsArr.find(n => n.id == id);
			var index = this.activeTags.findIndex(n => n == id);
			if(id != this.active) {
				this.activeTags.splice(index, 1);
				return false;
			}
			var tagComponent = activeIndex.component
			var tagIndex = this.tagsList.findIndex(n => n == tagComponent);
			this.tagsList.splice(tagIndex, 1);
			console.log(activeIndex, this.tagsList, 'activeIndex')

			if(this.activeTags.length == 1) {
				var activeTag = 0;
				var url = '/index'; 
			}else if(index == (this.activeTags.length - 1)) {
				var activeTag = this.tagsArr[index - 1].id;
				var url = this.tagsArr[index - 1].url; 
			}else if(index < (this.activeTags.length - 1)) {
				var activeTag = this.tagsArr[index + 1].id;
				var url = this.tagsArr[index + 1].url; 
			}
			this.activeTags.splice(index, 1);
			this.routerPage(url);
			this.active = activeTag;
			window.localStorage.setItem('tags', JSON.stringify(this.activeTags));
			window.localStorage.setItem('tags-list', JSON.stringify(this.tagsList));
		},
		routerPage(url) {
			this.$router.push(url)
		}
	}
}  
</script>
<style> 
header {
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #666;
}
header nav li{
	margin: 0 5px;
	list-style: none;
	float: left;
	width: 100px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	cursor: pointer;
}
.tags {
	width: 100%;
	height: 40px;
	background-color: #fff;
}
.tag {
	margin: 10px 10px 0;
	float: left;
	width: 100px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	background-color: #6c9c97;
	color: #fff;
	font-size: 14px;
	cursor: pointer;
}
.tag.active {
	background-color: red;
}
.container {
	width: 100%;
	height: 600px;
	background-color: #f7f7f7;
}
</style> 