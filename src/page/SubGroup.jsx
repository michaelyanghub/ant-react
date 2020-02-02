import React from 'React';
import { Layout, Tabs, Radio,Tree } from 'antd';

//
class SubGroup extends React.Component {

    onTextChange = (event) => {
        console.log(event.target.value);
    }
    callback = (key) => {
        console.log(key);
    }

    //radio
    state = {
        value: 1,
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { TabPane } = Tabs;
        const { TreeNode } = Tree;

        return (
            <Layout>
                // tab
                {/* <div>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </div> */}

                <div>
                    <Tree
                    checkable
                    defaultExpandedKeys={['0-0-0', '0-0-1']}
                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                    onSelect={this.onSelect}
                    onCheck={this.onCheck}
                >
                    <TreeNode title="parent 1" key="0-0">
                        <TreeNode title="parent 1-0" key="0-0-0" disabled>
                            <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                            <TreeNode title="leaf" key="0-0-0-1" />
                        </TreeNode>
                        <TreeNode title="parent 1-1" key="0-0-1">
                            <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
                        </TreeNode>
                    </TreeNode>
                </Tree>
                </div>
                {/* <div>
                    <Radio.Group onChange={this.onChange} value={this.state.value}>
                        <Radio value={1}>A</Radio>
                        <Radio value={2}>B</Radio>
                        <Radio value={3}>C</Radio>
                        <Radio value={4}>D</Radio>
                    </Radio.Group>
                </div> */}
            </Layout>
        )
    };
}
export default SubGroup;





