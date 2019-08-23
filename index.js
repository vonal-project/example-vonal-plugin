import { spawn } from 'child_process'
import { ipcRenderer } from 'electron'

export default (q) => {
    if(q.includes('keyword to trigger'))
        return <div className="row">
            Launch 
            <button onClick={e => {
                // start chrome
                spawn( "/usr/bin/chromium", { detached:true, stdio:'ignore' }).unref()
                
                // hide Vonal
                ipcRenderer.send('hide')
            }}>chromium</button>
        </div>

    return null
}