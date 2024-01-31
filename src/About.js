// import React, { useState } from 'react';

// const About = () => {
//   const data = [{name:"rahul"},{name:"aman"},{name:"arvind"},{name:"sachin"},{name:"gupta"},{name:"kamal"}]
// const [selectValue, setSelectValue]= useState([])
// const [Render, setRender] = useState(false);
// console.log("data---------3-",selectValue)


//   return (
//     <div>
//       <p className='bg-danger'>about</p>
//       {
//         data.map((item)=>{
//          {/* let NewselectValue=  selectValue
//          let IndexNewselect = NewselectValue.findIndex((i) =>i.name==item.name)
//          console.log("IndexNewselect-----1",IndexNewselect)
         
//          let isSpecificMapKPIObj =IndexNewselect >= 0? NewselectValue[IndexNewselect] : {};
      

//           let checkedsValue = IndexNewselect >= 0 ? true : false;
//          console.log("ttt-----------------",isSpecificMapKPIObj,checkedsValue) */}
//          let NewselectValue=  selectValue;
//          console.log("NewselectValue",NewselectValue)
//          let indexdata = NewselectValue.findIndex((i)=>i.name==item.name)
//          let specificObj =  indexdata >=0 ? NewselectValue[indexdata]:{}
//          let checkedsValue= indexdata>=0  ? true:false 
//          let b1chcek = indexdata>=0 && specificObj.b1==1 ?true:false 
         


//          console.log("b1chcek",b1chcek)


//           return(
//     <> <table class="table">
//     <tbody>
//       <tr>
//         <td> <input class="form-check-input me-3" 
//         // checked={checkedsValue}
//         value={item.name}
//       //   onClick={(e)=>{
//       //  let Val = e.target.value;
//       //  console.log("valllll",Val)
//       // let checkeds=e.target.checked
//       // if(checkeds && !checkedsValue ){
//       //   let data ={
//       //     name:item.name,
//       //     b1:"",
//       //     b2:"",
//       //     b3:"",
//       //     b4:"",
//       //   }
        
//       //   NewselectValue.push(data);
//       //   console.log("!checkeds && checkedsValue",checkeds , checkedsValue)
       
//       //   setSelectValue(NewselectValue)
//       //   setRender(!Render);


//       // }else if (!checkeds && checkedsValue ) {
//       //   console.log("NewselectValueNewselectValue",Val)
//       //    NewselectValue= NewselectValue.filter((i) => i.name !== Val );
//       //    setSelectValue(NewselectValue);
//       //    }}
//       //    }
//       checked={checkedsValue}
//       onClick={(e)=>{
//      let value= e.target.value;
//     let checked= e.target.checked
//         if(checked && !checkedsValue){
//           let data ={
//           name:item.name,
//           b1:0,
//           b2:0,
//           b3:0,
//           b4:0,
//         }
//         NewselectValue.push(data);
//         setSelectValue(NewselectValue)
//         setRender(!Render);}
//         else{
//           if(!checked && checkedsValue){
//             let deletdata =NewselectValue.filter((i)=>i.name !=value)
//             setSelectValue(deletdata)

//           }
//         }

// }}
//  type="checkbox"  id="flexCheckDefault"/> {item.name}</td>
//         <td> <input class="form-check-input me-3" 
//               checked={b1chcek}
//               value={selectValue.b1}

//             onClick={(e)=>{
//           let value = e.target.value;
//           let checked = e.target.checked
//           if(indexdata >=0){
//             // console.log("specificObj--0",specificObj)
//             specificObj["b1"]= checked ? 1 :0
//             // console.log("NewselectValu1",NewselectValue)
//             NewselectValue[indexdata]=specificObj
            

      
//            setSelectValue(NewselectValue)
//            setRender(!Render)
          
            


//           }
       
//         }}
        
//         type="checkbox"  id="flexCheckDefault"/>b.tech</td>
//         <td> <input class="form-check-input me-3" type="checkbox" value="true" id="flexCheckDefault"/>bsc</td>
//         <td> <input class="form-check-input me-3" type="checkbox" value="true" id="flexCheckDefault"/>bca</td>
//         <td> <input class="form-check-input me-3" type="checkbox" value="true" id="flexCheckDefault"/>b.a</td>
//       </tr>
//     </tbody>
//   </table>
// </>
//           )
//         })
//       }
//     </div>
//   );
// }

// export default About;
import React, { useState } from 'react'

const About = () => {
  const [addItem, setItem] = useState({
    name:""
  })
  const [namedata, setNamedata]= useState([])
  const [dataid, setdataid]= useState(null)
    console.log("namedata",namedata)

  const addData =(e)=>{
    if(addItem.name != ""){
      let data = {id: Date.now(), name:addItem.name}

    setNamedata([...namedata,data ])
  
    }
    setItem({ name: '' })

  
 

  }

  const deletes = (item)=>{
    // console.log("filterData",item.name)
    let filterData =namedata.filter((i)=> i.name !=item.name)
    console.log("filterData",filterData)
    setNamedata(filterData )
   
  }

    
    const update = (item)=>{
      console.log("item-----------", item)
      setdataid(item)
      setItem({name:item.name})
      
    // setItem({ name: '' })



    }
    const changeUpdate =()=>{
      console.log("addItem",addItem,dataid)
      if(dataid  !== null){
        // console.log("updatedata----------",dataid)
        let updatedata = namedata.map((i)=>
          i.id===dataid.id ?{...i, name:addItem.name} : i

        ) 
        
        console.log("updatedata----------",updatedata)
        setNamedata(updatedata)
        setItem({name:""})
        setdataid(null)

       
      }
     
  



    }

  return (

    <div>
    <input type='text' value={addItem.name} onChange={(e)=>setItem({ name:e.target.value})}  />
    <button onClick={addData}> add</button>
    <button onClick={changeUpdate}> Update</button>
    {/* <p>{addItem.name}</p> */}
    {
      namedata&& namedata.map((i)=>{
        return(
          <>
          <p> {i.id}</p>
          <p>{i.name}</p>
          <button onClick={()=>deletes(i)}> delete</button>
          <button onClick={()=>update(i)}> edit</button>
          </>
        )
      })
    }
  
      
    </div>
  )
}

export default About

