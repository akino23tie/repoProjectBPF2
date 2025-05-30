export default function Container({children}){
    return(
        <div className="card">
            <h1>ARTIKEL & FORM QNA</h1>
            <br/>
                {children}
            <br/>
            <footer>
                <small>
                    2025 - Politeknik Caltex Riau
                </small>
                <hr/>
            </footer>
        </div>
    )
}
