import { useContext } from "react";
import { ContextFotos } from "../context/FotosContext";

export const useFavoritos = () => {
    const { fotos, setFotos, fotoSelecionada, setFotoSelecionada } = useContext(ContextFotos);

    function aoAlterar(id) {

        if (fotoSelecionada?.id === id) {
            setFotoSelecionada({
                ...fotoSelecionada,
                favoritado: !fotoSelecionada.favoritado,
            });
        }
        setFotos(fotos.map(foto =>
            foto.id === id
                ? { ...foto, favoritado: !foto.favoritado }
                : foto
        ));

    }


    return {
        aoAlterar
    };
};
