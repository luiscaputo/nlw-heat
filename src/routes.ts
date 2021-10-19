import { Router, Response, Request } from "express";

const router = Router();

router.get('/', (request: Request, response: Response) => {
    return response.json('In Production');
})

export default router;