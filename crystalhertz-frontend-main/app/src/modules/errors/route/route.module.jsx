import { useRouteError } from "react-router-dom";
// styles
import styled from "styled-components";
export const RouteError = () => {
    const error = useRouteError();
    return (<Container>
            <h1>Handler route error</h1>
            <h2>Status: {error.status}</h2>
            <p>Desc: {error.statusText}</p>
            {error?.data?.message && <p>{error.data.message}</p>}
        </Container>);
};
const Container = styled.div `
    display: block;
    text-align: center;
`;
