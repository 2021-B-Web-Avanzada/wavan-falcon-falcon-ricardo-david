import {Router} from 'express'

import equiposController from '../controllers/equiposControllers'

class EquiposRoutes{
    public router: Router = Router();
    constructor(){
        this.config();


    }
    config(): void{
        this.router.get('/', equiposController.listarEquipos);
        this.router.get('/:id', equiposController.listarUnEquipo);
        this.router.post('/', equiposController.crearEquipo);
        this.router.put('/:id', equiposController.actualizarEquipo);
        this.router.delete('/:id', equiposController.eliminarEquipo);
        
    }

}
const equiposRoutes = new EquiposRoutes();
export default equiposRoutes.router;