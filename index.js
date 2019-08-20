import { spawn } from 'child_process'

export default (q) => {
    if(q.includes('c'))
    return <div className="row">
        Launch 
        <button onClick={e => {
            spawn( "/usr/bin/chromium", { detached:true, stdio:'ignore' }).unref()
        }}>chromium</button>
    </div>

    return null
}