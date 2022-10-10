import React, {useEffect, useState} from 'react';
import {Breadcrumb, Button, Card, message, Table, UploadProps} from "antd";
import type {ColumnsType} from 'antd/es/table';
import {PlusCircleOutlined, UploadOutlined} from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
import Upload from 'antd/lib/upload/Upload';
import {Axios} from "../Config/Axios";

const Attendance = () => {

    const [modalShow, setModalShow] = useState<boolean>(false)
    const [data, setData] = useState<any>([])

    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Employee',
            dataIndex: 'employee',
            key: 'employee',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Checkin',
            dataIndex: 'checkin',
            key: 'checkin',
            render: checkin => <span>{checkin ? checkin : 'N/A'} </span>,
        },
        {
            title: 'Checkout',
            dataIndex: 'checkout',
            key: 'checkout',
            render: checkout => <span>{checkout ? checkout : 'N/A'} </span>,
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'duration',
            render: text => <span>{text} Minutes</span>,
        },
    ];

    const props: UploadProps = {
        name: 'file',
        action: 'http://localhost:8000/api/import/attendance',
        headers: {},
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                onModalClose();
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    useEffect(() => {
        getData();
    }, [])

    const onModalClose = () => {
        setModalShow(false);
        getData();
    }

    const getData = () => {

        Axios.get('/api/attendance', {
            headers: {
                Accept: 'application/json',
            }
        }).then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
            return error;
        });
    }

    const challenge = (link: string) => {

        Axios.get(link, {
            headers: {
                Accept: 'application/json',
            }
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
            return error;
        });
    }

    return (
        <div>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Attendance</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                <Card title="Attendance" extra={<div>
                    <PlusCircleOutlined onClick={() => setModalShow(true)}/>
                    <Button style={{marginLeft: 4}} onClick={() => challenge('/api/challenge2')}>Challenge 2</Button>
                    <Button style={{marginLeft: 4}} onClick={() => challenge('/api/challenge4')}>Challenge 4</Button>
                </div>}>
                    <Table columns={columns} dataSource={data}/>
                </Card>
            </div>
            <Modal title="Basic Modal" open={modalShow} onOk={getData} onCancel={onModalClose}>
                <Upload {...props}>
                    <Button icon={<UploadOutlined/>}>Click to Upload</Button>
                </Upload>
            </Modal>
        </div>
    )
}

export default Attendance;