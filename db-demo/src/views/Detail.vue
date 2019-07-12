<template>
  <div class="container">
    <div class="canvas" v-show="loading">
      <div class="spinner"></div>
    </div>
    <h2>{{movie.title}}({{movie.year}})</h2>
    <div class="box">
      <div class="left">
        ![](movie.images.large)
      </div>
      <div class="main">
        <div>导演：{{getDirectors}}</div>
        <div>主演：{{getCasts}}</div>
        <div>评分：{{movie.rating.average}}</div>
        <div>
          <h3>{{movie.title}}剧情介绍</h3>
          {{movie.summary}}
        </div>
      </div>
    </div>
  </div>
</template>