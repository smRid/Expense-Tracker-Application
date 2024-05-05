import React from 'react'
import { Spin } from 'antd';
const contentStyle = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
};
const content = <div style={contentStyle} />;

function Spinner() {
    return (
        <div className='spinner'>
            <Spin tip="Loading" size="large">
                {content}
            </Spin>
        </div>
    )
}

export default Spinner
