import toast from 'react-hot-toast'

// Notificaciones generales
export const errorAlert = (message) => {
    toast.dismiss()
    toast.error(message, {
        duration: 3000,
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
        icon: '❌',
    })
}

export const successAlert = (message) => {
    toast.dismiss()
    toast.success(message, {
        duration: 3000,
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
        icon: '✅',
    })
}

export const copyAlert = (message) => {
    toast.dismiss()
    toast.success(message, {
        duration: 3000,
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
        icon: '📋',
    })
}

