from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

# CORSの設定
app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"])

@app.get('/get/articles')
async def get_articles():
  articles = [
    {
      "articleImageUrl": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
      "articleTitle": "記事タイトル1",
      "articleOverView": "記事概要1",
      "articleDetailUrl": "/detail"
    },
    {
      "articleImageUrl": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
      "articleTitle": "記事タイトル2",
      "articleOverView": "記事概要2",
      "articleDetailUrl": "/detail"
    },
    {
      "articleImageUrl": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
      "articleTitle": "記事タイトル3",
      "articleOverView": "記事概要3",
      "articleDetailUrl": "/detail"
    },
    {
      "articleImageUrl": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
      "articleTitle": "記事タイトル4",
      "articleOverView": "記事概要4",
      "articleDetailUrl": "/detail"
    },
  ]
  return articles

# TODO: キーからとるようにする 
@app.get('/get/article_detail')
async def get_article_detail():
  article_detail = {
      "articleImageUrl": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
      "articleTitle": "記事タイトル1",
      "articleOverView": "記事概要1",
      "articleDetai": "記事の詳細"
    }
  return article_detail