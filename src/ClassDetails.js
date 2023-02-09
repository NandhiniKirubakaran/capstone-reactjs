import { HomeOutlined } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupsIcon from '@mui/icons-material/Groups';
import { StackedChart } from './StackedChart';

export function ClassDetails() {
  const datas = [{
    text: "Attendance",
    linePercent: 80,
    icon: <HomeOutlined />,
    iconColor: "hsl(255deg 94% 68%)",
  },
  {
    text: "Task Submission",
    linePercent: 70,
    icon: <AssignmentIcon />,
    iconColor: "#eb6f33",
  },
  {
    text: "Performance",
    linePercent: 75,
    icon: <GroupsIcon />,
    iconColor: "#03c895",
  }
];
  return (
    <>
      <div className='classdetails-page'>
        {/* <DashboardIcon/> */}
        <Navbar />
        <Header />
      </div>
      <div className='dashboard'>
        {datas.map((result, index) => (
          <Dashboard data={result} key={index} />
        ))}
        <div className='chart'>
          <StackedChart />
        </div>
      </div>
      
    </>
  );
}
function Dashboard( {data} ) {
  // const data = {
  //   text: "Attendance",
  //   linePercent: 80,
  //   icon: <HomeOutlined />,
  //   iconColor: "hsl(255deg 94% 68%)",
  // };

  const BorderLinearProgress = styled(LinearProgress)(({ theme, lineColor }) => ({
    height: 6,

    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: lineColor,
    },
  }));

  return (
    <div className="dashboard-box-container">
      <div className='box-spec'>
        <p>{data.text}</p>
        <PersonIcon style={{ color: data.iconColor }} icon={data.icon} />
      </div>
      <div className='progress-line'>
        <BorderLinearProgress lineColor={data.iconColor} variant="determinate" value={data.linePercent} />
        <div className='percentage'>
          <p>Percentage</p>
          <p>{data.linePercent}%</p>
        </div>
      </div>
    </div>
  );
}

