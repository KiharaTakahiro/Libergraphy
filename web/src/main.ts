import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import {createRouter, createWebHistory} from 'vue-router';

// ルーティング用のVueファイルのインポート
import Home from './pages/Home.vue';
import ArticleList from './pages/ArticleList.vue';
import WriteArticle from './pages/WriteArticle.vue';
import Contact from './pages/Contact.vue';
import Detail from './pages/Detail.vue';

// ルーティングの設定
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name:'Home',component: Home},
    {path: '/article-list', name:'ArticleList',component: ArticleList},
    {path: '/write-article', name:'WriteArticle',component: WriteArticle},
    {path: '/contact', name:'Contact',component: Contact},
    {path: '/detail', name:'Detail',component: Detail},
  ]
});

createApp(App).use(router).mount('#app')
