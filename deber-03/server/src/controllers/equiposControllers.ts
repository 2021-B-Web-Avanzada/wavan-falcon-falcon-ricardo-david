import { Request, Response} from 'express'

import pool from '../database';
class EquiposController {
    public async listarEquipos(req: Request, res: Response){       
        const equipos = await pool.query('SELECT * FROM equipo');
        res.json(equipos);

    }
    public async listarUnEquipo(req: Request, res: Response): Promise<any>{       
       const {id} = req.params;
       const equipos = await pool.query('SELECT * FROM equipo WHERE id_equipo = ?',[id]);
       if (equipos.length > 0){
           return res.json(equipos[0]);
       }
       res.status(404).json({text: "El equipo no existe"});
      

    }

    public async crearEquipo(req: Request, res: Response): Promise<void>{
        //console.log(req.body);
        await pool.query('INSERT INTO equipo set ?', [req.body])
        res.json({message: 'Equipo guardado'});
        
    }

    public async actualizarEquipo(req: Request, res: Response): Promise<void>{
       const {id} = req.params;
       await pool.query('UPDATE equipo set ? WHERE id_equipo = ?', [req.body, id]);
       res.json({message: 'El equipo fue actualizado'})
    }

    public async eliminarEquipo(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM equipo WHERE id_equipo = ?',[id])
        res.json({message: 'El equipo fue eliminado'});
    }
    

}
const equiposController = new EquiposController();
export default equiposController;