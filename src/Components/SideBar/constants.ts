import AjustesBold from '../../assets/MenuIcons/AjustesBold.svg';
import AjustesRegular from '../../assets/MenuIcons/AjustesRegular.svg';
import BoardsBold from '../../assets/MenuIcons/BoardsBold.svg';
import BoardsRegular from '../../assets/MenuIcons/BoardsRegular.svg';
import EquipesRegular from '../../assets/MenuIcons/EquipesRegular.svg';
import EquipesBold from '../../assets/MenuIcons/EquipesBold.svg';
import RelatoriosBold from '../../assets/MenuIcons/RelatoriosBold.svg';
import RelatoriosRegular from '../../assets/MenuIcons/RelatoriosRegular.svg';

export const MenuList = [
    {
        name: 'Boards',
        route: '/dashboard/boards',
        iconOutFocus: BoardsRegular,
        iconOnFocus: BoardsBold,
    },
    {
        name: 'Equipes',
        route: '/dashboard/equipes',
        iconOutFocus: EquipesRegular,
        iconOnFocus: EquipesBold,
    },
    {
        name: 'Relatórios',
        route: '/dashboard/relatorios',
        iconOutFocus: RelatoriosRegular,
        iconOnFocus: RelatoriosBold,
    },
    {
        name: 'Ajustes',
        route: '/dashboard/ajustes',
        iconOutFocus: AjustesRegular,
        iconOnFocus: AjustesBold,
    }
]