import {Container} from "@mui/material";
import {AppBox} from "../../Base";

export function Main({children}: any) {
    const a = 'text'
    return (
        <AppBox color="gray10">
            <Container sx={{padding: '0 1rem'}}>
                {children}
            </Container>
        </AppBox>
    )
}
