一个通过使用 key 处理表单并可保存每个收件人的草稿消息的简单react聊天页面<br>
==========================
### 在[ 使用key 来重置 state 在处理表单](https://zh-hans.react.dev/learn/preserving-and-resetting-state#option-2-resetting-state-with-a-key)示范代码的基础上修改
### 实现保存聊天信息草稿并允许用户即使关闭页面也能恢复草稿<br>
## App.js代码注释：
  1. ```javascript
     const [to, setTo] = useState(contacts[0]);

  #### 这段 JavaScript 代码使用了 React 的 `useState` 钩子来创建了一个名为 `to` 的状态变量和一个名为 `setTo` 的状态更新函数。这些状态变量用于管理一个名为 `contacts` 的数组中的数据。

  

  具体解释如下：
 - `useState(contacts[0])`：这行代码通过调用 `useState` 钩子，初始化了一个状态变量 `to`，并将其初始值设置为 `contacts` 数组的第一个元素（`contacts[0]`）。

  总之，这段代码的目的是在 React 组件中创建一个状态变量 `to`，并将其初始值设置为 `contacts` 数组的第一个元素，以便在组件中跟踪和操作这个值。这个状态变量可以随着组件的生命周期和用户的交互行为而改变。<br>
  
&nbsp;

2. ```javascript
   setDrafts({ ...drafts, [to.id]: drafts[to.id] || '' });

#### 这一行代码有以下两个主要作用：

  1. 复制 `drafts` 对象并更新特定字段：这行代码首先创建了一个新对象，该对象是 `drafts` 对象的浅拷贝，这是通过 `{ ...drafts }` 实现的。接着，它使用 `[to.id]` 作为键，`drafts[to.id] || ''` 作为值来更新新对象。这实际上是在复制 `drafts` 对象的同时，将指定 `to.id` 的草稿文本设置为 `drafts[to.id]` 的值，如果 `drafts[to.id]` 不存在，则将其设置为空字符串。

  2. 为了在切换联系人时保存草稿：这行代码通常在切换联系人时执行。其目的是在切换到新的联系人之前，确保将当前联系人的草稿保存起来。这样，当你再次切换回该联系人时，之前输入的草稿文本仍然可用。

  总之，这行代码的作用是在切换联系人之前，将当前联系人的草稿保存在 `drafts` 对象中。这有助于在不同联系人之间保持草稿的状态。

  3. 在这段代码中，方括号不可以省略，因为 `[to.id]` 是一个计算属性名 (Computed Property Name)，它的目的是创建一个具有动态属性名称的对象键。这允许你在 `drafts` 对象中为每个收件人的草稿消息保存一个属性，属性名称由 `to.id` 决定。

  如果省略方括号，将会尝试将整个表达式 `[to.id]: drafts[to.id] || ''` 视为对象的字面量属性名称，而不是计算属性名。这将导致语法错误，因为在对象字面量中，属性名通常是一个静态字符串。

所以，方括号 `[to.id]` 在这里是必需的，以确保属性名称是根据 `to.id` 的值动态生成的。


<br>
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Folder Structure
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



