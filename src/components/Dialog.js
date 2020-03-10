import React from 'react';

export default function Dialog(props){
  let objStyle = {
    width:'50%',
    margin:'0 auto'
  };
  return <section className='panel panel-default' style={objStyle}>
    <div className='panel-heading'>
      <h3 className='panel-title'>系统提示</h3>
    </div>
    <div className='panel-body'>

    </div>
    <div className='panel-footer'></div>
  </section>
}

// export default function Dialog(props) {
//   let { con = "系统提示", lx = 0,children } = props;
//   console.log(children);
//   return <section>
//     <h2>系统提示</h2>
//     <span>{lx}</span>
//     <div>{con}</div>
//     {/* {children} */}
//     {
//       React.Children.map(children,item=>item)
//     }
//   </section>
// };