import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className="widgets">
            <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Freact%2Fposts%2F2408710402540686&width=340&show_text=true&height=1500&appId"
                width="340"
                height="100%"
                style={{ border:"none", overflow:"hidden" }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">

            </iframe>
        </div>
    )
}

export default Widgets
