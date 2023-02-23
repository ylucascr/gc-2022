import app from "./app"

const { BACKEND_PORT: PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}`);
});