import Alert from ".";
import { AlertProps } from ".";


export default {
    title: "Alert",
    component: Alert,
    tags:["autodocs"]
}



export const Basic = {
    args:{
        message: "This is an alert",
        description:"This is the description of the alert,it can be multilines",
        type:"info"
    }
} as {args: AlertProps}


export const Success = {
    args:{
        message: "This is a success alert",
        description:"This is the description of the success alert,it can be multilines",
        type:"success"
    }
} as {args: AlertProps}

export const Warning = {
    args:{
        message: "This is a warning alert",
        description:"This is the description of the warning alert,it can be multilines",
        type:"warning"
    }
} as {args: AlertProps}



export const WithoutIcon ={
    args:{
        message: "This is an alert without icon",
        description:"This is the description of the alert with icon,it can be multilines",
        type:"info",
        showIcon:false
    }
} as {args: AlertProps}

export const Closeable ={
    args:{
        message: "This is a closeable alert",
        description:"This is the description of the closeable alert,it can be multilines",
        type:"warning",
        closable:false
    }
} as {args: AlertProps}