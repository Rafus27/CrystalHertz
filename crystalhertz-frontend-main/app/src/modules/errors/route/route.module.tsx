// lib
import { FC } from "react";
import { useRouteError } from "react-router-dom";

// styles
import styled from "styled-components";

interface Error {
    status: string;
    statusText: string;
    data: {
        message: string;
    }
}

export const RouteError: FC = () => {
    const error = useRouteError() as Error;

    return (
        <Container>
            <h1>Handler route error</h1>
            <h2>Status: {error.status}</h2>
            <p>Desc: {error.statusText}</p>
            {error?.data?.message && <p>{error.data.message}</p>}
        </Container>
    )
}

const Container = styled.div`
    display: block;
    text-align: center;
`;