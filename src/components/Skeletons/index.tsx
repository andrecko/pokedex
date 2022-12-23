import { Container, Skeleton } from "@mui/material"

export const Skeletons = () => {
    return (
        <Container maxWidth="xl">
            <Skeleton variant="rounded" width="100%" height={260} sx={{ marginBottom:"1em"}}/>
            <Skeleton variant="rounded" width="100%" height={260} sx={{ marginBottom:"1em"}}/>
        </Container>
    )
}