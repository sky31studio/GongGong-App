# React

## Reducer 
用于管理state，可以根据**action**中的类型判断使用何种方式处理state。
```js
// taskReducer.js
function taskReducer(tasks, action) {
    // action不止携带类型，还可以携带负载数据
    console.log(action.payload);
    switch(action.type) {
        case 'added': {
            return [
                ...tasks,
                //...
            ];
        };
        case 'delted': {
            //...
        }
        default: {
            //...
        }
    }
}
```
```jsx
// taskTable.jsx
import { useReducer } from 'react'

function TaskTable() {
    const initialTasks = [];
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
    
    const handleAdd = () => {
        displatch({type: 'added', id: 123});
    }
    
    return (
        <View>...<View>
    );
}
```
如果使用Immer，可以简化代码。

## 相关库

### Immer

### Redux




