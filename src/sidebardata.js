import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TaskIcon from '@mui/icons-material/Task';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HailIcon from '@mui/icons-material/Hail';
import SettingsIcon from '@mui/icons-material/Settings';

export const sidebardata = [{
  title: 'Profile',
  path: '/profile',
  icon: <PersonIcon />,
  className: 'nav-text',
},
{
  title: 'Attendance',
  path: '/attendance/',
  icon: <LibraryBooksIcon />,
  className: 'nav-text'
},
{
  title: 'Students List',
  path: '/student-list/',
  icon: <GroupsIcon />,
  className: 'nav-text'
},
{
  title: 'Tasks',
  path: '/tasks',
  icon: <TaskIcon />,
  className: 'nav-text'
},
{
  title: 'Projects',
  path: '/projects',
  icon: <AssignmentIcon />,
  className: 'nav-text'
},
{
  title: 'Syllabus',
  path: '/syllabus',
  icon: <AutoStoriesIcon/>,
  className: 'nav-text'
},
{
  title: 'OverallPerformance',
  path: '/overall-performance',
  icon: <HailIcon />,
  className: 'nav-text'
},
{
  title: 'Settings',
  path: '/settings',
  icon: <SettingsIcon />,
  className: 'nav-text'
}
];
