export default function alertField( {label} ) {
    return (
        <div className="mt-4 p-3">
            <p className="block bg-red-100 border-l-4 border-red-500 text-red-700">
                {label}
                </p>
        </div>
    )
}
