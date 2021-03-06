import React from 'react';
import ReactDOM from 'react-dom';
import qs from 'qs';
// import './static/less/index.less';
import './static/css/reset.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Dialog from './components/Dialog';
import PropTypes from 'prop-types';


console.log(qs.parse('name=hshhd&age=18&lx=tttt'));

let root = document.querySelector('#root');


class Head extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
  render() {
    return(<div className="panel-heading">
      <h3 className="panel-heading">点击次数:{this.props.count}</h3>
    </div>)
  }
}

class Body extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
  render() {
    return(<div className="panel-body">
      <button className="btn btn-success" onClick={this.props.callBack}>点我啊</button>
    </div>);
  }
}


class Panel extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state={n:0};
  }

  fn=()=>{
    this.setState({
      n:this.state.n+1
    })
  }

  render() {
    return (
      <section className="panel panel-default" style={{width:'30%',margin:'20px auto'}}>
        <Head count={this.state.n}/>
        <Body callBack={this.fn} />
      </section>
    );
  }
}

ReactDOM.render(<Panel />,root);

// class A extends React.Component{
//   static defaultProps = {};
//   constructor(){
//     super();
//     console.log('1-constructor');
//     this.state={n:1};
//   }

//   componentWillMount(){
//     console.log("2-componentWillMount 第一次渲染之前",this.refs.HH);
//   }



//   render(){
//     console.log("render");
//     return <div ref='HH'>
//       {this.state.n}
//     </div>;
//   }

//   componentDidMount(){
//     console.log("4-componentDidMount  第一次渲染之后",this.refs.HH);
//     setInterval(() => {
//       this.setState({n:this.state.n+1});
//     }, 5000);
//   }

//   shouldComponentUpdate(nextProps,nextState){
//     console.log('5-shouldComponentUpdate');
//     console.log(nextProps,nextState)
//     if(nextState.n>3){
//       return false;
//     }
//     return true;
//   }

//   componentWillUpdate(nextProps,nextState){
//     console.log('6-componentWillUpdate',this.state.n,nextState);
//   }

//   componentDidUpdate(nextProps,nextState){
//     console.log('8-componentDidUpdate',this.state.n,nextState);
//   }


// }


// ReactDOM.render(<A/>,root);

// class Temp extends React.Component{
//   // eslint-disable-next-line no-useless-constructor
//   constructor(){
//     super();
//     this.state={
//       text:'呵呵呵'
//     }
//   }

//   componentDidMount(){
//     setTimeout(() => {
//       this.setState({text:'哈哈哈哈'});
//     }, 1000);
//   }

//   render(){
//     let {text} = this.state;
//     return <section className="panel panel-default">
//       <div className="panel-heading">
//         <input type="text" className="form-control" value={text} onChange={ev=>{
//           this.setState({
//             text:ev.target.value
//           })
//         }}></input>
//       </div>
//       <div className="panel-body">
//         {text}
//       </div>
//     </section>
//   }
// }

// ReactDOM.render(<Temp/>,root);

// class Vote extends React.Component {
//   static defaultProps = {};
//   static propTypes = {
//     title: PropTypes.string.isRequired
//   };
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//     super(props);
//     //init state
//     this.state = {
//       n: 0,  //支持人数
//       m: 0   //反对人数
//     };

//   }
//   render() {
//     // let { n, m } = this.state,
//     //     rate = (n + m) === 0 ? '0%':((n / (n + m) * 100).toFixed(2) + '%');
//     return <section className="panel panel-default" style={{ width: '30%', margin: '20px auto' }}>
//       <div className='panel-heading'>
//         <h3 className='panel-title'>{this.props.title}</h3>
//       </div>
//       <div className='panel-body'>
//         支持人数:<span ref={x=>this.spanLeft=x}>0</span>
//         <br />
//         <br />
//         反对人数:<span ref={x=>this.spanRight=x}>0</span>
//         <br />
//         <br />
//         支持率:<span ref={x=>this.spanRate=x}>0</span>
//       </div>
//       <div className='panel-footer'>
//         <button className='btn btn-success' onClick={this.support.bind(this)}>支持</button>
//         &nbsp;&nbsp;&nbsp;&nbsp;
//         <button className='btn btn-warning' onClick={this.against}>反对</button>

//       </div>
//     </section>
//   }

//   support(ev) {
//     console.log(this);
//     // this.setState({n:this.state.n+1});
//     let { spanLeft } = this;
//     spanLeft.innerHTML++;
//     this.computed();
//   }

//   // against=ev=>this.setState({m:this.state.m+1});
//   against = ev => {
//     let { spanRight } = this;
//     spanRight.innerHTML++;
//     this.computed();
//   }

//   computed = () => {
//     let { spanLeft, spanRight, spanRate } = this,
//       n = parseFloat(spanLeft.innerHTML),
//       m = parseFloat(spanRight.innerHTML),
//       rate = (n + m) === 0 ? '0%' : ((n / (n + m) * 100).toFixed(2) + '%');
//     spanRate.innerHTML = rate;
//   }
// }



// ReactDOM.render(<main>
//   <Vote title='世界杯小组赛 法国VS秘鲁' />
//   <Vote title='世界杯小组赛 阿根廷VS克罗地亚' />
// </main>, root);

// class Dialog extends React.Component {
//   static defaultProps = {lx:"系统提示"};

//   static propTypes = {
//     con:PropTypes.string.isRequired
//   }

//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log(this);
//     // this.props.con = "咔咔咔咔咔咔";
//     let {lx,con} = this.props;
//     return <section>
//       <h3>{lx}</h3>
//   <div>{con}</div>
//     </section>;
//   }
// }

// ReactDOM.render(<main>
//   哈哈蛤
//   <Dialog lx="系统告警" con='嘿嘿嘿' />
// </main>, root);


/*
let data=" render!"
ReactDOM.render(<div id="box">hello react {data}</div>,root,()=>{
  let obox = document.querySelector('#box');
  console.log(obox.innerHTML);
});

 *    1.不建议我们把JSX直接渲染到BODY中，而是放在自己创建一个容器中，一般我们都放在一个ID为ROOT的DIV中即可
 *
 *   2.在JSX中出现的{}是存放JS的，但是要求JS代码指执行完成有返回结果（JS表达式）
 *     ->不能直接放一个对象数据类型的值(对象（除了给style赋值）、数组（数组中如有没有对象，都是基本值或者是JSX元素，这样是可以的）、函数都不行)
 *     ->可以是基本类型的值（布尔类型什么都不显示、null、undefined也是JSX元素，代表的是空）
 *     ->循环判断的语句都不支持，但是支持三元运算符
 *
 *   3.循环数组创建JSX元素（一般都基于数组的MAP方法完成迭代），需要给创建的元素设置唯一的KEY值（当前本次循环内唯一即可）
 *
 *   4.只能出现一个根元素 "<div> </div>"
 *
 *   5.给元素设置样式类用的是className而不是class
 *
 *   6.style中不能直接的写样式字符串，需要基于一个样式对象来遍历赋值
 *
 */


// ReactDOM.render(<div id='box' className="box" style={{color: 'red'}}>
//     <h1>我是标题</h1>
//     <ul>

//     </ul>
// </div>, root);

/*

let data = [{
  name: '张三',
  age: 22
}, {
  name: '李四',
  age: 23
}];

ReactDOM.render(
  <div id="box">hello react
    <ul>
      {
        data.map((item, index) => {
          let { name, age } = item;
          return <li key={index}>
            <span>{name} </span>
            <span> {age}</span>
          </li>
        })}
    </ul>
  </div>, root);
 */

//  ReactDOM.render(<div>
//    <Dialog con='哈哈蛤' />
//    <Dialog />
//    <Dialog con='嘿嘿嘿' lx={2}>
//      <span>12</span>
//      <span>34</span>
//    </Dialog>
//  </div>,root);