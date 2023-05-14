import CountOne from './CountOne'
import CountTwo from './CountTwo'
export default function Demo() {
    return (
        <main>
            <h1 className="display-1">
                <strong className='text-primary'>Vite</strong> 
                <small className='text-muted'>with</small> 
                <strong className='text-info'>React</strong>
            </h1>
            <h2 className="display-4 text-primary">
                <small className='text-muted'>And</small> Bootstrap
            </h2>
            <div className="row col-sm-12">
                <div className="col-sm-6">
                    <CountOne/>
                </div>
                <div className="col-sm-6">
                    <CountTwo/>
                </div>
            </div>
        </main>
    );
}
