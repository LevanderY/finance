import { Descriptions, PageHeader } from 'antd';

const Header = () => {
    return (
        <PageHeader
        ghost={false}
        title="Finance task"
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Created">Yurii Leshyshyn</Descriptions.Item>

          <Descriptions.Item label="Creation Time">2022-05-22</Descriptions.Item>
          <Descriptions.Item label="Effective Time">.....</Descriptions.Item>
        </Descriptions>
      </PageHeader>
    )
}

export default Header;