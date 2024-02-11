'use client'
import { useState } from 'react'
import "/public/css/tab.css"

export default function Tab() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleTab = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <button className={`tab-btn ${activeIndex === 1 ?"active":""}`} onClick={() => handleTab(1)}>Tab 1</button>
            <button  className={`tab-btn ${activeIndex === 2 ?"active":""}`} onClick={() => handleTab(2)}>Tab 2</button>
            <button  className={`tab-btn ${activeIndex === 3 ?"active":""}`} onClick={() => handleTab(3)}>Tab 3</button>

            <div className={activeIndex === 1 ? "tab-content active" : "tab-content"}>Tab content 1</div>
            <div className={activeIndex === 2 ? "tab-content active" : "tab-content"}>Tab content 2</div>
            <div className={activeIndex === 3 ? "tab-content active" : "tab-content"}>Tab content 3</div>
        </>
    )
}
