import { Descriptions, PageHeader } from 'antd';

const Header = () => {
    return (
        <PageHeader
        ghost={false}
        title="Finance task"
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Created"><p data-testid='myName'>Yurii Leshyshyn</p></Descriptions.Item>
          <Descriptions.Item label="Start Time">23:24</Descriptions.Item>
          <Descriptions.Item label="End Time">01:45</Descriptions.Item>
        </Descriptions>
      </PageHeader>
    )
}

export default Header;