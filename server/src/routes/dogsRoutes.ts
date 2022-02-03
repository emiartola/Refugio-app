import {Router} from 'express';
import dogsController from '../controllers/dogsController';

class DogsRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get( '/', dogsController.list);
        this.router.get( '/:id', dogsController.getOne);
        this.router.post('/', dogsController.create);
        this.router.delete('/:id', dogsController.delete);
        this.router.put('/:id', dogsController.update);
    }
}

const dogsRoutes = new DogsRoutes();

export default dogsRoutes.router;