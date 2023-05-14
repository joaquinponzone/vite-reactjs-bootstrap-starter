import { useState } from 'react'
export default function CountOne() {
    const [countOne, setCountOne] = useState(0)
    return (
        <>
            <div className="card">
                <div className="card-body w-full">
                    <h2>Count one: <span className={`badge bg-${countOne === 0 ? 'primary' : countOne > 0 ? 'success' : 'danger'}`}>{countOne}</span></h2>
                    <div className="btn-group w-100" role="group">
                        <button className='btn btn-primary' onClick={() => setCountOne((countOne) => countOne + 1)}>
                            +
                        </button>
                        <button className='btn btn-outline-secondary' onClick={() => setCountOne((countOne) => countOne - 1)}>
                            -
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
