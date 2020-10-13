const data = {
    name: "jessica",
    age: 19,
    shan: {
        name: "wudi",
        age: 20
    },
    arr:[1,11,2,3,4]
}
//let value = data.age;
//console.log(data.name); //设置
//data.name="wudi";

// for (let key in data) {
//     Object.defineProperty(data, key, {

//         get() {
//             //获取的值会执行这个函数   
//             console.log("du");
//             return value
//         },
//         set(newValue) {
//             //当你设置一个值的时候，会执行set
//             console.log("xi");
//             console.log(newValue);
//         }
//     })
// }
// console.log(data.age);

function defineReactive(data, key, value) {
     observer(value)
    Object.defineProperty(data, key, {
        get() {
            console.log("du");
            return value;
        },
        set(newValue) {
            console.log("xi");
            if (value === newValue) {
                return;
            }
            value = newValue;
            render();
        }
    })
}

function render() {
    console.log("yemianxuerl");  //这个就是页面渲染的  
}

function observer(data) {
    if(Array.isArray(data)){
        return;
    }
    
    if (typeof data === "object") {
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                defineReactive(data, key, data[key])
            }
        }
    }
}
observer(data)
data.shan.age1 = 22;  //监听不到增和删
//console.log(data.shan.age1); //这个不会执行set 只执行大对象  对象嵌套