import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react'

const NotificationAlert: React.FC<{
    alert: boolean | null,
    alertType?: "success" | "error",
    alertMessage?: string
}> = ({
    alert,
    alertType = "success",
    alertMessage = ""
}) => {
        const [showAlert, setShowAlert] = useState(alert);

        useEffect(() => {
            setShowAlert(alert);
        }, [alert])

        useEffect(() => {
            const timeoutId = setTimeout(() => {
                setShowAlert(false);
            }, 3000);

            return () => {
                clearTimeout(timeoutId);
            };
        }, [alert]);

        return (
            <div style={{ display: 'flex', alignItems: 'center', position: 'fixed', left: '10px', bottom: '10px' }}>
                {showAlert && (
                    <Alert severity={alertType} onClose={() => { setShowAlert(false) }}>
                        This is a success message!
                    </Alert>
                )}
            </div>
        );
    }

export default NotificationAlert