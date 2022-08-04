import './App.css'
import Draggable from 'react-draggable';
import React, { useState } from 'react'

function Divs() {

    const [divs,setDivs] = useState()
    const [paras,setParas] = useState()
    const [hoverId,sethoverId] = useState()


    var bool = false

    function div() {
        setDivs(false)
        setParas(true)


    }

    function para() {
        if (bool === false){
            setParas(false)
            setDivs(true)            
        }



    }



    return (
        <Draggable id="d1" disabled={divs}>
            <div className="handle" id="big" onMouseOver={over} onClick={div} >
                <Draggable id="d2" disabled={paras} >
                    <p className="handle" id="test" onClick={para}>AHHHHHHHHHHHHH</p>
                </Draggable>

            </div>
        </Draggable>
    );
}

export default Divs;

/*



*/ 