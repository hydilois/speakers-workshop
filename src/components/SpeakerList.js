import React, { useEffect, useState } from "react";
import SpeakerCardUI from "./SpeakerCardUI";

const SpeakerList = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    const URL_SERVER = 'http://localhost:3001';

    useEffect(() => {
        fetchSpeakersData();
    }, []);

    const fetchSpeakersData = async () => {
        //  récuperer la liste des speakers

        try {
            const response = await fetch(`${URL_SERVER}/speakers`)
            const data = await response.json();
            setData(data)
        } catch (error) {
            // gérer les erreurs
            setError(true)

        }


        /* fetch(`${URL_SERVER}/speakers`)
            .then(response => response.json())
            .then(speakers => {
                setData(speakers)
            })
            .catch(error => {
                console.log(error) 
            }); */
    }


    if (error) {
        return (<div>
            Une erreur est survenue lors de la soumssion de votre  requête.
            Si le problème persiste, bien vouloir contacter l'administrateur.
        </div>)
    }


    return (
        <div className="ui container" style={{marginTop: 15}}>
            <div className="ui four column stackable grid">
                {
                    data.map((speaker, index) => {
                        return (
                            <div className="four wide column" key={index}>
                                <SpeakerCardUI
                                    {...speaker}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default SpeakerList;