import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { BlogCategories } from './model/BlogCategory';

export default function AppTabs() {
    return (
        <Tabs aria-label="Basic tabs" defaultValue={0}>
            <TabList sx={{justifyContent: 'center'}}>
                {BlogCategories.map((tab, index)=> (<Tab key={index} value={index}> {tab.name}</Tab>) )}
            </TabList>
            {BlogCategories.map((tab, index)=> (<TabPanel key={index} value={index}> {tab.description}</TabPanel>) )}
        </Tabs>
    )
}