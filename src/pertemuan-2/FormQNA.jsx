export default function FormQNA(){
    return (
        <div>
            <HeadingSatu/>
            <UserCard
            nama="Iwan Koto"
            nim="2055301023"
            tanggal={new Date().toLocaleDateString()}
            />
        </div>
    )
}

function HeadingSatu(){
    
    const text = "FormQNA";
    return (
        <div>
            <h2>{text.toString()}</h2>
        </div>
    )
}

function UserCard(props) {
    return (
        <div>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}



