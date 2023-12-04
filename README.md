# 一个通过使用 reducer处理状态的简单react聊天页面<br>
## 自[ 此挑战]([https://zh-hans.react.dev/learn/preserving-and-resetting-state#option-2-resetting-state-with-a-key](https://zh-hans.react.dev/learn/extracting-state-logic-into-a-reducer#challenges))示范代码的基础上修改<br>
* 通过事件处理函数 dispatch actions 使得在点击按钮时改变收件人
* 发送消息时显示一个包含收件人电子邮件和信息的 alert 并且清空输入框
* 切换收件人时能单独 “记住” 每个联系人的草稿，并在切换联系人时恢复

## Chat.js代码注释：
  ```javascript
     <button onClick={() =>{alert(`正在发送 "${message}" 到 ${contact.email}`);
        dispatch({
          type: 'edited_message',
          message: ''
        });
     }}>
  ```
  #### 在这个例子中，${message} 会被替换为 message 变量的值，${contact.email} 则会被替换为 contact.email 变量的值。这使得你可以更轻松地构建包含变量值的字符串。在React中，如果你正在构建动态的字符串内容，你可以使用模板字符串（Template literals），它们使用反引号（）包围字符串，并允许嵌入表达式。在模板字符串中，你可以使用 ${}` 语法来插入 JavaScript 表达式或变量，这样可以更方便地构建动态字符串。
  
&nbsp;

## messengerReducer.js代码注释：
  ```javascript
     case 'edited_message': {
      return {
        ...state,
        message: {
          ...state.message,
          [state.selectedId]: action.message
        }
      };
    }
  ```
#### 这段代码是 Messenger 应用中的一个 reducer 操作，处理的是动作类型为 'edited_message' 的情况。在这里，当这个动作被调用时，它返回一个新的状态对象，将当前状态中的消息部分进行更新。

具体解释如下：

1. { ...state }：使用展开运算符将当前状态对象中的所有属性复制到新的对象中，以确保我们不会直接修改原始状态。

2. message: { ...state.message }：同样，我们使用展开运算符将当前消息的状态复制到新的消息对象中。

3. [state.selectedId]: action.message：这一行是使用计算属性名的语法。它更新了消息对象中特定 selectedId 键所对应的值。这个 selectedId 来自当前的状态，并使用 action.message 中的内容作为更新的新值。

这段代码的作用是，当 'edited_message' 动作被触发时，它会将 state.selectedId 对应的消息值更新为 action.message 中的内容。这样就确保了在用户编辑消息时，它会被正确地与 selectedId 关联起来，而其他消息不受影响。


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



