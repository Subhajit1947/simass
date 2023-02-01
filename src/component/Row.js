import React,{useState} from 'react'

function Row({obj}) {
    const [model,setmodel]=useState(0);
    return (
        <div>
            <div style={{ height: '6rem', width: '90%', backgroundColor: 'white', margin: '1rem', borderRadius: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <div>
                    <span>hello {obj.username}</span>
                </div>
                <div >
                    <span><span style={{ fontWeight: 'bold', fontSize: '14px' }}>CONTACT</span><br />{obj.name}</span>
                </div>
                <div>
                    <span><span style={{ fontWeight: 'bold', fontSize: '14px' }}>CITY</span><br />{obj.address.city}</span>
                </div>
                <div>
                    <span><span style={{ fontWeight: 'bold', fontSize: '14px' }}>STATE</span><br />{obj.address.street}</span>
                </div>
                <div>
                    {model == 0 ?
                        <button onClick={() => setmodel(1)} style={{
                            backgroundColor: 'red', color: 'white',
                            height: '1.5rem', border: 'none', borderRadius: '7px',
                            width: '6rem',cursor:'pointer'
                        }}>view Details</button>
                        :
                        <button onClick={() => setmodel(0)} style={{
                            backgroundColor: 'red', color: 'white',
                            height: '1.5rem', border: 'none', borderRadius: '7px',
                            width: '6rem',cursor:'pointer'
                        }}>hide Details</button>
                    }
                </div>
            </div>
            {model == 1 ?
                <div style={{ width:'90%', backgroundColor: 'white', border: 'solid 1px',borderRadius:'10px',padding:'1rem' }}>
                    <div>
                        <h4>Description</h4>
                        <span>{obj.company.name} {obj.company.catchPhrase}<br />{obj.company.bs}</span>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',width:'100%',marginTop:'1rem'}}>
                        <div style={{width:'50%'}}>
                            <span><span style={{ fontWeight: 'bold', fontSize: '14px' }}>Contact Person</span><br />{obj.name}</span><br/>
                            <span><span style={{ fontWeight: 'bold', fontSize: '14px' }}>Designation</span><br />{obj.company.name}</span><br/>
                            <span><span style={{ fontWeight: 'bold', fontSize: '14px' }}>Emails</span><br />{obj.email}</span><br/>
                            <span><span style={{ fontWeight: 'bold', fontSize: '14px' }}>Phones</span><br />{obj.phone}</span>
                        </div>
                        <div style={{width:'50%'}}>
                            <span><span style={{ fontWeight: 'bold', fontSize: '14px' }}>Address</span><br />{obj.address.street} {obj.address.zipcode}</span><br/>
                            <span><span style={{ fontWeight: 'bold', fontSize: '14px' }}>City</span><br />{obj.address.city}</span><br/>
                            <span><span style={{ fontWeight: 'bold', fontSize: '14px' }}>State</span><br />{obj.address.street}</span><br/>
                            <span><span style={{ fontWeight: 'bold', fontSize: '14px' }}>Country</span><br />{obj.address.city}</span>
                       
                        </div>
                    </div>
                </div>
                :
                <></>}
        </div>
    )
}

export default Row