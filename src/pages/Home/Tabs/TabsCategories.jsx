import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsCategories = () => {
    return (
        <div className='my-5 px-6'>
            <div className='w-2/3 flex justify-center items-center mx-auto text-center '>
                <div className='my-10'>
                    <h1 className='text-3xl font-bold'>Browse Jobs By Categories</h1>
                    <p>Professionally visualize extensible infomediaries whereas top-line e-commerce. Collaboratively e-enable backward-compatible total linkage vis-a-vis intuitive applications. </p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <Tabs>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>

                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TabsCategories;