import classNames from 'classnames';
import React from 'react'


export interface SwitchProps {
    label:string;
    checked:boolean;
    onChange:(checked:boolean)=>void;
    rounded?:"none" | "full"
    disabled?:boolean;
    orientation?:'horizontal' |'vertical';
}




function Switch(props:SwitchProps) {
    const {
        label ="", 
        checked = false, 
        onChange, 
        disabled = false,
        rounded = "full",
        orientation = "vertical",
    } = props;

  return (
    <div className={classNames('flex gap-1',{
        "flex-row items-center": orientation === "horizontal",
        "flex-col": orientation === "vertical",
    })}>
    <span className='text-sm select-none'>{label}</span>
    <div className={
        classNames("bg-gray-400 w-10 p-1 cursor-pointer flex",
            "transition-all duration-500 ease-in-out",
            {
                "bg-primary transition-all duration-500 ease-in-out": checked,
                "opacity-50  pointer-events-none cursor-not-allowed": disabled,
                "rounded-full": rounded === "full",
                "rounded-none": rounded === "none",
              
            })}
        onClick={()=> onChange(!checked)}
        >
        <div className={classNames('w-4 h-4 rounded-full bg-white',
            "transition-all duration-500 ease-in-out",
            {
                "rounded-none": rounded === "none",
                "transform translate-x-6":checked,
            }
        )}>
        </div>
    </div>
    </div>
  )
}

export default Switch