import React, { useCallback, useEffect, useState } from 'react'
import { Button, Divider, message, Form, Select } from 'antd';
import { EyeFilled, EyeInvisibleOutlined, SearchOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import BreadCrumd from '../../../component/admin/breadcrumb/BreadCrumd';

const Report = () => {
    const columns = [
        {
            title: 'Tên bệnh nhân',
            dataIndex: 'lastName',
            sorter: (a, b) => a.lastName.localeCompare(b.lastName),
        },
        {
            title: 'Điện thoại',
            dataIndex: 'phone',

        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
            sorter: (a, b) => a.gender.localeCompare(b.gender),
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'amount',
            sorter: (a, b) => {
                return a.amount > b.amount
            }
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (item) => <>
                <Button type='primary' icon={item.display === 1 ? <EyeFilled /> : <EyeInvisibleOutlined />}></Button>
            </>,
        },
    ];

    const [data, setData] = useState([]);
    const [item, setItem] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const onOpenModal = () => {
        setOpenModal(true);
    }

    const onCloseModal = () => {
        setOpenModal(false);
        setItem({})
    }

    return (
        <Content style={{ margin: '0 16px' }}>
            <BreadCrumd title='Dịch vụ' subtitle='Danh sách' />
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                {/* <Space direction="horizontal" style={{ width: '100%', justifyContent: 'left' }}>
                    <Button type="primary" htmlType="submit" icon={<PlusOutlined />} onClick={onOpenModal}>
                        Thêm dịch vụ
                    </Button>
                </Space> */}
                <Divider />
                <Table columns={columns} dataSource={data} />
                {/* <CommonForm fields={columns} item={item} openModal={openModal} onCloseModal={onCloseModal} /> */}
            </div>
        </Content>
    );
}

export default Report;