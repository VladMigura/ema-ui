import { Icon, notification } from 'antd'

class NotificationUtil {

    static showNotification = (message, description, isSuccess) => {
        const iconType = isSuccess ? 'smile' : 'frown'
        const color = isSuccess ? '#72c040' : '#e13c39'
        notification.open({
            message: message,
            description: description,
            icon: <Icon type={iconType} style={{ color: color }} />,
        });
    };

}

export default NotificationUtil;
