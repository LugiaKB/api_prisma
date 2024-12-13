import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Prisma',
      version: '1.0.0',
      description: 'Documentação da API gerada com Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Ajuste conforme a organização das suas rotas
};

export default swaggerJsdoc(options);
