import { useEffect, useState } from "react";
import { Quotes } from "../../model/interfaces";
import { fetchAllQuotes } from "../../services/QuotesService";


function GetQuotes(){

    const [QuotesArray, setQuotesArray] = useState<Quotes[]>([]);

    useEffect(() => {
        fetchAllQuotes().then((data) => {
            setQuotesArray(data);
        })
    }, []);

    return(
        <div className="QuotesContainer">
            <h3>Quotes</h3>
            <ul>
                {QuotesArray.map((quotes, index) => 
                    <li key={`${quotes.text}-${quotes.author}-${index}`}>
                        <p>"{quotes.text}" - by {quotes.author}</p>
                    </li>
                )}
            </ul>


        </div>
    );
}


export default GetQuotes;