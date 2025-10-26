import {isRouteErrorResponse, useRouteError} from "react-router-dom";

export default function ErrorPage() {

    const error = useRouteError();
    console.error(error);

    return(
        <div id='error-page' className='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred. We apologize!</p>
            <p>
                <i>{isRouteErrorResponse(error)
                    ?`${error.status}${error.statusText}`
                    : error instanceof Error
                    ? error.message
                    :'Unknown error'}</i>
            </p>
        </div>
    )
}