import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Row from './Row';
import LinearProgress from '@mui/material/LinearProgress';
function Home() {
    const [data,setdata]=useState([]);
    const [page,setpage]=useState(1);
    let maxpage=Math.ceil(data.length/3);
    let si=(page-1)*3;
    let ei=page*3;
    let data1=[]
    data1=data.slice(si,ei);
    const pre=()=>{
        if(page>1){
            setpage(page-1);
        }
    }
    const next=()=>{
        if(page<maxpage){
            setpage(page+1);
        }
    }
    useEffect(async()=>{
        let res=await axios.get('https://jsonplaceholder.typicode.com/users');
        //console.log(res.data);
        setdata([...data,...res.data]);
    },[])
    console.log(data);
  return (
    <>
    {data.length==0?
    <LinearProgress/>
    :
    <>
    <div style={{width:'100vw',backgroundColor:'#f0f8ff',padding:'1rem',textAlign:'center'}}>
        {
            data1.map((obj)=>(
                <Row obj={obj}/>
            ))
        }
        
    </div>
    <div style={{textAlign:'center',margin:'1rem'}}>
        <button onClick={pre} style={{height:'2rem',width:'4rem',padding:'5px'}}>previous</button>
        <button style={{height:'2rem',width:'4rem',padding:'5px'}}>{page}</button>
        <button onClick={next} style={{height:'2rem',width:'4rem',padding:'5px'}}>next</button>
        

    </div></>}
    </>
  )
}

export default Home