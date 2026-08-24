import express, { type Express, type Request, type Response} from 'express';



const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Api Products Funcionando correctamente"
    });
});

app.get('/api/health', (req: Request, res: Response) => {
    return res.status(200).json({
        status: "ok",
        message: "Api Products is healthy"
    });
});



export default app;