# State 공부

* 관련 링크 : [생활코딩 수업 강좌 링크 : React/state](https://www.opentutorials.org/module/4058/24738)

## 00. state란

state와 props와 같이 이해해야함.
> 기존 코드는 App.js에 속성(attribute)값에 하드코딩 되어있음.

props와 같은 하드코딩되어있는 값을 state로 만들고  
state값을 Content에 props값으로 전달하는 것을 통해 코드 개선 예정

철저하게 은닉하는것이 중요 :)
> 핸드폰 샀는데 전선이랑 안에 부품들이 노출되면 싫은 것 처럼!

## 01. state 값을 초기화하는 코드

컨포넌트가 실행될 때 constructor()가 있다면 제일 먼저 실행되어 초기화를 담당한다.

> cf. Java 생성자같은 느낌

```js
    constructor(props){
        super(props)
    }
```

## 02. convert props to state

기존 코드

```js
class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="App">
                <Subject title="WEB" sub="world wide web!"></Subject>
                <TOC></TOC>
                <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}
```

바뀐 코드

```js
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            subject:{title:'WEB', sub='world wide web!'}
        }
    }

    render() {
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}>
                </Subject>
                <TOC></TOC>
                <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}
```

## 03. 내부 코드 자동 생성

1. `App.js` = 외부에서 일단 전달

기존 코드

```js
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            subject:{title:'WEB', sub='world wide web!'}
        }
    }

    render() {
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}>
                </Subject>
                <TOC></TOC>
                <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}
```

바뀐 코드

```js
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            subject:{title:'WEB', sub='world wide web!'},
            contents:[
                {id:1, title:'HTML', desc:'HTML is for information'},
                {id:2, title:'CSS', desc:'CSS is for design'},
                {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
              ]
        }
    }

    render() {
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}>
                </Subject>
                <TOC data={this.state.contents}></TOC>
                <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}
```

2. `TOC.js` = 내부에서 유동적으로 만듦

기존 코드

```js
class TOC extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="1.html">HTML</a>
                    </li>
                    <li>
                        <a href="2.html">CSS</a>
                    </li>
                    <li>
                        <a href="3.html">JavaScript</a>
                    </li>
                </ul>
            </nav>
        );
    }
}
```

바뀐 코드

```js
class TOC extends Component {
    render() {
        var lists = [];
        var datas = this.props.data;
        var i = 0;
        while (i < datas.length) {
            lists.push(
                <li>
                    <a href={"/content/" + datas[i].id}>{datas[i].title}</a>
                </li>
            )
            i += 1;
        }

        return (<nav>
                    <ul>
                        {lists}
                    </ul>
                </nav>);
    }
}
```

## 04. "key"값 부여

* 에러 메세지

```plain
index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `TOC`. See https://fb.me/react-warning-keys for more information.
    in li (at TOC.js:10)
    in TOC (at App.js:27)
    in div (at App.js:22)
    in App (at src/index.js:7)
```

![photo](https://user-images.githubusercontent.com/51875059/70440115-cfce1580-1ad4-11ea-8669-eddda10512a0.png)

* 이유 : Elements 여러개를 자동으로 생성할 경우 발생

> 리액트가 내부적으로 필요해서 요청하는 것이기 때문에 그러려니하고 넣어주면 된다.

* 해결책 : 각각의 리스트 항목들에게 key라는 prop값 필요 (식별자 값 필요)

  * 기존 코드

```js
while (i < datas.length) {
    lists.push(
        <li>
            <a href={"/content/" + datas[i].id}>{datas[i].title}</a>
        </li>
    )
    i += 1;
}
```

* 바뀐 코드

```js
while (i < datas.length) {
    lists.push(
        <li key={datas[i].id}>
            <a href={"/content/" + datas[i].id}>{datas[i].title}</a>
        </li>
    )
    i += 1;
}
```

***

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
