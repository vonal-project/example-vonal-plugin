import { spawn } from 'child_process'

export default (q) => {
    if(q.includes('keyword to trigger'))
        return <div className="row">
            Launch 
            <button onClick={e => {
                // start chrome
                spawn( "/usr/bin/chromium", { detached:true, stdio:'ignore' }).unref()
                
                // hide Vonal
                global.PluginEventHandler.send('window:hide')
            }}>chromium</button>
        </div>

    return null
}