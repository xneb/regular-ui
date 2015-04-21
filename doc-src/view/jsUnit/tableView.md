### 示例
#### 基本形式

<div id="j-example1"></div>

```xml
<tableView source={source} fields={@(fields)} />
```

或

```javascript
var source = [
    {id: 3, name: '精通Javascript开发', org: '前端Funs', hits: 42371},
    {id: 2, name: 'Android深入浅出', org: 'Android学院', hits: 30645},
    {id: 1, name: 'cocos2dx游戏开发教程', org: '鱼C课程', hits: 25112},
    {id: 4, name: 'MySQL数据库', org: 'LAMP兄弟连', hits: 18089},
    {id: 5, name: 'Arduino初级教程', org: '硬件社', hits: 16361}
];

var tableView = new TableView({
    data: {
        source: source,
        fields: [
            {key: 'name', name: '课程'},
            {key: 'org', name: '机构'},
            {key: 'hits', name: '点击率'}
        ]
    }
}).$inject('#j-example1');
```

#### 远程数据

同[ListBox](listbox.html)。

#### 排序

只要给可排序的字段添加`sortable: true`即可。

如果有`service`属性，会向服务器发送请求并带上排序相关的参数，进行后端排序；如果没有`service`属性，则在本地对`source`进行排序。

<div id="j-example2"></div>

```xml
<tableView source={source} fields={@(fields)} />
```

或

```javascript
var source = [
    {id: 3, name: '精通Javascript开发', org: '前端Funs', hits: 42371},
    {id: 2, name: 'Android深入浅出', org: 'Android学院', hits: 30645},
    {id: 1, name: 'cocos2dx游戏开发教程', org: '鱼C课程', hits: 25112},
    {id: 4, name: 'MySQL数据库', org: 'LAMP兄弟连', hits: 18089},
    {id: 5, name: 'Arduino初级教程', org: '硬件社', hits: 16361}
];

var tableView = new TableView({
    data: {
        source: source,
        fields: [
            {key: 'name', name: '课程', sortable: true},
            {key: 'org', name: '机构'},
            {key: 'hits', name: '点击率', sortable: true}
        ]
    }
}).$inject('#j-example2');
```