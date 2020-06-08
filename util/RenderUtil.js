import { Button, Checkbox, Popover, Icon, Input } from 'antd'

class RenderUtil {

    static defaultRender(text, record, index) {
        return !text ? <Icon type='dash' /> : text
    }

    static boldRender(text, record, index) {
        return !text ? <Icon type='dash' /> : <h4>{text}</h4>
    }

    static linkRender(text, record, index) {
        return !text ? <Icon type='dash' /> : <a>{text}</a>
    }

    static booleanRender(text, record, index) {
        return !text ? <Icon type='dash' /> : <Checkbox defaultChecked={text} disabled />
    }

    static renderWithTextSearch = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    placeholder={`Search...`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => confirm()}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => confirm()}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
            </Button>
                <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
                    Reset
            </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        render: RenderUtil.defaultRender,
    })

    static uuidV4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

}

export default RenderUtil;
