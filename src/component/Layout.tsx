
export default function Layout({children}: JSX.IntrinsicElements["div"]){
    return (
        <>
        <h1 className = "bg-purple-500"> ----------------REFRAME--------------- </h1>

        {children}

        <h1 className = "bg-#512C4D"> ------------------------------------------- </h1>
        </>
    )
}