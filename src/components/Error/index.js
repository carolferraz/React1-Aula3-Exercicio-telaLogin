import Subtitle from "../Subtitle";
import Title from "../Title";

const Error = ( {showError} ) => {
    let componentForError;

    if (showError) {
        componentForError = <Title title="Usuário não encontrado" />
    } else {
        componentForError = <Subtitle subtitle="Olá usuária!" />
    }
    
    return (
        <div>
            {componentForError}
        </div>
    )
};

export default Error;