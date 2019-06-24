import express, { NextFunction, Request, Response } from 'express';
import * as path from 'path';

const app: express.Application = express();
const port: string = (process.env.PORT || '3000');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, './angular-tour-of-heroes')));
app.get('*', ((req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, './angular-tour-of-heroes/index.html'));
}));


app.listen(port, () => {
  console.log(('caastle-conf-ui:server'), (`Listening on ${port}`));
});

export default app;
