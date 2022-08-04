export default function Teste(){



    const session = JSON.parse(localStorage.getItem('session'));
    console.log(session)
    
    return (
        <>
            <h1>Teste concluido com sucesso</h1>
        </>
    );
}