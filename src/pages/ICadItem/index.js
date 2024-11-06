import "./index.css"

function Inserir_Nota () {
    return (
        <div className='ctn'>
            <header className='main-header'>
                <nav className='nav'>
                    <ul>
                        <li>Inserir NF</li>
                        <li>Remover NF</li>
                    </ul>
                </nav>
            </header>

            <div className="work-container">
                <h1 className="main">Cadastro de item</h1>
                <h2 className="inf2">Insira todos os dados necessários, como CNPJ, data e itens.  A precisão é crucial para evitar erros e garantir conformidade fiscal.</h2>
                <button className="btncaditem">Selecionar NF</button>
                <h3 className="uploadercaditem">ou arraste e solte seu arquivo aqui</h3>

                <button className="sdcaditem"></button>
                <button className="sd1caditem"></button>
            </div>

        </div>
    )
}

export default Inserir_Nota;