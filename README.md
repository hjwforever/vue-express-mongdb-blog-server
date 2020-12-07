# vue-express-mongdb-blog-server

>前端Vue，后端Express，数据库Mongodb 

vue-express-mongdb-blog文章管理系统的后端系统，
带有登录注册及相关中间件、权限区别、分页搜索、增删改查文章功能等api接口;



## Ⅰ. Project setup

```
npm install
```

## Ⅱ. Run Server

```
node index.js
```

#### 该分支为纯服务器， 整合前端项目的版本可查看[release]([hjwforever/vue-express-mongdb-blog-server at release (github.com)](https://github.com/hjwforever/vue-express-mongdb-blog-server/tree/release))分支



## Ⅲ. API

正常运行后即可以 ```BASEURL = http://localhost:8080/api/``` 为基路由发起api请求, 以下为具体接口:



### ① POST `posts`

path: `posts   `<br>

```
eg. 
http://localhost:8080/api/posts
requestBody:
{
    "title":"Test 5",  // 文章标题
    "author":"aruoxi",    // 文章作者
    "content":"This is a test by hjw"  // 文章内容
}
```

method: 

`POST`

description: 

>创建新文章

response body: 

```json
{
    "likes": [],  // 点赞用户id列表
    "title": "Test 5", // 文章标题
    "author": "aruoxi", // 文章作者
    "content": "This is a test by hjw", // 文章内容
    "createdAt": "2020-12-07T05:47:47.419Z", // 文章创建时间
    "updatedAt": "2020-12-07T05:47:47.419Z", // 文章更新时间
    "id": "5fcdc203b013491f4c8b8470" // 文章id
}
```





### ②  `GET` `posts[?page=page[&size=size]]` (default page=0,size=3)  

>分页获取文章(分页查找, 当size= 'all' 时查询所有文章)

path: 

`posts[?page=page[&size=size]]`

`eg. http://localhost:8080/api/posts?page=3&size=6`   
method: 

`GET`
description: 

>获取指定id的文章 
>response body: 

```json
{
    "totalItems": 53, // 文章总数
    "posts": [
        {post1}, //省略, 具体格式可参考下一个接口的response body
        {post2},
        {post3}
    ],
    "totalPages": 9,  // 总页数
    "currentPage": 3  // 当前页数, 从0开始计数, 即urrentPage=3为第四页
}
```



### ③ `GET` `posts/:id`

path:

 `posts/:id   `

`eg. http://localhost:8080/api/posts/5fcc868cf5c2372360e43366`   
method:

 `GET`

description: 

>获取指定id的文章 
>response body: 

```json
{
    "likes": [  //点赞用户id列表
        "5fc3385a8aaaa83f10b8269d",
        "5fc75475f179e724d80a38bb",
        "5fc8bbfa3b47062168dd26b7",
        "5fc9053d3b47062168dd26c8"
    ],
    "title": "Test 2", //文章标题
    "author": "hjw",   //文章作者
    "content": "This is a test by hjw",  //文章内容
    "createdAt": "2020-12-06T07:21:48.756Z",  //文章创建时间
    "updatedAt": "2020-12-06T15:30:40.955Z",  //文章更新时间
    "id": "5fcc868cf5c2372360e43366"  //文章id
}
```



### ④ `PUT` `posts/:id`

path:

 `posts/:id   `

```
eg. 
http://localhost:8080/api/posts/5fc8844baf55d7238c21ff4a
requestBody:
{
    "title":"Test 1",  // 文章标题
    "author":"hjw",    // 文章作者
    "content":"This is a update test by hjw"  // 文章内容
}
```

method: 

`PUT`

description: 

>更新指定id的文章 

response body: 

```json
{ "message": "Post was updated successfully." }
```



### ⑤ `PUT` `post/like`

path: 

`post/like   `

```
eg. 
http://localhost:8080/api/post/like
requestBody:
{
    "id": "5fcc868cf5c2372360e43366",       // 文章id
    "userId": "5fc338708aaaa83f10b8269e",   // 用户id
    【"unlike": true】(defalut in server: "unlike": false )  // 是否为取消点赞操作
}
```

method: 

`PUT`

description: 

>点赞或取消点赞

response body: 

```json
【"unlike": false】:  //点赞
{ 
    "message": "successfully, The User(id=5fc338708aaaa83f10b8269e) liked  the Post(id=5fcc868cf5c2372360e43366)!"
}
【"unlike": true】:  // 取消点赞
{
    "message": "successfully, The User(id=5fc338708aaaa83f10b8269e) unliked  the Post(id=5fcc868cf5c2372360e43366)!"
}
```
