import { traducirEstado } from '../../utils/translations';
import './StatusBadge.scss';

function StatusBadge({ status }) {
  // La clase cambia según el estado: status-badge--alive, status-badge--dead o status-badge--unknown
  return (
    <span className={`status-badge status-badge--${status.toLowerCase()}`}>
      {traducirEstado(status)}
    </span>
  );
}

export default StatusBadge;
