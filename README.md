# State 공부

* 관련 링크 : [생활코딩 수업 강좌 링크 : React/state](https://www.opentutorials.org/module/4058/24738)


## 00. state란?

state와 props와 같이 이해해야함.
> 기존 코드는 App.js에 속성(attribute)값에 하드코딩 되어있음.


props와 같은 하드코딩되어있는 값을 state로 만들고<br />
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

<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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
