import '../../node_modules/@spectrum-css/vars/dist/spectrum-global.css'
import '../../node_modules/@spectrum-css/vars/dist/spectrum-medium.css'
import '../../node_modules/@spectrum-css/vars/dist/spectrum-light.css'
import '../../node_modules/@spectrum-css/page/dist/index-vars.css'
import '../../node_modules/@spectrum-css/button/dist/index-vars.css'
import {MouseEventHandler} from 'react'

interface BtnParams {
    target?: MouseEventHandler;
    href?: string;
}

export function SrmBtn(params: BtnParams) {
    const target = params.target ? params.target : () => window.location.assign(params.href!);
    return (
        <button className="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM"
                onClick={target}>
            <span className="spectrum-Button-label">Button</span>
        </button>
    );
}