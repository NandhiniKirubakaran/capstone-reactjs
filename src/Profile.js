import { Header } from './Header';
import { Navbar } from './Navbar';

export function Profile() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='profile-page'>
      <div className='personal'>
        <div className='personal-details'>
          <label for="name">Name</label>
          <label for="phone">Phone</label>
          <label for="email">Email</label>
          <label for="batch">Batch</label>
          <label for="qualification">Qualification</label>
          <label for="year">Year of passing</label>
          <label for="exp">Year of Experience</label>
          <label for="name">Notice Period</label>
        </div>
        <div className='personal-details-1'>
          <input style={{borderRadius:'10px', height:'50px', width:'350px', border:'1px solid rgb(233, 222, 222)', paddingLeft:'15px'}} type="text" name="" value=""/>
          <input style={{borderRadius:'10px', height:'50px', width:'350px', border:'1px solid rgb(233, 222, 222)', paddingLeft:'15px'}} type="text" name="" value=""/>
          <input style={{borderRadius:'10px', height:'50px', width:'350px', border:'1px solid rgb(233, 222, 222)', paddingLeft:'15px'}} type="text" name="" value=""/>
          <input style={{borderRadius:'10px', height:'50px', width:'350px', border:'1px solid rgb(233, 222, 222)', paddingLeft:'15px'}} type="text" name="" value=""/>
          <input style={{borderRadius:'10px', height:'50px', width:'350px', border:'1px solid rgb(233, 222, 222)', paddingLeft:'15px'}} type="text" name="" value=""/>
          <input style={{borderRadius:'10px', height:'50px', width:'350px', border:'1px solid rgb(233, 222, 222)', paddingLeft:'15px'}} type="text" name="" value=""/>
          <input style={{borderRadius:'10px', height:'50px', width:'350px', border:'1px solid rgb(233, 222, 222)', paddingLeft:'15px'}} type="text" name="" value=""/>
          <input style={{borderRadius:'10px', height:'50px', width:'350px', border:'1px solid rgb(233, 222, 222)', paddingLeft:'15px'}} type="text" name="" value=""/>
        </div>
      </div>
      </div>
    </div>
  );
}
