import { Progress, Grid } from "@nextui-org/react";

export default function App() {
  return (
    <Grid.Container xs={12} sm={6} gap={2}>
      <Grid>
        <Progress value={100} shadow color="primary" status="primary" />
      </Grid>
    </Grid.Container>
  );
}
