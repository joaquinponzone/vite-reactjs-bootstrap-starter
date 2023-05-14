import { useState } from 'react'
export default function CountTwo() {
    const [countTwo, setCountTwo] = useState(0)
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h2>Count two: <span className={`badge bg-${countTwo > 0 ? 'success' : 'info'}`}>{countTwo}</span></h2>
                    <div className="btn-group w-100" role="group">
                        <button className='btn btn-info' onClick={() => setCountTwo((countTwo) => countTwo + 1)}>
                            +
                        </button>
                        <button disabled={countTwo < 1} className='btn btn-outline-secondary' onClick={() => setCountTwo((countTwo) => countTwo - 1)}>
                            -
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
